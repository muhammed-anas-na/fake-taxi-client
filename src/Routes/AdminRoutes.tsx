import { Route, Routes } from "react-router-dom";
import AdminLogin from "../Components/Admin/AdminLogin";
import AdminDashboard from '../Components/Admin/AdminDashboard'

export default function AdminRoutes(){
    return(
        <Routes>
            <Route path="/" element={<AdminDashboard/>}/>
            <Route path="/login" element={<AdminLogin/>}/>
        </Routes>
    )
}