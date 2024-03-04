import { get } from "lodash";
import { GET_ALL_DRIVERS , GET_ONLINE_DRIVERS,GET_ALL_USERS,GET_DRIVER_REQUEST, GET_ALL_TRIPS } from "../Endpoints/common";
import axiosInstance from "./axiosInstance";

export const getAllDriversFn = async()=>{
    try{
        return axiosInstance.get(GET_ALL_DRIVERS)
    }catch(err){
        return err;
    }
}

export const getOnlineDriversFn = async()=>{
    try{
        return axiosInstance.get(GET_ONLINE_DRIVERS)
    }catch(err){
        return err;
    }
}

export const getAllUsersFn = async()=>{
    try{
        return axiosInstance.get(GET_ALL_USERS);
    }catch(err){
        return err;
    }
}
export const getDriverRequestFn = async()=>{
    try{
        return axiosInstance.get(GET_DRIVER_REQUEST);
    }catch(err){
        return err;
    }
}
export const getAllTripsFn = async()=>{
    try{
        return axiosInstance.get(GET_ALL_TRIPS);
    }catch(err){
        return err;
    }
}