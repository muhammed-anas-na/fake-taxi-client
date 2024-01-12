import { createSlice } from "@reduxjs/toolkit";

const driverSlice = createSlice({
    name:'driver',
    initialState:{
         driverData:{}
    },
    reducers:{
        addDriver:(state,action)=>{
             state.driverData = {...state.driverData,...action.payload}
        },
        clearDriver:(state)=>{
            state.driverData={}
        },
        getDriver:()=>{},
        updateDriver:()=>{}
    }

})
export const { addDriver,getDriver,updateDriver,clearDriver } = driverSlice.actions
export default driverSlice.reducer; 