import {configureStore} from '@reduxjs/toolkit';
import UserSlice from '../Slice/UserSlice';
import tokenSlice from '../Slice/tokenSlice';
import DriverSlice from '../Slice/DriverSlice';
import FindCabSlice from '../Slice/FindCabSlice';

const store = configureStore({
    reducer: {
        user: UserSlice,
        token:tokenSlice,
        driver:DriverSlice,
        findcab:FindCabSlice,
    }
})

export default store