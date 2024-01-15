import axios from 'axios';
import { LOGIN_API , SIGNUP_API , DRIVER_SIGNUP_API , DRIVER_LOGIN_API ,GOOGLE_LOGIN_API, ADMIN_LOGIN_API,SEND_OTP_API, DRIVER_SEND_OTP_API , DRIVER_CHECK_OTP_API } from '../Endpoints/common';

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


//DRIVER METHODS
export const DriverSignupFn = async(data: object)=>{
    try{
        return axiosInstance.post(DRIVER_SIGNUP_API , data);
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
