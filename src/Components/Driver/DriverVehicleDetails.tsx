import { useSelector } from "react-redux";
import img from "../../assets/car-img.png";
import { useEffect, useState } from "react";
export default function DriverVehicleDetails() {
    const [data , setData] = useState(null);
    const driverData = useSelector((store) => store.driver.driverData.vehicle_details);
    console.log("Vehicle Details ==>",driverData);
    useEffect(()=>{
        setData(driverData);
    },[driverData])
    return (
    <div className="flex md:ms-[35vh] md:p-10 gap-5">
      <div className="relative">
        <img
          src={img}
          alt="car-image"
          className="hover:scale-105 transition-transform duration-300 cursor-pointer"
        />
        <div>
            {data? (
                <div className="flex flex-col">
            <div>
                <h1 className="font-bold">Vehicle Name: <span>{data.vehicle_name}</span></h1>
                <h1 className="font-bold">Vehicle Brand: <span>{data.vehicle_brand}</span></h1>
                <h1 className="font-bold">Vehicle Category: <span>{data.vehicle_category}</span></h1>
                <h1 className="font-bold">Rc Number: <span>{data.rc_number}</span></h1>
            </div>

                </div>
            ):("Loading..")
            }

        </div>
      </div>

      <div className="flex flex-col gap-2 justify-evenly w-[60vh]">
        <div className="flex gap-3 border p-4 hover:shadow-2xl duration-700">
          <div
            className="radial-progress text-green-800"
            style={{ "--value": 89 }}
            role="progressbar"
          >
            89%
          </div>
          <h1 className="font-sans font-bold">Total Kms</h1>
        </div>

        <div className="flex gap-3 border p-4 hover:shadow-2xl duration-700">
          <div
            className="radial-progress text-deep-orange-800"
            style={{ "--value": 55 }}
            role="progressbar"
          >
            55%
          </div>
          <h1 className="font-sans font-bold">Km/Liter</h1>
        </div>

        <div className="flex gap-3 border p-4 hover:shadow-2xl duration-700">
          <div
            className="radial-progress text-red-700"
            style={{ "--value": 70 }}
            role="progressbar"
          >
            70%
          </div>
          <h1 className="font-sans font-bold">Cubic Capacity</h1>
        </div>
      </div>
    </div>
  );
}
