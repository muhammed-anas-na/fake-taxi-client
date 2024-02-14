import { Input, Button } from "@material-tailwind/react";
import Fa from "react-fontawesome";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";
import { GetCurrentLocation, SearchLocationFn , findCabFn } from "../../../utils/Axios/methods/POST";
import { useDispatch } from "react-redux";
import { addFindCab } from "../../../utils/Redux/Slice/FindCabSlice";

export default function Dailyrides() {

  interface APIResponse{
    data:{
      routes: {
        distance: number,
        duration: number
      }[],
    }
    status: number
  }

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [pickupSuggestion, setPickupSuggestion] = useState([]);
  const [dropoffSuggestion, setDropofSuggestion] = useState([]);

  const [FormData, setFormData] = useState({
    pickup_location: "",
    dropoff_location: "",
  });
  
  const debounce = (func) => {
    let timer: number | null;
    return function (...args) {
      const context = this;
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        timer = null;
        func.apply(context, args);
      }, 500);
    };
  };

  const handleChange = async (value: string, field: string) => {
    const response = await SearchLocationFn(value);
    console.log(response)
    if (field == "pickup_location") {
      setPickupSuggestion(response.data.suggestions);
    }
    if (field == "dropoff_location") {
      setDropofSuggestion(response.data.suggestions);
    }
  };

  const handleFindCab = async()=>{
    const response: APIResponse = await findCabFn(FormData);
    console.log(response)
    const {distance , duration} = response.data.routes[0]
    if(response.status == 200){
      const from = FormData.pickup_location;
      const to = FormData.dropoff_location
      dispatch(addFindCab({distance , duration , from , to}))
      navigate('/findcab')
    }
  }
  const optimizedFn = useCallback(debounce(handleChange), []);


  const findCurrentLocation = async()=>{
    try{
      navigator.geolocation.getCurrentPosition(async position => {
        const longitude = position.coords.longitude;
        const latitude = position.coords.latitude;
      
        try {
          let response = await GetCurrentLocation({ latitude, longitude });
          setFormData((prevData) => ({
            ...prevData,
            pickup_location:response.data,
          }));
        } catch (error) {
          console.error("Error getting current location:", error);
        }
      });
      
    }catch(err){
      return err;
    }
  }

  return (
      <div>
        <div className="flex flex-col items-cente gap-3 mt-10 md:flex-row">
          <div className="w-72">
            <Input
              icon={<Fa className="cursor-pointer" name="rocket" onClick={findCurrentLocation} />}
              type="text"
              name="pickup_location"
              variant="standard"
              label="Pickup location"
              placeholder="Pickup location"
              crossOrigin="anonymous"
              onChange={(e) => {
                optimizedFn(e.target.value, e.target.name);
                setFormData((prevData) => ({
                  ...prevData,
                  pickup_location: e.target.value,
                }));
              }}
              value={FormData.pickup_location}
            />

            {pickupSuggestion?.length > 0 && (
              <div className="absolute top-full left-0 mt-1 bg-white border rounded shadow-md overflow-y-auto h-24">
                {pickupSuggestion.map(
                  (val: { name: string , mapbox_id: string }, index: number) => (
                    <div
                      onClick={(e) => {
                        setFormData((prevData) => ({
                          ...prevData,
                          pickup_location: val.name,
                        }));
                        setPickupSuggestion([]);
                      }}
                      key={index}
                      className="p-2 cursor-pointer hover:bg-gray-200 text-left"
                    >
                      {val.name}
                    </div>
                  )
                )}
              </div>
            )}
          </div>
          <div className="w-72">
            <Input
              type="text"
              name="dropoff_location"
              variant="standard"
              label="Dropoff location"
              placeholder="Dropoff location"
              crossOrigin="anonymous"
              onChange={(e) => {
                optimizedFn(e.target.value, e.target.name);
                setFormData((prevData) => ({
                  ...prevData,
                  dropoff_location: e.target.value,
                  
                }));
              }}
              value={FormData.dropoff_location}
            />
            {dropoffSuggestion?.length > 0 && (
              <div className="absolute top-full left-0 mt-1 bg-white border rounded shadow-md overflow-y-auto h-24 md:ms-72">
                {dropoffSuggestion.map(
                  (val: { name: string , mapbox_id: string }, index: number) => (
                    <div
                      onClick={(e) => {
                        setFormData((prevData) => ({
                          ...prevData,
                          dropoff_location: val.name,
                        }));
                        setDropofSuggestion([]);
                      }}
                      key={index}
                      className="p-2 cursor-pointer hover:bg-gray-200 text-left"
                    >
                      {val.name}
                    </div>
                  )
                )}
              </div>
            )}
          </div>
        </div>
        <div className="mt-5 md:mt-16">
          <Button color="blue" fullWidth onClick={handleFindCab}>
            FIND CAB
          </Button>
        </div>
      </div>
  );
}
