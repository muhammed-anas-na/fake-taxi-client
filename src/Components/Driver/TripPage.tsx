import Fa from "react-fontawesome";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import io from "socket.io-client";
import socket from "../Driver/Socket";
import { addFindCab, clearFindCab, updateStatus } from "../../utils/Redux/Slice/FindCabSlice";
import { Select, Option, Button } from "@material-tailwind/react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LiveMap from "./LiveMap";
import { GetUserDetails } from "../../utils/Axios/methods/POST";
import { Avatar, Typography } from "@material-tailwind/react";
import Chat from "./Chat";

export default function TripPage() {
  const dispatch = useDispatch();

  const [tripStatus , setTripStatus] = useState('start')
  const [userData, setUserData] = useState();
  const tripData = useSelector((store) => store.findcab.findcabData);
  const userSocketId = tripData.userSocketId

  navigator.geolocation.watchPosition((position)=>{
    const {latitude , longitude} = position.coords
    console.log("Sharing live location...")
    socket.emit('DriverLiveLocation', {latitude , longitude , userSocketId});
  })
  socket.on('payment-success' ,()=>{
    console.log("Payment success")
    toast("Payment Recieved");
  })
  useEffect(() => {
    async function FetchUserDetails() {
      try {
        const response = await GetUserDetails(tripData.tripData.customerId);
        console.log("User Data ==>", response);
        setUserData(response.data);
      } catch (err) {
        console.log("Error while fetching user data", err);
      }
    }
    FetchUserDetails();
  }, []);
  const navigate = useNavigate();
  return (
    <div className="bg-hero h-[100vh] bg-no-repeat bg-fixed scrollbar-hide">
      <Fa
        onClick={() => navigate(-1)}
        name="arrow-left"
        className="px-4 py-3 cursor-pointer text-2xl"
      />
      <section className="relative flex w-full">
        <div className="relative w-full px-5  mx-auto max-w-7xl md:px-12">
          <div className="relative flex-col">
            <h1 className="text-2xl font-semibold md:text-3xl">Trip</h1>
            <div className="grid grid-cols-1 gap-6 md:gap-24 md:grid-cols-2">
              <div className="h-[80vh] overflow-x-auto scrollbar-hide">
                {/* //Build div's here */}
                <LiveMap />

                <div className="flex flex-row">
                  <div>
                    <div className="flex gap-2 md:my-5">
                      <Avatar
                        src="https://docs.material-tailwind.com/img/face-2.jpg"
                        alt="avatar"
                      />
                      <div>
                        <Typography variant="h6">
                          {userData ? userData?.full_name : "Loading..."}
                        </Typography>
                      </div>
                    </div>
                    <h1 className="md:my-2">From</h1>
                    <h1 className="md:my-2">To</h1>
                    <h1 className="md:my-2">Fare</h1>
                    <h1 className="md:my-2">OTP</h1>
                  </div>
                  <div className="ml-auto">
                    <h1 className="">
                      {userData ? userData?.phone : "Loading..."}
                    </h1>
                    <h1 className="md:mt-12">{tripData.tripData.pickup_location}</h1>
                    <h1 className="md:my-2">{tripData.tripData.dropoff_location}</h1>
                    <h1 className="md:my-2">{tripData.tripData.fare}</h1>
                    <h1 className="md:my-2">{tripData.tripData.otp}</h1>
                  </div>
                </div>

                {
                  tripStatus == 'start'? (
                    <Button color="blue" fullWidth className="md:my-3" onClick={()=>{
                      dispatch(updateStatus("driver-started"))
                      socket.emit('driver-started' , {userSocketId})
                      setTripStatus('reached-pickup')
                      }}>
                      Start the drive
                    </Button> 
                  ):""
                }

                {
                  tripStatus == 'reached-pickup'?(
                    <Button color="blue" fullWidth className="md:my-3" onClick={()=>{
                      dispatch(updateStatus("reached-pickup"))
                      socket.emit('reached-pickup' , {userSocketId})
                      setTripStatus('pickedup')
                      }}>
                        Reached pickup location
                    </Button> 
                  ):""
                }

                {
                  tripStatus == 'pickedup'?(
                    <Button color="blue" fullWidth className="md:my-3" onClick={()=>{
                      dispatch(addFindCab({pickup_time:Date.now()}))
                      dispatch(updateStatus("pickedup"))

                      socket.emit('pickedup' , {userSocketId})
                      setTripStatus('destination')
                      }}>
                        Pickedup the rider
                    </Button> 
                  ):""
                }

                {
                  tripStatus == 'destination'?(
                    <Button color="blue" fullWidth className="md:my-3" onClick={()=>{
                      dispatch(addFindCab({dropoff_time:Date.now()}))
                      dispatch(updateStatus("trip-completed"))
                      socket.emit('destination-reached' , {userSocketId})
                      setTripStatus('trip-complete')
                      navigate(`/driver/trip-success/${tripData.tripData._id}`)
                      }}>
                        Destination Reached
                    </Button> 
                  ):""
                }

              </div>

              <div className="block w-full mt-12 lg:mt-0">
                <img
                  alt="hero"
                  className="hidden lg:block object-cover object-center w-full mx-auto drop-shadow-xl lg:ml-auto rounded-2xl"
                  src="/hero-image.png"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="flex items-end absolute bottom-0 right-1">
      <Chat/>
      </div>
    </div>
  );
}
