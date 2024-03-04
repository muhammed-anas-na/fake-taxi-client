import { useEffect, useState } from "react";
import { GetTripDetailsByUserIdFn } from "../../utils/Axios/methods/POST";
import { useSelector } from "react-redux";
import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

export default function Profiletrips() {
  const userId = useSelector((store) => store.user.userData._id);
  const [tripData, setTripData] = useState();
  useEffect(() => {
    async function fetchUserTrips() {
      try {
        let response = await GetTripDetailsByUserIdFn(userId);
        console.log(response);
        setTripData(response.data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchUserTrips();
  },[]);
  return (
    <>
      {tripData ? (
        <div className="mt-5 lg:w-96 max-h-[40vh] overflow-y-auto p-4">
          <div className="flex justify-around p-2 border">
            <h1 className="font-bold">No</h1>
            <h1 className="font-bold">From</h1>
            <h1 className="font-bold">To</h1>
            <h1 className="font-bold">Fare</h1>
            <h1>Info</h1>
          </div>
          {tripData.map((value, index) => {
            return (
              <div className="flex justify-around bg-blue-gray-50 p-2 shadow-xl hover:bg-gray-50 hover:cursor-pointer">
                <h1>{index+1}</h1>
                <h1>{value.pickup_location}</h1>
                <h1>{value.dropoff_location}</h1>
                <h1>{value.fare}</h1>
                <Button className="p-2"><Link to={`/trip-details/${value._id}`}>More</Link></Button>
              </div>
            );
          })}
        </div>
      ) : (
        <>Loading...</>
      )}
    </>
  );
}
