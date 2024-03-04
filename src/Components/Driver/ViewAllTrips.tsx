import { useEffect, useState } from "react";
import { GetTripDetailsByDriverIdFn } from "../../utils/Axios/methods/POST";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function ViewAllTrips() {
  const [tripDetails, setTripDetails] = useState([]);
  const driverData = useSelector((store) => store.driver.driverData._id);
  useEffect(() => {
    async function fetchTripData() {
      try {
        const response = await GetTripDetailsByDriverIdFn(driverData);
        setTripDetails(response.data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchTripData();
  },[]);
  return (
    <div className="md:ms-[35vh] md:p-10">
      <div className="relative flex flex-col w-full h-full overflow-scroll text-gray-700 bg-white shadow-md bg-clip-border rounded-xl">
        <table className="w-full text-left table-auto min-w-max">
          <thead>
            <tr>
              <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                  No
                </p>
              </th>
              <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                  Time
                </p>
              </th>
              <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                  From
                </p>
              </th>
              <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                  To
                </p>
              </th>
              <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                  Fare
                </p>
              </th>
              <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70"></p>
              </th>
            </tr>
          </thead>
          <tbody>
            {tripDetails.map((value, index) => {
              return (
                <tr className="even:bg-blue-gray-50/50">
                  <td className="p-4">
                    <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                      {index + 1}
                    </p>
                  </td>
                                <td className="p-4">
                    <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                      {value.createdAt.slice(0,15)}
                    </p>
                  </td>
                  <td className="p-4">
                    <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                      {value.pickup_location.slice(0, 20)}
                    </p>
                  </td>
                  <td className="p-4">
                    <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                      {value.dropoff_location.slice(0,20)}
                    </p>
                  </td>
                  <td className="p-4">
                    <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                      {value.fare}
                    </p>
                  </td>
                  <td className="p-4">
                    <Link
                      to= {`/driver/trip-details/${value._id}`}
                      className="block font-sans text-sm antialiased font-medium leading-normal text-blue-gray-900"
                    >
                      More
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
