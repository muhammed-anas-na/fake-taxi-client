import Fa from "react-fontawesome";
import { useNavigate } from "react-router-dom";
import { useSelector , useDispatch } from "react-redux";
import React,{useState } from "react";
import { addFindCab, clearFindCab } from "../../utils/Redux/Slice/FindCabSlice";
import MapContainer from "./MapContainer";
import { Select, Option ,Button } from "@material-tailwind/react";
import { toast } from "react-toastify";

export default function FindCab() {
  const navigate = useNavigate();
  const [selectedPayment, setSelectedPayment] = useState(''); // State to track the selected payment method
  const dispatch = useDispatch();
  const tripData = useSelector((store) => store.findcab.findcabData);
  const handlePaymentSelect = (value) => {
    setSelectedPayment(value);
  };
    
  const handleContinueButtonClick = () => {
    if (selectedPayment) {
      dispatch(addFindCab({ payment: selectedPayment }));
      navigate(`/trip/${tripData.tripData._id}`)
    } else { 
      toast.error('Please select a payment method');
    }
  };

  return (
    <div className="bg-hero h-screen bg-no-repeat">
      <Fa
        onClick={() => navigate(-2)}
        name="arrow-left"
        className="px-4 py-3 cursor-pointer text-2xl"
      />
      <section className="relative flex w-full">
        <div className="relative w-full px-5  mx-auto max-w-7xl md:px-12">
          <div className="relative flex-col">
            <h1 className="text-2xl font-semibold md:text-3xl pb-0">
              Select payment method
            </h1>
            <div className="grid grid-cols-1 gap-6 md:gap-24 md:grid-cols-2">
              <div>
              <MapContainer
                from={tripData.tripData.pickup_location}  
                to={tripData.tripData.dropoff_location}
              />
              <div className="md:mt-2">
                <Select label="Select Payment method" onChange={handlePaymentSelect} value={selectedPayment}>
                  <Option value="stripe">Stripe</Option>
                  <Option value="payAtArrival">Pay at arrival</Option>
                </Select>
                </div>

                <div className="md:mt-20">
                <Button color="blue" fullWidth onClick={handleContinueButtonClick}>
                Continue
                </Button>
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
