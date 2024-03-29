import { Link } from "react-router-dom";
import "./UserSIgnup.css";
import { useForm } from "react-hook-form";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { LoginFn , GoogleLoginFn } from "../../utils/Axios/methods/POST";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUser, clearUser } from "../../utils/Redux/Slice/UserSlice";
import { addtoken } from "../../utils/Redux/Slice/tokenSlice";
import axios from 'axios';
import axiosInstance from "../../utils/Axios/methods/axiosInstance";

interface storeData{
  token:{
    token:string
  }
}

export default function UserLogin() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const handleLogin = async (data: object) => {
    try {
      const response = await LoginFn(data);
      if (response.status == 200) {
        dispatch(clearUser());
        console.log(response.data.userData);
        dispatch(addUser(response.data.userData));
        dispatch(addtoken(response.data.accessToken));
        localStorage.setItem('accessToken' , response.data.accessToken)
        //axiosInstance.defaults.headers.common['Authorization'] = `${response.data.accessToken}` 
        navigate('/');
      }
    } catch (err: any) {
      toast.error(err.response.data.errMessage);
    }
  };

  return (
    <div className="screen bg-bg-image bg-no-repeat bg-cover h-svh">
      <ToastContainer />
      <div className="grid place-items-center">
        <div className="h-auto w-5/6 sm:w-96 bg-white rounded-2xl shadow-2xl mt-60 sm:mt-44 text-center">
          <h1 className="font-bold mt-5 text-4xl">LOGIN</h1>
          <form method="post" onSubmit={handleSubmit(handleLogin)}>
            <div className="mt-8">
              <input
                {...register("number",  { required: true, pattern: /^\d{10}$/ })}
                type="number"
                className="border-l-2 text-lg mt-2 mb-2 text-gray-400"
                placeholder="Enter Number"
              />
              {errors.number?.type == "required" && (
                <p className="text-red-500 text-xs">Number is required</p>
              )}
              {errors.number?.type == "pattern" && (
                <p className="text-red-500 text-xs">Invalid Number</p>
              )}
              <br />
              <input
                {...register("password", {
                  required: true,
                  pattern: /^(?=.*[A-Za-z])(?=.*\d).{8,}$/,
                })}
                type="password"
                className="border-l-2 text-lg mt-2 mb-2 text-gray-400"
                placeholder="Password"
              />
              {errors.password?.type == "required" && (
                <p className="text-red-500 text-xs">Password is required</p>
              )}
              {errors.password?.type == "pattern" && (
                <p className="text-red-500 text-xs">Invalid Password</p>
              )}
            </div>
            <button
              type="submit"
              className="mb-3 text-white bg-blue-500 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-28 py-2.5 mt-16 text-center me-2"
            >
              LOGIN
            </button>
          </form>
        </div>

        <p className="mt-2">
          New?{" "}
          <Link to={"/signup"} className="font-bold text-blue-950">
            Signup here
          </Link>
        </p>

        <GoogleOAuthProvider clientId="105389092526-fnh34dr3oc8n06o1lttrtnkr804h2920.apps.googleusercontent.com">
          <GoogleLogin
            onSuccess={async(credentialResponse) => {
              console.log(credentialResponse);
              let decode = jwtDecode(credentialResponse.credential);
              const response = await GoogleLoginFn(decode);
              console.log(response);
              dispatch(clearUser());
              dispatch(addUser(response.data.data.userExist));
              dispatch(addtoken(response.data.data.accessToken));
              axios.defaults.headers.common['Authorization'] = `${response.data.accessToken}` 
              navigate('/');

            }}
            onError={() => {
              toast.error("Login failed");
            }}
          />
        </GoogleOAuthProvider>
      </div>
    </div>
  );
}
