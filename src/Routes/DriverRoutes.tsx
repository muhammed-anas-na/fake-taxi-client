import { Route, Routes } from "react-router-dom";
import Login from "../Components/Driver/Login";
import Signup from "../Components/Driver/Signup";
import EnterVhDetails from "../Components/Driver/EnterVhDetails";
import DriverHome from "../Components/Driver/DriverHome";

export default function DriverRoutes(){
    return(
        <Routes>
            <Route path="/" element={<DriverHome/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/vehicle_details" element={<EnterVhDetails/>}/>
            
        </Routes>
    )
}