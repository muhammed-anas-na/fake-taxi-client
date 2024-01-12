import axios from 'axios';
import { LOGIN_API , SIGNUP_API , DRIVER_SIGNUP_API , DRIVER_LOGIN_API ,GOOGLE_LOGIN_API, ADMIN_LOGIN_API } from '../Endpoints/common';

//USER METHODS
export const LoginFn = async (data: object)=>{
    try {
        return axios.post(LOGIN_API ,data);
    }catch(err){
        return err;
    }
}

export const GoogleLoginFn = async(data: object)=>{
    try{
        return axios.post(GOOGLE_LOGIN_API, data)
    }catch(err){
        return err;
    }
}

export const SignupFn = async(data: object)=>{
    try{
        return axios.post(SIGNUP_API , data);
    }catch(err){
        return err;
    }
}


//DRIVER METHODS
export const DriverSignupFn = async(data: object)=>{
    try{
        return axios.post(DRIVER_SIGNUP_API , data);
    }catch(err){
        return err;
    }
}

export const DriverLoginFn = async(data: object)=>{
    try{
        return axios.post(DRIVER_LOGIN_API,data)
    }catch(err){
        return err;
    }
}

//ADMIN METHODS
export const AdminLoginFn= async(data: object)=>{
    try{
        return axios.post(ADMIN_LOGIN_API,data);
    }catch(err){
        return err;
    }
}
