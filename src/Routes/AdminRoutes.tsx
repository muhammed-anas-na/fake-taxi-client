import { Route, Routes } from "react-router-dom";
import AdminLogin from "../Components/Admin/AdminLogin";
import AdminDashboard from '../Components/Admin/AdminDashboard'
import ProtectedAuth from "./ProtectAuth";
import AdminNavbar from "../Components/Admin/AdminNavbar";
import ViewDrivers from "../Components/Admin/DashboardComponents/ViewDrivers";
import ViewUsers from "../Components/Admin/ViewUsers";
import {UserDetails} from "../Components/Admin/UserDetails";
import { DriverRequests } from "../Components/Admin/DriverRequests";
import {DriverDetails} from '../Components/Admin/DriverDetails'
import AdminViewAllTrips from "../Components/Admin/AdminViewAllTrips";
import TripDetails from "../Components/Admin/TripDetails";

export default function AdminRoutes(){
    return(
        <>
        <AdminNavbar/>
        <Routes>
            <Route path="/" element={<AdminDashboard/>}/>
            <Route path="/view-drivers" element={<ViewDrivers/>}/>
            <Route path="/view-users" element={<ViewUsers/>}/>
            <Route path="/user-details/:userId" element={<UserDetails/>}/>
            <Route path="/driver-requests" element={<DriverRequests/>}/>
            <Route path="/driver-details/:driverId" element={<DriverDetails/>}/>
            <Route path="/all-trips" element={<AdminViewAllTrips/>}/>
            <Route path="/trip-details/:tripId" element={<TripDetails/>}/>

            <Route path="/login" element={
            <ProtectedAuth>
            <AdminLogin/>
            </ProtectedAuth>
            }/>
        </Routes>
        </>
    )
}