// const USER_BASE_URL = "http://localhost:8000";
// const DRIVER_BASE_URL = "http://localhost:8001"

// export const LOGIN_API = "http://localhost:8000/user/login"
// export const SIGNUP_API = "http://localhost:8000/user/signup"
// export const GOOGLE_LOGIN_API="http://localhost:8000/user/google/auth"
// export const SEND_OTP_API = "http://localhost:8000/user/send-otp"
// export const SEARCH_LOCATION_API = "http://localhost:8000/user/search-location"
// export const SEND_SMS_API = "http://localhost:8000/user/send-sms"
// export const GET_ALL_USERS = "http://localhost:8000/user/get-all-users"
// export const GET_TRIP_DETAIL_BY_USER_ID_API = "http://localhost:8003/get-trip-details-by-user-id"

// //USER TO TRIP SERVICE
// export const FIND_CAB_API = "http://localhost:8003/find-cab"
// export const GET_COORDINATES_API = "http://localhost:8003/get-coordinates"
// export const GET_LIVE_DRIVERS_API = "http://localhost:8003/get-live-drivers"
// export const STRIPE_API = 'http://localhost:8004/create-stripe-session'
// export const FINISH_TRIP_API = 'http://localhost:8003/finish-trip'
// export const GET_ALL_TRIPS_OF_USER = "http://localhost:8003/get-all-trips-of-user"
// export const GET_CURRENT_LOCATION = "http://localhost:8003/get-current-location"
// export const GET_ALL_TRIPS = "http://localhost:8003/get-all-trips"
// export const GET_TRIP_DETAILS_BY_ID_API = "http://localhost:8003/get-trip-details-by-id"
// export const GET_TRIP_DETAIL_BY_DRIVER_ID_API = "http://localhost:8003/get-trip-details-by-driver-id"
// export const COMPLETE_CANCEL_TRIP_DETAILS_API = "http://localhost:8003/complete-cancel-trip"

// //FETCH DRIVER DETAILS WITH ID
// export const GET_DRIVER_DETAILS_API = "http://localhost:8001/get-driver-details"
 
// //FETCH USER DETAILS WITH ID
// export const GET_USER_DETAILS_API = "http://localhost:8000/user/get-user-details"

// //Fetch trips of a specific user.
// export const GET_TRIP_DATA_API = "http://localhost:8003/get-trip-details"
// //DRIVER API
// export const DRIVER_SIGNUP_API = "http://localhost:8001/signup"
// export const DRIVER_LOGIN_API = "http://localhost:8001/api/driver/login"
// export const DRIVER_SEND_OTP_API = "http://localhost:8001/send-otp"
// export const DRIVER_CHECK_OTP_API = "http://localhost:8001/check-otp"
// export const DRIVER_SEND_SMS_API = "http://localhost:8001/send-sms"
// export const GET_ALL_DRIVERS = "http://localhost:8001/get-all-drivers"


// //ADMIN TO TRIP SERVICE
// export const GET_ONLINE_DRIVERS = "http://localhost:8003/get-online-drivers"
// //ADMIN API
// export const ADMIN_LOGIN_API = "http://localhost:8002/login"
// export const GET_DRIVER_REQUEST = "http://localhost:8002/get-driver-request"
// export const ACCEPT_DRIVER_REQUST = "http://localhost:8002/accept-driver-request"
// export const BLOCK_DRIVER_API = "http://localhost:8001/block-driver"
// export const GET_DASHBOARD_DATA = "http://localhost:8003/load-dashboard"



const BASE_URL = "https://muhammedanas.online";

// User Service Endpoints
export const LOGIN_API = `${BASE_URL}/api/user/login`;
export const SIGNUP_API = `${BASE_URL}/api/user/signup`;
export const GOOGLE_LOGIN_API = `${BASE_URL}/api/user/google/auth`;
export const SEND_OTP_API = `${BASE_URL}/api/user/send-otp`;
export const SEARCH_LOCATION_API = `${BASE_URL}/api/user/search-location`;
export const SEND_SMS_API = `${BASE_URL}/api/user/send-sms`;
export const GET_ALL_USERS = `${BASE_URL}/api/user/get-all-users`;
export const GET_TRIP_DETAIL_BY_USER_ID_API = `${BASE_URL}/api/trip/get-trip-details-by-user-id`;

// User to Trip Service Endpoints
export const FIND_CAB_API = `${BASE_URL}/api/trip/find-cab`;
export const GET_COORDINATES_API = `${BASE_URL}/api/trip/get-coordinates`;
export const GET_LIVE_DRIVERS_API = `${BASE_URL}/api/trip/get-live-drivers`;
export const STRIPE_API = `${BASE_URL}/api/payment/create-stripe-session`;
export const FINISH_TRIP_API = `${BASE_URL}/api/trip/finish-trip`;
export const GET_ALL_TRIPS_OF_USER = `${BASE_URL}/api/trip/get-all-trips-of-user`;
export const GET_CURRENT_LOCATION = `${BASE_URL}/api/trip/get-current-location`;
export const GET_ALL_TRIPS = `${BASE_URL}/api/trip/get-all-trips`;
export const GET_TRIP_DETAILS_BY_ID_API = `${BASE_URL}/api/trip/get-trip-details-by-id`;
export const GET_TRIP_DETAIL_BY_DRIVER_ID_API = `${BASE_URL}/api/trip/get-trip-details-by-driver-id`;
export const COMPLETE_CANCEL_TRIP_DETAILS_API = `${BASE_URL}/api/trip/complete-cancel-trip`;

// Fetch Driver Details with ID
export const GET_DRIVER_DETAILS_API = `${BASE_URL}/api/driver/get-driver-details`;

// Fetch User Details with ID
export const GET_USER_DETAILS_API = `${BASE_URL}/api/user/get-user-details`;

// Fetch trips of a specific user.
export const GET_TRIP_DATA_API = `${BASE_URL}/api/trip/get-trip-details`;

// Driver Service Endpoints
export const DRIVER_SIGNUP_API = `${BASE_URL}/api/driver/signup`;
export const DRIVER_LOGIN_API = `${BASE_URL}/api/driver/login`;
export const DRIVER_SEND_OTP_API = `${BASE_URL}/api/driver/send-otp`;
export const DRIVER_CHECK_OTP_API = `${BASE_URL}/api/driver/check-otp`;
export const DRIVER_SEND_SMS_API = `${BASE_URL}/api/driver/send-sms`;
export const GET_ALL_DRIVERS = `${BASE_URL}/api/driver/get-all-drivers`;
export const GET_DASHBOARD_DATA = `${BASE_URL}/api/driver//load-dashboard`;

// Admin to Trip Service Endpoints
export const GET_ONLINE_DRIVERS = `${BASE_URL}/api/trip/get-online-drivers`;

// Admin Service Endpoints
export const ADMIN_LOGIN_API = `${BASE_URL}/api/admin/login`;
export const GET_DRIVER_REQUEST = `${BASE_URL}/api/admin/get-driver-request`;
export const ACCEPT_DRIVER_REQUST = `${BASE_URL}/api/admin/accept-driver-request`;
export const BLOCK_DRIVER_API = `${BASE_URL}/api/driver/block-driver`;
