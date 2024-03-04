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
import DriverNavbar from "../Components/Driver/DashboardComponents/DriverNavbar";
import ViewAllTrips from "../Components/Driver/ViewAllTrips";
import TripCancel from "../Components/Driver/TripCancel";
import DriverVehicleDetails from "../Components/Driver/DriverVehicleDetails";
import TripDetails from "../Components/Driver/TripDetails";

export default function DriverRoutes() {
  return (
    <>
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
        <Route
          path="/vehicle_details"
          element={
            <DriverProtected>
              <DriverNavbar />
              <EnterVhDetails />
            </DriverProtected>
          }
        />

        <Route
          path="/dashboard"
          element={

            <DriverProtected>
              <DriverNavbar />
              <DriverDashboard />
            </DriverProtected>

          }
        />
        <Route
        path="/vehicle-details"
        element={
          <DriverProtected>
          <DriverNavbar/>
          <DriverVehicleDetails/>
          </DriverProtected>
        }
        />
                <Route
        path="/trip-details/:tripId" element={
          <DriverProtected>
            <DriverNavbar/>
            <TripDetails/>
          </DriverProtected>
        }/>
        <Route path="/success" element={<ThanksPage />} />
        <Route path="/trip/:tripId" element={
        <DriverProtected>
        <TripPage />
        </DriverProtected>
        }/>
        <Route path="/trip-success/:tripId" element={
        <DriverProtected>
        <TripSuccess />
        </DriverProtected>
        } />
        <Route path="/trip-canceled/:tripId" element={
        <DriverProtected>
        <TripCancel/>
        </DriverProtected>
        }/>
        <Route
          path="/all-trips"
          element={
            <DriverProtected>
              <DriverNavbar />
              <ViewAllTrips />
            </DriverProtected>
          }
        />
      </Routes>

      {/* <DriverNavbar /> */}
    </>
  );
}
