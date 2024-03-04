import { useEffect, useState } from "react";
import AdminTable from "./AdminDriverTable";
import { getOnlineDriversFn } from "../../../utils/Axios/methods/GET";
import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";
export default function ViewDrivers() {
  const [totalDrivers, setTotalDrivers] = useState(0);
  const [driverOnline, setDriversOnline] = useState(0);

  useEffect(() => {
    async function fetchDriverOnline() {
      try {
        let response = await getOnlineDriversFn();
        setDriversOnline(response.data.length);
      } catch (err) {
        console.log(err);
      }
    }
    fetchDriverOnline();
  }, []);

  function updateTotalDrivers(data) {
    setTotalDrivers(data);
  }
  return (
    <div className="md:ms-[35vh]">
      <div className="md:mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full bg-white p-4">
        <Card title="Total Drivers" number={totalDrivers} />
        <Card title="Drivers Online" number={driverOnline} />
        <Card title="On Ride" number="1234"/>

        <div className="p-6 md:p-10 rounded-xl bg-blue-50 flex flex-col justify-center items-center">
          <h3 className="mt-4 text-base md:text-x md:mb-4 font-medium text-gray-800">
            Driver Requests
          </h3>
          <Link to="/admin/driver-requests">  
            <Button className="hover:p-8 duration-300">View Requests</Button>
          </Link>
        </div>

      </div>


      <AdminTable updateTotalDrivers={updateTotalDrivers} />
    </div>
  );
}

function Card({ title, number }) {
  return (
    <>
      <div className="p-6 md:p-10 rounded-xl bg-blue-50">
        <div className="inline-flex rounded-full bg-white p-4"></div>
        <h3 className="mt-4 text-base md:text-xl font-medium text-gray-800">
          {title}
        </h3>
        <p className="mt-1 text-base md:text-lg text-gray-600">{number}</p>
      </div>
    </>
  );
}
