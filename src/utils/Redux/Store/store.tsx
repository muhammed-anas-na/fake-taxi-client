import {configureStore} from '@reduxjs/toolkit';
import UserSlice from '../Slice/UserSlice';
import tokenSlice from '../Slice/tokenSlice';
import DriverSlice from '../Slice/DriverSlice';

const store = configureStore({
    reducer: {
        user: UserSlice,
        token:tokenSlice,
        driver:DriverSlice,
    }
})

export default store