import { Route, Routes } from "react-router-dom";
import UserSignup from "../Components/User/UserSignup";
import UserLogin from "../Components/User/UserLogin";
import UserProfile from "../Components/User/UserProfile";
import Home from "../Components/User/Home";
import ProtectedRoute from "./ProtectedRoute";
import Bookcab from "../Components/User/Bookcab";
import Otp from "../Components/User/Otp";
import ProtectedAuth from "./ProtectAuth";
import FindCab from '../Components/User/FindCab';
import SelectPayment from "../Components/User/SelectPayment";
import TripPage from "../Components/User/TripPage";
import TripReview from "../Components/User/TripReview";
import TripSuccess from "../Components/User/TripSuccess";
import TripCancel from "../Components/User/TripCancel";
import TripDetails from "../Components/User/TripDetails";
import Contactus from "../Components/User/Contactus";

export default function DriverRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route
        path="/otp"
        element={
          <ProtectedAuth>
            <Otp />
          </ProtectedAuth>
        }
      />

      <Route
        path="/login"
        element={
          <ProtectedAuth>
            <UserLogin />
          </ProtectedAuth>
        }
      />

      <Route path="/signup" element={<UserSignup />} />

      <Route
        path="/profile/*"
        element={
          <ProtectedRoute>
            <UserProfile />
          </ProtectedRoute>
        }
      />

      <Route
        path="/searchcab"
        element={
          <ProtectedRoute>
          <Bookcab />
          </ProtectedRoute>
        }
      />

      <Route
        path="/findcab"
        element={
        <ProtectedRoute>
          <FindCab/>
          </ProtectedRoute>
      
      }
      />

        <Route
          path="/payment-select/:tripId"
          element={
          <ProtectedRoute>
          <SelectPayment/>
          </ProtectedRoute>
          }
        />

      <Route
        path="/trip/:tripId"
        element={
        <ProtectedRoute>
          <TripPage/>
        </ProtectedRoute>
  
        }
        />

        <Route
          path="/review/:tripId"
          element={
          <ProtectedRoute>
          <TripReview/>
          </ProtectedRoute>}
        />

        <Route
        path="/trip-success/:tripId"
        element={
        <ProtectedRoute>
        <TripSuccess/>
        </ProtectedRoute>}
        />

        <Route path="/trip-cancel/:tripID" element={
        <ProtectedRoute>
        <TripCancel/>
        </ProtectedRoute>
        }/>
        <Route path="/trip-details/:tripId" element={
        <ProtectedRoute>
        <TripDetails/>
        </ProtectedRoute>
        }/>

        <Route path="/contactUs" element={<Contactus/>} />
    </Routes>
  );
}
