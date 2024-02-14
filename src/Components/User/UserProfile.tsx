import { useState, lazy, Suspense, useEffect } from "react";
import { Avatar, Button } from "@material-tailwind/react";
import { Card, Typography } from "@material-tailwind/react";
import { GetAllTripsOfUserFn } from "../../utils/Axios/methods/POST";
import { useSelector } from "react-redux";

const Tripspage = lazy(() => import("./ProfileComponents/TripsPage"));
const Rewardspage = lazy(() => import("./ProfileComponents/RewardPage"));
const Walletpage = lazy(() => import("./ProfileComponents/WalletPage"));
const Settingspage = lazy(() => import("./ProfileComponents/Settings"));
const Profilepage = lazy(() => import("./ProfileComponents/ProfilePage"));

export default function UserProfile() {
  const [open, setOpen] = useState(true);
  const [current, setCurrent] = useState("personal");
  const [tripDetails ,setTripDetails] = useState([]);
  const userData = useSelector((store)=>store.user.userData);

  useEffect(()=>{
    const fetchTripDetails=async()=>{
      try{
        const tripDetailsResponse = await GetAllTripsOfUserFn(userData._id);
        setTripDetails(tripDetailsResponse.data);
      }catch(err){
        console.log(err);
      }
    }
    fetchTripDetails()
  },[])
  return (
    

    <div className="sm:flex sm:p-5">
      <div>
        <div className="flex justify-center mt-5">
          <div>
            <Avatar
              src="https://docs.material-tailwind.com/img/face-2.jpg"
              alt="avatar"
              size="xl"
            />
            <h1 className="text-center">Anas</h1>
          </div>
        </div>

        <div className="flex justify-around mt-3 sm:gap-3">
          <div className="flex-col items-center text-center">
            <h1 className="font-bold">53</h1>
            <p className="text-xs">Trip completed</p>
          </div>
          <div className="flex-col items-center text-center">
            <h1 className="font-bold">53</h1>
            <p className="text-xs">Total Km's</p>
          </div>
          <div className="flex-col items-center text-center">
            <h1 className="font-bold">53</h1>
            <p className="text-xs">Trip completed</p>
          </div>
        </div>
      </div>

      <div className="sm:flex-col  md:ml-20 lg:gap-10">
        <div className="flex overflow-x-auto scrollbar-hide gap-3 mt-3">
          <h1 onClick={() => setCurrent("personal")}>Personal</h1>
          <h1 onClick={() => setCurrent("trips")}>Trips</h1>
          <h1>Rewards</h1>
          <h1>Wallet</h1>
          <h1>Settings</h1>
        </div>

        {current == "personal" ? (
          <div className="mt-5 ml-3">
            <h1>Email : anasna6005@gmail.com</h1>
            <h1>Phone : 8089568695</h1>
            <Button color="red" className="p-2 mt-[20vh]">
              Logout
            </Button>
          </div>
        ) : (
          ""
        )}

{current == "trips" ? (
        <div className="mt-5 lg:w-96">
          <div className="flex justify-around p-2 border">
            <h1 className="font-bold">No</h1>
            <h1 className="font-bold">From</h1>
            <h1 className="font-bold">To</h1>
            <h1 className="font-bold">Fare</h1>
          </div>
        {
          tripDetails.map((value , index)=>{
            return(
              <div  className="flex justify-around bg-blue-gray-50 p-2 shadow-xl">
              <h1>{index+1}</h1>
              <h1>{value.pickup_location}</h1>
              <h1>{value.dropoff_location}</h1>
              <h1>{value.fare}</h1>
            </div>
            )
          })
        }
        </div>
      ) : (
        ""
      )}
      </div>

      
    </div>
  );
}
