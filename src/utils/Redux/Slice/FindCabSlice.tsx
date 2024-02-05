import { createSlice } from "@reduxjs/toolkit";

const FindCabSlice = createSlice({
    name:'findcab',
    initialState:{
         findcabData:{}
    },
    reducers:{
        addFindCab:(state,action)=>{
             state.findcabData = {...state.findcabData,...action.payload}
        },
        clearFindCab:(state)=>{
            state.findcabData={}
        },
        updateStatus:(state,action)=>{
            state.findcabData= {...state.findcabData , status:action.payload}
        }
    }

})
export const { addFindCab,clearFindCab,updateStatus} = FindCabSlice.actions
export default FindCabSlice.reducer;