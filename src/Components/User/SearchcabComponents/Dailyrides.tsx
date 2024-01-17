import { Link } from "react-router-dom";
import { Input , Button  } from "@material-tailwind/react";
import Fa from 'react-fontawesome'
import { useState } from "react";
import {useNavigate} from 'react-router-dom'
import { useCallback } from "react";
import { SearchLocationFn } from "../../../utils/Axios/methods/POST";

export default function Dailyrides(){
  const [pickupLocation , setpickupLocation] = useState('');
  const debounce = (func) => {
    let timer;
    return function (...args) {
      const context = this;
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        timer = null;
        func.apply(context, args);
      }, 500);
    };
  };
  const handleChange = async(value) => {
    console.log(value)
    const suggestions = await SearchLocationFn(value)
    console.log("SUGGESTIONS ==>",suggestions);
  };
  const navigate = useNavigate();
  const handleFindcab=()=>{
    navigate('/bookcab')
  }
  const optimizedFn = useCallback(debounce(handleChange), []);
  return(
        <>
        <div className="flex flex-col items-center gap-3 mt-10 lg:flex-row">
                    <div className="w-72">
                      <Input
                        type="text"
                        variant="standard"
                        label="Name"
                        placeholder="Name"
                        crossOrigin="anonymous"
                      />
                    </div>
                    <div className="w-72">
                      <Input
                        type="number"
                        variant="standard"
                        label="Number"
                        placeholder="Number"
                        crossOrigin="anonymous"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col items-center gap-3 mt-10 lg:flex-row">
                    <div className="w-72">
                      <Input
                        icon={<Fa name="rocket" />}
                        type="text"
                        variant="standard"
                        label="Pickup location"
                        placeholder="Pickup location"
                        crossOrigin="anonymous"
                        onChange={(e) => optimizedFn(e.target.value)}
                      />
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
                  <div className="md:mt-32 xs:mt-10 sm:mt-10">
                      <Button onClick={handleFindcab} color="blue" fullWidth>FIND CAB</Button>
                  </div>
        </>
    )
}