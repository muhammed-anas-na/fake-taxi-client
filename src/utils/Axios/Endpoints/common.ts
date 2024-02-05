// const USER_BASE_URL = "http://localhost:8000";
// const DRIVER_BASE_URL = "http://localhost:8001"

//USER API
export const LOGIN_API = "http://localhost:8000/login"
export const SIGNUP_API = "http://localhost:8000/signup"
export const GOOGLE_LOGIN_API="http://localhost:8000/google/auth"
export const SEND_OTP_API = "http://localhost:8000/send-otp"; 
export const SEARCH_LOCATION_API = "http://localhost:8000/search-location"
export const SEND_SMS_API = "http://localhost:8000/send-sms"

//USER TO TRIP SERVICE
export const FIND_CAB_API = "http://localhost:8003/find-cab"
export const GET_COORDINATES_API = "http://localhost:8003/get-coordinates"
export const GET_LIVE_DRIVERS_API = "http://localhost:8003/get-live-drivers"
export const STRIPE_API = 'http://localhost:8003/create-stripe-session'

//FETCH DRIVER DETAILS WITH ID
export const GET_DRIVER_DETAILS_API = "http://localhost:8001/get-driver-details"
 
//FETCH USER DETAILS WITH ID
export const GET_USER_DETAILS_API = "http://localhost:8000/get-user-details"

//Fetch trips of a specific user.
export const GET_TRIP_DATA_API = "http://localhost:8003/get-trip-details"
//DRIVER API
export const DRIVER_SIGNUP_API = "http://localhost:8001/signup"
export const DRIVER_LOGIN_API = "http://localhost:8001/login"
export const DRIVER_SEND_OTP_API = "http://localhost:8001/send-otp"
export const DRIVER_CHECK_OTP_API = "http://localhost:8001/check-otp"
export const DRIVER_SEND_SMS_API = "http://localhost:8001/send-sms";

//ADMIN API
export const ADMIN_LOGIN_API = "http://localhost:8002/login"