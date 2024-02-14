import { Route, Routes } from "react-router-dom";
import Login from "../Components/Driver/Login";
import Signup from "../Components/Driver/Signup";
import EnterVhDetails from "../Components/Driver/EnterVhDetails";
import DriverHome from "../Components/Driver/DriverHome";
import Otp from "../Components/Driver/Otp";
import DriverProtectedAuth from "./DriverProtectedAuth";
import DriverDashboard from "../Components/Driver/DriverDashboard";
import DriverProtected from "./DriverProtected";
import ThanksPage from "../Components/Driver/Thankyou";
import TripPage from "../Components/Driver/TripPage";
import TripSuccess from "../Components/Driver/TripSuccess";

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
      
      <Route path="/dashboard" element={
          <DriverDashboard/>
      }/>
      
      <Route path="/success" element={
        <ThanksPage/>
      }/>

      <Route path="/trip/:tripId" element={<TripPage/>}/>
      <Route path="/trip-success/:tripId" element={<TripSuccess/>}/>
    </Routes>

  );
}
