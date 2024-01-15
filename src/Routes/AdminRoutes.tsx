import { Route, Routes } from "react-router-dom";
import AdminLogin from "../Components/Admin/AdminLogin";
import AdminDashboard from '../Components/Admin/AdminDashboard'
import ProtectedAuth from "./ProtectAuth";

export default function AdminRoutes(){
    return(
        <Routes>
            <Route path="/" element={<AdminDashboard/>}/>
            <Route path="/login" element={
            <ProtectedAuth>
            <AdminLogin/>
            </ProtectedAuth>
            }/>
        </Routes>
    )
}