import Fa from "react-fontawesome";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import io from "socket.io-client";
import socket from "../Driver/Socket";
import { addFindCab, clearFindCab, updateStatus } from "../../utils/Redux/Slice/FindCabSlice";
import MapComponent from "./MapContainer";
import { Select, Option, Button } from "@material-tailwind/react";
import { toast,ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LiveMap from "./LiveMap";
import {GetDriverDetails, StripeCheckoutFn} from '../../utils/Axios/methods/POST'
import { Avatar, Typography } from "@material-tailwind/react";
import { getCoordinatesFn } from "../../utils/Axios/methods/POST";
import {loadStripe} from '@stripe/stripe-js';
import Chat from "./Chat";

export default function TripPage() {
  const [driverDetails , setDriverDetails] = useState();
  const [driverLocation , setDriverLocation] = useState();
  const tripData = useSelector((store) => store.findcab.findcabData);
  const [destination , setDestination] = useState()
  const dispatch = useDispatch();

  socket.on('LiveLocationFromDriver' , (data)=>{
    console.log("Driver live location" , data)
    setDriverLocation(data)
  })
  useEffect(()=>{
    const fetchDriverDetails = async () => {
      try {
        const response = await GetDriverDetails(tripData.tripData.driverId);
        setDriverDetails(response.data);

        const pickup_coordinates = await getCoordinatesFn(tripData.tripData.pickup_location)
        setDestination(pickup_coordinates.data);
      } catch (error) {
        console.error("Error fetching driver details:", error);
      }
    };
    fetchDriverDetails();

    socket.on('driver-started' , ()=>{
      toast("Driver started")
    })
    socket.on('reached-pickup' , ()=>{
      toast("We reached at the pickup location")
    })
    socket.on('pickedup',(pickup_time)=>{
      dispatch(addFindCab(pickup_time));
      toast("You are safe in our hands")
    })
    socket.on('desitination-reached' ,async (dropoff_time)=>{
      dispatch(addFindCab(dropoff_time))
      dispatch(updateStatus("trip-completed"))
      toast("Reached Destination")
      if(tripData.payment == 'stripe'){
        const stripe =await  loadStripe('pk_test_51Ofb7lSDYoKc4bOt3tO0icPQcW1q1IBBZu4p35fc8mvSMr3mxachNi1SefUUkrQQ98ObCcQ9iWdXokr755TBYEWR00mV7N2ItI')
        const response = await StripeCheckoutFn(tripData);
        console.log("Response from stripe ==>",response)
        const result = stripe?.redirectToCheckout({
          sessionId: response.data.id
        })
        //navigate(`/review/${tripData.tripData._id}`)
      }else{
        navigate(`/review/${tripData.tripData._id}`)
      }
    })
    return () => {
      socket.off('driver-started');
      socket.off('reached-pickup');
      socket.off('pickedup');
      socket.off('destination-reached');
    };
  },[tripData.tripData.driverId, tripData.tripData.pickup_location])

  const navigate = useNavigate();
  return (
    <div className="bg-hero h-[100vh] bg-no-repeat scrollbar-hide">
      <ToastContainer/>
    <Fa
        onClick={() => navigate(-1)}
        name="arrow-left"
        className="px-4 py-3 cursor-pointer text-2xl"
        />
      <section className="relative flex w-full">
        <div className="relative w-full px-5  mx-auto max-w-7xl md:px-12">
          <div className="relative flex-col">
            <h1 className="text-2xl font-semibold md:text-3xl pb-0">
              Trip
            </h1>
            <div className="grid grid-cols-1 gap-6 md:gap-24 md:grid-cols-2">
              <div>
                <h1 className="text-center font-bold">{tripData.tripData.ETA} Minutes away</h1>
                {/* //Build div's here */}
                <LiveMap DriverLocation={driverLocation} destination={destination}/>


                  <div className="flex flex-row">
                    <div>
                      <div className="flex gap-2 md:my-5">
                      <Avatar src="https://docs.material-tailwind.com/img/face-2.jpg" alt="avatar" />
                        <div>
                          <Typography variant="h6">{driverDetails ? driverDetails?.full_name:"Loading..."}</Typography>
                          <Typography variant="small" color="gray" className="font-normal">
                            {driverDetails ? driverDetails?.vehicle_details?.vehicle_name +","+ driverDetails?.vehicle_details?.vehicle_brand: "Loading..."}
                          </Typography>
                        </div>
                      </div>
                      <h1>{driverDetails ? driverDetails?.phone:"Loading..."}</h1>
                      <h1 className="md:my-2">From</h1>
                      <h1 className="md:my-2">To</h1>
                      <h1 className="md:my-2">Fare</h1>
                      <h1 className="md:my-2">OTP</h1>
                      </div>
                      <div className="ml-auto">
                          <h1 className="my-4">{driverDetails ? driverDetails?.vehicle_details?.rc_number: "Loading..."}</h1>
                          <h1 className="md:mt-12">{tripData.tripData.pickup_location}</h1>
                          <h1  className="md:my-2">{tripData.tripData.dropoff_location}</h1>
                          <h1 className="md:my-2">{tripData.tripData.fare}</h1>
                          <h1 className="md:my-2">{tripData.tripData.otp}</h1>
                      </div>
                  </div>
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
