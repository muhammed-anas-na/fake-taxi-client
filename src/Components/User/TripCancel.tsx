import Fa from "react-fontawesome";
import { useNavigate, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Button } from "@material-tailwind/react";
import MapContainer from "./MapContainer";
import { completeCancelTripFn } from "../../utils/Axios/methods/POST";
import { useDispatch } from "react-redux";import { clearFindCab } from "../../utils/Redux/Slice/FindCabSlice";

export default function TripCancel() {
  const navigate = useNavigate();
  const tripData = useSelector((store) => store.findcab.findcabData);
  const dispatch = useDispatch();

  const handleCancelTrip=async()=>{
    try{
      const response = await completeCancelTripFn(tripData);
      if(response.status == 200){
        dispatch(clearFindCab())
        navigate('/')
      }
    }catch(err){
      console.log(err);
    }
  }
  return (
    <div className="bg-hero h-[98vh] bg-no-repeat scrollbar-hide">
      <Fa
        onClick={() => navigate(-1)}
        name="arrow-left"
        className="px-4 py-3 cursor-pointer text-2xl"
      />
      <section className="relative flex w-full">
        <div className="relative w-full px-5  mx-auto max-w-7xl md:px-12">
          <div className="relative flex-col">
            <h1 className="text-2xl font-semibold md:text-3xl pb-0">
              Review your trip
            </h1>
            <div className="grid grid-cols-1 gap-6 md:gap-24 md:grid-cols-2">
              <div>
                <MapContainer
                  from={tripData.tripData.pickup_location}
                  to={tripData.tripData.dropoff_location}
                />
                <div className="md:mt-3">
                  <div className="relative w-[32rem]">
                  </div>
                </div>
                <h1 className="text-3xl font-bold font-sans uppercase text-red-500">Trip Cancelled</h1>
                <h1>{tripData.cancelReason}</h1>
                <h1>{tripData.selectedOption}</h1>
                  <Button color="blue" className="w-full md:mt-8" onClick={handleCancelTrip}>CONTINUE</Button>
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
