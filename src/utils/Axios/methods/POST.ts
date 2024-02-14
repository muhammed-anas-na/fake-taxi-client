import axios from 'axios';
import { LOGIN_API ,
    SIGNUP_API,
    DRIVER_SIGNUP_API,
    DRIVER_LOGIN_API,
    GOOGLE_LOGIN_API,
    ADMIN_LOGIN_API,
    SEND_OTP_API, 
    DRIVER_SEND_OTP_API, 
    DRIVER_CHECK_OTP_API,
    SEARCH_LOCATION_API,
    FIND_CAB_API,
    SEND_SMS_API,
    DRIVER_SEND_SMS_API,
    GET_DRIVER_DETAILS_API,
    GET_USER_DETAILS_API,
    GET_COORDINATES_API,
    GET_TRIP_DATA_API,
    GET_LIVE_DRIVERS_API,
    STRIPE_API,
    FINISH_TRIP_API,
    GET_ALL_TRIPS_OF_USER,
    GET_CURRENT_LOCATION,

} from '../Endpoints/common';

const axiosInstance = axios.create({
  withCredentials: true, // Enables the sending of cookies with cross-origin requests
  headers: {
    'Content-Type': 'application/json',
  },
});


//USER METHODS
export const LoginFn = async (data: object)=>{
    try {
        return axiosInstance.post(LOGIN_API ,data);
    }catch(err){
        return err;
    }
}

export const GoogleLoginFn = async(data: object)=>{
    try{
        return axiosInstance.post(GOOGLE_LOGIN_API, data)
    }catch(err){
        return err;
    }
}

export const SignupFn = async(data: object)=>{
    try{
        return axiosInstance.post(SIGNUP_API , data);
    }catch(err){
        return err;
    }
}

export const SendOtpFn =  async(data: object)=>{
    try{
        return axiosInstance.post(SEND_OTP_API , data );
    }catch(err){
        return err;
    }
}

export const SendSms = async(data: object)=>{
    try{
        return axiosInstance.post(SEND_SMS_API , data);
    }catch(err){
        return err;
    }
}


export const SearchLocationFn = (data: string)=>{
    try{
        return axiosInstance.post(SEARCH_LOCATION_API , {data});
    }catch(err){
        return err;
    }
}

export const findCabFn = (data: object)=>{
    try{
        return axiosInstance.post(FIND_CAB_API , data)
    }catch(err){
        return err;
    }
}



export const GetUserDetails = (Id: string)=>{
    try{
        return axiosInstance.post(GET_USER_DETAILS_API , {Id})
    }catch(err){
        return err;
    }
}

export const getCoordinatesFn = (data: string)=>{
    try{
        return axiosInstance.post(GET_COORDINATES_API , {data})
    }catch(err){
        return err;
    }
}

export const GetTripDataFn = ()=>{
    try{
        return axiosInstance.post(GET_TRIP_DATA_API)
    }catch(err){
        return err;
    }
}

export const GetLiveDrivers =()=>{
    try{
        return axiosInstance.post(GET_LIVE_DRIVERS_API);
    }catch(err){
        return err;
    }
}
export const StripeCheckoutFn = (data: object)=>{
    try{
        return axiosInstance.post(STRIPE_API , data)
    }catch(err){
        return err;
    }
}

export const FinishTrip = (data: object)=>{
    try{
        return axiosInstance.post(FINISH_TRIP_API, data)
    }catch(err){
        return err;
    }
}

export const GetAllTripsOfUserFn = (Id: string)=>{
    try{
        return axiosInstance.post(GET_ALL_TRIPS_OF_USER , {Id})
    }catch(err){
        return err;
    }
}

export const GetCurrentLocation = (data: object)=>{
    try{
        return axiosInstance.post(GET_CURRENT_LOCATION , data);
    }catch(err){
        return err;
    }
}









//DRIVER METHODS

export const GetDriverDetails = (Id: string)=>{
    try{
        console.log("Getting driver data...." , Id);
        return axiosInstance.post(GET_DRIVER_DETAILS_API , {Id})
    }catch(err){
        return err;
    }
}
export const DriverSignupFn = async(data: object)=>{
    try{
        return axiosInstance.post(DRIVER_SIGNUP_API , data);
    }catch(err){
        return err;
    }
}

export const SendSmsDriver = async(data: object)=>{
    try{
        return axiosInstance.post(DRIVER_SEND_SMS_API , data);
    }catch(err){
        return err;
    }
}

export const DriverLoginFn = async(data: object)=>{
    try{
        return axiosInstance.post(DRIVER_LOGIN_API,data)
    }catch(err){
        return err;
    }
}

export const DriverSendOtpFn = async(data: object)=>{
    try{
        return axiosInstance.post(DRIVER_SEND_OTP_API , data);
    }catch(err){
        return err;
    }
}

export const DriverCheckOtpFn = async(data:object)=>{
    try{
        return axiosInstance.post(DRIVER_CHECK_OTP_API , data);
    }catch(err){
        return err;
    }
}






//ADMIN METHODS
export const AdminLoginFn= async(data: object)=>{
    try{
        return axiosInstance.post(ADMIN_LOGIN_API,data);
    }catch(err){
        return err;
    }
}
