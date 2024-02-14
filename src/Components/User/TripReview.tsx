import Fa from "react-fontawesome";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import io from "socket.io-client";
import socket from "../Driver/Socket";
import { addFindCab, clearFindCab } from "../../utils/Redux/Slice/FindCabSlice";
import MapComponent from "./MapContainer";
import { Select, Option, Button } from "@material-tailwind/react";
import { toast } from "react-toastify";
import { Textarea, IconButton } from "@material-tailwind/react";
import { FinishTrip } from "../../utils/Axios/methods/POST";

export default function FindCab() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const tripData = useSelector((store) => store.findcab.findcabData);
  const [review , setReview] = useState('')
  const driverSocketId = localStorage.getItem('driverSocketId')
  console.log(driverSocketId);
  socket.emit('payment-success' , {driverSocketId})
  const handleSubmit=async()=>{
    try{
      dispatch(addFindCab({review}))    
      let response = await FinishTrip({...tripData , review});
        if(response.status == 200){
          navigate(`/trip-success/${tripData.tripData._id}`)
        }
      }catch(err){
        console.log(err);
    }
  }

  console.log("Trip Data ==> ", tripData);
  return (
    <div className="bg-hero h-screen bg-no-repeat">
      <Fa
        onClick={() => navigate(-1)}
        name="arrow-left"
        className="px-4 py-3 cursor-pointer text-2xl"
      />
      <section className="relative flex w-full">
        <div className="relative w-full px-5  mx-auto max-w-7xl md:px-12">
          <div className="relative flex-col">
            <h1 className="text-2xl font-semibold md:text-3xl pb-0">
              Trip Details
            </h1>
            <div className="grid grid-cols-1 gap-6 md:gap-24 md:grid-cols-2">
              <div>
                <MapComponent
                  from={tripData.tripData.pickup_location}
                  to={tripData.tripData.dropoff_location}
                />
                <div className="md:mt-3">
                  <div className="relative w-[32rem]">
                    <Textarea placeholder="Your Review" value={review}  onChange={(e)=>{setReview(e.target.value)}}/>
                    <div className="flex w-full justify-between py-1.5">
                      <IconButton variant="text" color="blue-gray" size="sm">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                          className="h-4 w-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                          />
                        </svg>
                      </IconButton>
                      <div className="flex gap-2">
                        <Button size="sm" className="rounded-md" onClick={handleSubmit}>
                          Continue
                        </Button>
                      </div>
                    </div>
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
    </div>
  );
}
