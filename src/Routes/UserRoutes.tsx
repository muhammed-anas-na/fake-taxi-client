import { Route, Routes } from "react-router-dom";
import UserSignup from "../Components/User/UserSignup";
import UserLogin from '../Components/User/UserLogin';
import UserProfile from '../Components/User/UserProfile';
import Home from '../Components/User/Home'
import ProtectedRoute from "./ProtectedRoute";

export default function DriverRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/signup" element={<UserSignup/>}/>
            <Route path="/login" element={<UserLogin/>}/>
            <Route path="/profile" element={
            <ProtectedRoute>
                <UserProfile/>
            </ProtectedRoute>
            }/>
        </Routes>
    )
}