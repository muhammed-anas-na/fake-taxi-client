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
    }

})
export const { addFindCab,clearFindCab} = FindCabSlice.actions
export default FindCabSlice.reducer;