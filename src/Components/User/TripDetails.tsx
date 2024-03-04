import MapContainer from "../User/MapContainer";
import { Link, useParams } from "react-router-dom";
import { Avatar, Button } from "@material-tailwind/react";
import {
  GetDriverDetails,
  GetTripDetailsByIdFn,
  GetUserDetails,
} from "../../utils/Axios/methods/POST";
import { useEffect, useState } from "react";

function TripDetails() {
  const { tripId } = useParams();
  const [tripDetails, setTripDetails] = useState();
  const [driverDetails, setDriverDetails] = useState();
  const [riderDetails, setRiderDetails] = useState();

  useEffect(() => {
    async function fetchTripDetails() {
      try {
        const response = await GetTripDetailsByIdFn(tripId);
        setTripDetails(response.data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchTripDetails();
  }, []);

  useEffect(() => {
    async function fetchDriverDetails() {
      try {
        const response = await GetDriverDetails(tripDetails.driverId);
        const riderData = await GetUserDetails(tripDetails.customerId);
        setDriverDetails(response.data);
        setRiderDetails(riderData.data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchDriverDetails();
  }, [tripDetails]);

  return (
    <>
      <div className="flex justify-start gap-10 p-10">
        <div className="w-1/2">
          <MapContainer from="Maradu" to="Vytilla" />

          {tripDetails ? (
            <>
              <h1 className="text-lg text-gray-700">{tripDetails.createdAt}</h1>
              <h1>
                Pickup Time:{" "}
                <span>
                  {new Date(
                    parseInt(tripDetails.pickup_time)
                  ).toLocaleTimeString()}
                </span>
              </h1>
              <h1>
                Dropoff Time :{" "}
                <span>
                  {new Date(
                    parseInt(tripDetails.dropoff_time)
                  ).toLocaleTimeString()}
                </span>
              </h1>
              <h1>{tripDetails.otp}</h1>
              <h1>
                Trip Duration:{" "}
                <span>
                  {Math.floor(
                    (parseInt(tripDetails.dropoff_time) -
                      parseInt(tripDetails.pickup_time)) /
                      (1000 * 60)
                  )}{" "}
                  minutes
                </span>
              </h1>
              <h1>Reivew : {tripDetails.review}</h1>
            </>
          ) : (
            <div className="flex flex-col gap-2 w-52">
              <div className="skeleton h-4 w-[60vh]"></div>
              <div className="skeleton h-4 w-full"></div>
              <div className="skeleton h-4 w-full"></div>
              <div className="skeleton h-4 w-[20vh]"></div>
              <div className="skeleton h-4 w-[50vh]"></div>
              <div className="skeleton h-4 w-[55vh]"></div>
            </div>
          )}
        </div>

        <div className="overflow-y-auto">
          <h1 className="font-mono md:text-5xl md:font-bold tracking-tight">
            {tripDetails ? (
              <>
                ₹<span>{tripDetails.fare}</span>
              </>
            ) : (
              "Loading..."
            )}
          </h1>
          <div className="md:mt-5">
            <div>
              {driverDetails ? (
                <div className="p-2 md:w-[70vh] bg-blue-gray-50">
                  <div className="flex gap-3 pb-2">
                    <Avatar
                      src="https://docs.material-tailwind.com/img/face-2.jpg"
                      alt="avatar"
                    />
                    <div>
                      <h1 className="text-lg font-sans">
                        {driverDetails.full_name}
                      </h1>
                      <h1 className="text-xs">{driverDetails.email}</h1>
                    </div>
                  </div>
                  <hr />
                  <h1>{driverDetails.vehicle_details.vehicle_name}</h1>
                  <h1>{driverDetails.vehicle_details.vehicle_category}</h1>
                  <h1>{driverDetails.vehicle_details.rc_number}</h1>
                  <Link to={`/admin/driver-details/${driverDetails._id}`}>
                    <Button color="blue" fullWidth className="md:mt-4">
                      Contact Driver
                    </Button>
                  </Link>
                </div>
              ) : (
                <div className="skeleton h-[25vh] w-[60vh]"></div>
              )}
              {riderDetails ? (
                <div className="border md:mt-4 md:p-2 bg-blue-gray-50">
                  <h1>{riderDetails.full_name}</h1>
                  <h1>{riderDetails.phone}</h1>
                  <h1>{riderDetails.email}</h1>
                  <Link to={`/admin/user-details/${riderDetails._id}`}>
                    <Button color="blue" fullWidth className="md:mt-4">
                      View Profile
                    </Button>
                  </Link>
                </div>
              ) : (
                <div className="skeleton h-[20vh] w-[60vh] mt-7"></div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TripDetails;
