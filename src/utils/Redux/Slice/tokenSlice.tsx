import { createSlice} from "@reduxjs/toolkit";

const tokkenSlice = createSlice({
    name:'token',
    initialState:{
         token: ""
    } ,
    reducers:{
        addtoken:(state,action)=>{
             state.token = action.payload
        },
        cleartoken:(state)=>{
            state.token = ""
        },
    }

})
export const { addtoken,cleartoken} = tokkenSlice.actions
export default tokkenSlice.reducer;