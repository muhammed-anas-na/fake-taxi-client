import { Form, Link } from "react-router-dom";
import { Input, Button } from "@material-tailwind/react";
import Fa from "react-fontawesome";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";
import { SearchLocationFn } from "../../../utils/Axios/methods/POST";
import { debounce } from "lodash";

export default function Dailyrides() {
  const navigate = useNavigate();
  const [pickupSuggestion, setPickupSuggestion] = useState([])

  const [FormData, setFormData] = useState({
    name:'',
    number:'',
    pickup_location:'',
    dropoff_location:''
  })

  console.log(FormData);
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

  const handleChange = async (value: string , field: string) => {
    console.log(value , field)
    const response = await SearchLocationFn(value);
    if(field == 'pickup_location'){
      setPickupSuggestion(response.data.suggestions);
    }
    
  
  };

  const optimizedFn = useCallback(debounce(handleChange), []);
  return (
    <>
      <div className="flex flex-col items-center gap-3 mt-10 lg:flex-row">
        <div className="w-72">
          <Input
            type="text"
            variant="standard"
            label="Name"
            placeholder="Name"
            crossOrigin="anonymous"
            onChange={(e) =>
              setFormData((prevData) => ({ ...prevData, name: e.target.value }))
            }
          />
        </div>
        <div className="w-72">
          <Input
            type="number"
            variant="standard"
            label="Number"
            placeholder="Number"
            crossOrigin="anonymous"
            onChange={(e) =>
              setFormData((prevData) => ({
                ...prevData,
                number: e.target.value,
              }))
            }
          />
        </div>
      </div>

      <div className="flex flex-col items-center gap-3 mt-10 lg:flex-row">
        <div className="w-72">
          <Input
            icon={<Fa name="rocket" />}
            type="text"
            name="pickup_location"
            variant="standard"
            label="Pickup location"
            placeholder="Pickup location"
            crossOrigin="anonymous"
            onChange={(e) => {
              optimizedFn(e.target.value , e.target.name)
              setFormData((prevData)=>({...prevData , pickup_location:e.target.value}))
            }}
            value={FormData.pickup_location}
          />

          {pickupSuggestion.length>0 &&  (
            <div className="absolute top-full left-0 mt-1 bg-white border rounded shadow-md overflow-y-auto h-24">
              {pickupSuggestion.map((val: { name: string }, index: number) => (
                <div
                  onClick={(e) => {
                    setFormData((prevData)=>({...prevData , pickup_location:val.name}))
                    setPickupSuggestion([]);
                  }}
                  key={index}
                  className="p-2 cursor-pointer hover:bg-gray-200 text-left"
                >
                  {val.name}
                </div> 
              ))}
            </div>
          )}

        </div>
        <div className="w-72">
          <Input
            type="text"
            variant="standard"
            label="Dropoff location"
            placeholder="Dropoff location"
            crossOrigin="anonymous"
          />
        </div>
      </div>
      {/* <div className="md:mt-32 xs:mt-10 sm:mt-10">
              <Button onClick={handleFindcab} color="blue" fullWidth>FIND CAB</Button>
        </div> */}
    </>
  );
}
