import { Route, Routes } from "react-router-dom";
import Login from "../Components/Driver/Login";
import Signup from "../Components/Driver/Signup";
import EnterVhDetails from "../Components/Driver/EnterVhDetails";
import DriverHome from "../Components/Driver/DriverHome";
import Otp from "../Components/Driver/Otp";
import ProtectedAuth from "./ProtectAuth";

export default function DriverRoutes() {
  return (
    <Routes>
      <Route path="/" element={<DriverHome />} />
      <Route
        path="/login"
        element={
          <ProtectedAuth>
            <Login />
          </ProtectedAuth>
        }
      />
      <Route path="/signup" element={<Signup />} />
      <Route
        path="/otp"
        element={
          <ProtectedAuth>
            <Otp />
          </ProtectedAuth>
        }
      />
      <Route path="/vehicle_details" element={<EnterVhDetails />} />
    </Routes>
  );
}
