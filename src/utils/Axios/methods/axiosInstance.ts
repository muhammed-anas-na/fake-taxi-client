import axios from "axios";

const axiosInstance = axios.create({
    withCredentials: true, // Enables the sending of cookies with cross-origin requests
    headers: {
      'Content-Type': 'application/json',
    },
});

axiosInstance.interceptors.request.use(
  config => {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      config.headers['Authorization'] = `Bearer ${accessToken}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    console.log("In interceptor response" , response);
    return response;
  },
  async (error) => {
    console.log("In interceptor error " , error);
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      console.log("inside iff")
      try {
        const route = import.meta.env.VITE_ENVIRONMENT == 'dev' ? 'http://localhost:8000/user/refresh-token' : import.meta.env.VITE_REFRESH_ROUTE
        console.log("Requesting new accessToken==>" ,route);
        const refreshResponse = await axiosInstance.post(route);
        const newAccessToken = refreshResponse.data.accessToken;
        console.log("New Accesstoken set to localstorage ==>" , newAccessToken);
        localStorage.setItem('accessToken', newAccessToken); // Update in storage

        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
        return axiosInstance(originalRequest);
      } catch (err) {
        console.log(err);
        alert("Login again")
        // Handle refresh token failure (e.g., prompt user to re-authenticate)
        console.error('Refresh token failed:', err);
        // Consider redirecting to login page or displaying an error message
      }
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
