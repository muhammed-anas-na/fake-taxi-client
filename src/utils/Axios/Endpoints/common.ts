// const USER_BASE_URL = "http://localhost:8000";
// const DRIVER_BASE_URL = "http://localhost:8001"

export const LOGIN_API = "http://localhost:8000/user/login"
export const SIGNUP_API = "http://localhost:8000/user/signup"
export const GOOGLE_LOGIN_API="http://localhost:8000/user/google/auth"
export const SEND_OTP_API = "http://localhost:8000/user/send-otp"
export const SEARCH_LOCATION_API = "http://localhost:8000/user/search-location"
export const SEND_SMS_API = "http://localhost:8000/user/send-sms"
export const GET_ALL_USERS = "http://localhost:8000/user/get-all-users"
export const GET_TRIP_DETAIL_BY_USER_ID_API = "http://localhost:8003/get-trip-details-by-user-id"

//USER TO TRIP SERVICE
export const FIND_CAB_API = "http://localhost:8003/find-cab"
export const GET_COORDINATES_API = "http://localhost:8003/get-coordinates"
export const GET_LIVE_DRIVERS_API = "http://localhost:8003/get-live-drivers"
export const STRIPE_API = 'http://localhost:8004/create-stripe-session'
export const FINISH_TRIP_API = 'http://localhost:8003/finish-trip'
export const GET_ALL_TRIPS_OF_USER = "http://localhost:8003/get-all-trips-of-user"
export const GET_CURRENT_LOCATION = "http://localhost:8003/get-current-location"
export const GET_ALL_TRIPS = "http://localhost:8003/get-all-trips"
export const GET_TRIP_DETAILS_BY_ID_API = "http://localhost:8003/get-trip-details-by-id"
export const GET_TRIP_DETAIL_BY_DRIVER_ID_API = "http://localhost:8003/get-trip-details-by-driver-id"
export const COMPLETE_CANCEL_TRIP_DETAILS_API = "http://localhost:8003/complete-cancel-trip"

//FETCH DRIVER DETAILS WITH ID
export const GET_DRIVER_DETAILS_API = "http://localhost:8001/get-driver-details"
 
//FETCH USER DETAILS WITH ID
export const GET_USER_DETAILS_API = "http://localhost:8000/user/get-user-details"

//Fetch trips of a specific user.
export const GET_TRIP_DATA_API = "http://localhost:8003/get-trip-details"
//DRIVER API
export const DRIVER_SIGNUP_API = "http://localhost:8001/signup"
export const DRIVER_LOGIN_API = "http://localhost:8001/login"
export const DRIVER_SEND_OTP_API = "http://localhost:8001/send-otp"
export const DRIVER_CHECK_OTP_API = "http://localhost:8001/check-otp"
export const DRIVER_SEND_SMS_API = "http://localhost:8001/send-sms"
export const GET_ALL_DRIVERS = "http://localhost:8001/get-all-drivers"


//ADMIN TO TRIP SERVICE
export const GET_ONLINE_DRIVERS = "http://localhost:8003/get-online-drivers"
//ADMIN API
export const ADMIN_LOGIN_API = "http://localhost:8002/login"
export const GET_DRIVER_REQUEST = "http://localhost:8002/get-driver-request"
export const ACCEPT_DRIVER_REQUST = "http://localhost:8002/accept-driver-request"
export const BLOCK_DRIVER_API = "http://localhost:8001/block-driver"




// const BASE_URL = "carrgo.com";

// // User Service Endpoints
// export const LOGIN_API = `${BASE_URL}/users/login`;
// export const SIGNUP_API = `${BASE_URL}/users/signup`;
// export const GOOGLE_LOGIN_API = `${BASE_URL}/users/google/auth`;
// export const SEND_OTP_API = `${BASE_URL}/users/send-otp`;
// export const SEARCH_LOCATION_API = `${BASE_URL}/users/search-location`;
// export const SEND_SMS_API = `${BASE_URL}/users/send-sms`;
// export const GET_ALL_USERS = `${BASE_URL}/users/get-all-users`;
// export const GET_TRIP_DETAIL_BY_USER_ID_API = `${BASE_URL}/trip/get-trip-details-by-user-id`;

// // User to Trip Service Endpoints
// export const FIND_CAB_API = `${BASE_URL}/trip/find-cab`;
// export const GET_COORDINATES_API = `${BASE_URL}/trip/get-coordinates`;
// export const GET_LIVE_DRIVERS_API = `${BASE_URL}/trip/get-live-drivers`;
// export const STRIPE_API = `${BASE_URL}/payment/create-stripe-session`;
// export const FINISH_TRIP_API = `${BASE_URL}/trip/finish-trip`;
// export const GET_ALL_TRIPS_OF_USER = `${BASE_URL}/trip/get-all-trips-of-user`;
// export const GET_CURRENT_LOCATION = `${BASE_URL}/trip/get-current-location`;
// export const GET_ALL_TRIPS = `${BASE_URL}/trip/get-all-trips`;
// export const GET_TRIP_DETAILS_BY_ID_API = `${BASE_URL}/trip/get-trip-details-by-id`;
// export const GET_TRIP_DETAIL_BY_DRIVER_ID_API = `${BASE_URL}/trip/get-trip-details-by-driver-id`;
// export const COMPLETE_CANCEL_TRIP_DETAILS_API = `${BASE_URL}/trip/complete-cancel-trip`;

// // Fetch Driver Details with ID
// export const GET_DRIVER_DETAILS_API = `${BASE_URL}/drivers/get-driver-details`;

// // Fetch User Details with ID
// export const GET_USER_DETAILS_API = `${BASE_URL}/users/get-user-details`;

// // Fetch trips of a specific user.
// export const GET_TRIP_DATA_API = `${BASE_URL}/trip/get-trip-details`;

// // Driver Service Endpoints
// export const DRIVER_SIGNUP_API = `${BASE_URL}/drivers/signup`;
// export const DRIVER_LOGIN_API = `${BASE_URL}/drivers/login`;
// export const DRIVER_SEND_OTP_API = `${BASE_URL}/drivers/send-otp`;
// export const DRIVER_CHECK_OTP_API = `${BASE_URL}/drivers/check-otp`;
// export const DRIVER_SEND_SMS_API = `${BASE_URL}/drivers/send-sms`;
// export const GET_ALL_DRIVERS = `${BASE_URL}/drivers/get-all-drivers`;

// // Admin to Trip Service Endpoints
// export const GET_ONLINE_DRIVERS = `${BASE_URL}/trip/get-online-drivers`;

// // Admin Service Endpoints
// export const ADMIN_LOGIN_API = `${BASE_URL}/admin/login`;
// export const GET_DRIVER_REQUEST = `${BASE_URL}/admin/get-driver-request`;
// export const ACCEPT_DRIVER_REQUST = `${BASE_URL}/admin/accept-driver-request`;
// export const BLOCK_DRIVER_API = `${BASE_URL}/drivers/block-driver`;
