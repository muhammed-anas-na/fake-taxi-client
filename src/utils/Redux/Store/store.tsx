import {configureStore, combineReducers} from '@reduxjs/toolkit';
import UserSlice from '../Slice/UserSlice';
import tokenSlice from '../Slice/tokenSlice';
import DriverSlice from '../Slice/DriverSlice';
import FindCabSlice from '../Slice/FindCabSlice';

import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';

const persistConfig = {
    key: 'root',
    storage,
};

const rootReducer = combineReducers({
    user: UserSlice,
    token: tokenSlice,
    driver: DriverSlice,
    findcab: FindCabSlice,
  });
  const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
});

const persistor = persistStore(store);


export default store
export {persistor};