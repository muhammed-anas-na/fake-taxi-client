import { Route, Routes } from "react-router-dom";
import Login from "../Components/Driver/Login";
import Signup from "../Components/Driver/Signup";
import EnterVhDetails from "../Components/Driver/EnterVhDetails";
import DriverHome from "../Components/Driver/DriverHome";
import Otp from "../Components/Driver/Otp";
import DriverProtectedAuth from "./DriverProtectedAuth";
import DriverDashboard from "../Components/Driver/DriverDashboard";

export default function DriverRoutes() {
  return (
    <Routes>
      <Route path="/" element={<DriverHome />} />
      <Route
        path="/login"
        element={
          <DriverProtectedAuth>
            <Login />
          </DriverProtectedAuth>
        }
      />
      <Route path="/signup" element={<Signup />} />
      <Route
        path="/otp"
        element={
          <DriverProtectedAuth>
            <Otp />
          </DriverProtectedAuth>
        }
      />
      <Route path="/vehicle_details" element={<EnterVhDetails />} />
      <Route path="/dashboard" element={<DriverDashboard/>}/>
    </Routes>
  );
}
