import { Button, Card, Typography, IconButton } from "@material-tailwind/react";
import Fa from "react-fontawesome";
import { getDriverRequestFn } from "../../utils/Axios/methods/GET";
import { useEffect, useState } from "react";
import { AcceptDriverRequestFn } from "../../utils/Axios/methods/POST";
import { Link } from "react-router-dom";

const TABLE_HEAD = [
  "No",
  "Name",
  "Number",
  "Email",
  "Vehicle Name",
  "Vehicle Category",
  "",
];



export function DriverRequests() {
  const [request, setRequest] = useState([]);
  useEffect(() => {
    async function fetchDriverRequest() {
      try {
        const response = await getDriverRequestFn();
        console.log("Response heree==>",response.data)
        setRequest(response.data);
      } catch (err) {
        console.log("Error catchedd heree",err);
      }
    }

    fetchDriverRequest();
  }, []);

  const handleAcceptDrive =async(driverId: string)=>{
    try{
      const response = await AcceptDriverRequestFn(driverId);
      console.log(response)
    }catch(err){
      console.log(err);
    }
  }

  return (
    <Card className="h-full overflow-scroll md:ms-[35vh] md:mt-[8vh] md:mr-[3vh]">
      <table className="w-full min-w-max table-auto text-left">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th
                key={head}
                className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
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
          {request.map((value, index) => {
            return (
              <tr>
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
                    {value.full_name}
                  </Typography>
                </td>
                <td className="p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {value.phone}
                  </Typography>
                </td>
                <td className="p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {value.email}
                  </Typography>
                </td>
                <td className="p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {value.vehicle_details.vehicle_details.vehicle_name}
                  </Typography>
                </td>
                <td className="p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {value.vehicle_details.vehicle_details.vehicle_category}
                  </Typography>
                </td>
                <td>
                  <Link to={`/admin/driver-details/${value._id}`}>
                  <Button className="md:mx-2 px-3 py-3">More info</Button>
                  </Link>
                  <IconButton
                    variant="outlined"
                    className="rounded-full"
                    color="green"
                  >
                    <Fa name="fa-solid fa-check" size="lg" onClick={()=>handleAcceptDrive(value._id)}/>
                  </IconButton>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Card>
  );
}
