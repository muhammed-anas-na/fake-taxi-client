import { Button, Card, Typography, IconButton } from "@material-tailwind/react";
import Fa from "react-fontawesome";
import {
  getAllTripsFn,
  getDriverRequestFn,
} from "../../utils/Axios/methods/GET";
import { useEffect, useState } from "react";
import { AcceptDriverRequestFn } from "../../utils/Axios/methods/POST";
import { Link } from "react-router-dom";

const TABLE_HEAD = [
  "No",
  "Date",
  "Customer Id",
  "Pickup location",
  "Dropoff location",
  "Fare",
  "Status",
  "",
];

export default function AdminViewAllTrips() {
  const [tripDetails, setTripDetails] = useState([]);
  useEffect(() => {
    async function fetchAlltrips() {
      try {
        let response = await getAllTripsFn();
        setTripDetails(response.data);
      } catch (err) {
        console.log(err);
      }
    }

    fetchAlltrips();
  }, []);
  return (
    <Card className="h-full overflow-scroll md:ms-[35vh] md:mt-[8vh] md:mr-[3vh]">
      <table className="w-full min-w-max table-auto text-left">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th
                key={head}
                className="border-b border-blue-gray-100 bg-blue-gray-200 p-4"
              >
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tripDetails.map((value, index) => (
            <tr key={value._id} className="cursor-pointer hover:bg-blue-gray-50">
                <td className="p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {index+1}
                  </Typography>
                </td>
                <td className="p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {new Date(parseInt(value.pickup_time)).toLocaleDateString()}
                  </Typography>
                </td>
                <td className="p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {value._id}
                  </Typography>
                </td>
                <td className="p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {value.pickup_location.substring(0,10)}
                  </Typography>
                </td>
                <td className="p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {value.dropoff_location.substring(0,10)}
                  </Typography>
                </td>
                <td className="p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {value.fare}
                  </Typography>
                </td>
                <td>
                  {
                    value.status == "trip-completed" ? (
                    <div className="badge bg-blue-600 px-3 py-2">success</div>
                    ) : (
                      <div className="badge bg-red-600 px-3 py-2">Cancelled</div>
                    )
                  }
                  
                </td>
                <td>
                    <Link to={`/admin/trip-details/${value._id}`}>
                        <Button size="sm">
                            More
                        </Button>
                    </Link>
                </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  );
}
