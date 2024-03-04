import { Avatar, Button } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import img from "../../assets/driver-profile-bg.jpg";

import {
  GetTripDetailsByUserIdFn,
  GetUserDetails,
} from "../../utils/Axios/methods/POST";
import { Link, useParams } from "react-router-dom";
import { Breadcrumbs } from "@material-tailwind/react";

function BreadcrumbsWithIcon() {
    return (
      <Breadcrumbs className="md:ms-[35vh] md:mt-5">
        <a to="/admin" className="opacity-60">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
          </svg>
        </a>
        <Link to="/admin/view-users" className="opacity-60">
          <span>User</span>
        </Link>
        <Link to="#">User Details</Link>
      </Breadcrumbs>
    );
}

function Card({ userDetails }) {
  return (
    <>
      <div className="p-2 md:p-10 rounded-xl bg-blue-50 min-w-[50%] max-w-[50%] shadow-2xl">
        <div className="rounded-lg h-[20vh] bg-white relative">
          <img
            src={img}
            alt="bf-img"
            className="h-full rounded-lg w-full object-cover"
          />
          <div className="absolute -bottom-5 left-5">
            <Avatar
              src="https://docs.material-tailwind.com/img/face-2.jpg"
              alt="avatar"
              variant="rounded"
              size="xl"
            />
          </div>
        </div>

        <div className="p-3">
          <div className="relative md:mt-5">
            <h1 className="absolute -top-3 left-2 font-bold">Name</h1>
            <p className="bg-white p-1 rounded-lg md:text-sm text-gray-600">
              {userDetails.full_name}
            </p>
          </div>

          <div className="relative md:mt-5">
            <h1 className="absolute -top-3 left-2 font-bold">Email</h1>
            <p className="bg-white p-1 rounded-lg md:text-sm text-gray-600">
              {userDetails.email}
            </p>
          </div>

          <div className="relative md:mt-5">
            <h1 className="absolute -top-3 left-2 font-bold">Number</h1>
            <p className="bg-white p-1 rounded-lg md:text-sm text-gray-600">
              {userDetails.phone}
            </p>
          </div>

          <div className="relative md:mt-5">
            <h1 className="absolute -top-3 left-2 font-bold">Total Trips</h1>
            <p className="bg-white p-1 rounded-lg md:text-sm text-gray-600">
              32
            </p>
          </div>
          <div className="flex justify-end">
              <Button
                className="right-0 md:mt-4 p-2 px-4"
                variant="gradient"
                color="green"
              >
                Contact
              </Button>

          </div>
        </div>
      </div>
    </>
  );
}

export function UserDetails() {
  const { userId } = useParams();
  const [userDetails, setUserDetails] = useState();
  const [tripDetails, setTripDetails] = useState();

  useEffect(() => {
    async function fetchUserDetails() {
      try {
        const response = await GetUserDetails(userId);
        setUserDetails(response.data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchUserDetails();
  }, []);

  useEffect(() => {
    async function fetchTripDetails() {
      try {
        const response = await GetTripDetailsByUserIdFn(userId);
        setTripDetails(response.data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchTripDetails();
  }, [userId]);

  return (
    <>
    <BreadcrumbsWithIcon/>
    <div className="md:ms-[35vh] md:mt-[5vh] flex">
      {userDetails ? (
        <Card userDetails={userDetails} />
      ) : (
        <div className="skeleton w-1/2 h-72"></div>
      )}
      {tripDetails ? (
        <div className="px-5 max-h-[70vh] overflow-auto scrollbar-hide">
          <div className="">
            <table className="table-fixed table-lg">
              {/* head */}
              <thead className="text-white bg-blue-gray-800 sticky top-0">
                <tr>
                  <th className="sticky left-0 z-10 bg-blue-gray-800">No</th>
                  <th className="sticky z-10 bg-blue-gray-800">From</th>
                  <th className="sticky z-10 bg-blue-gray-800">To</th>
                  <th className="sticky z-10 bg-blue-gray-800">Fare</th>
                  <th className="sticky right-0 z-10 bg-blue-gray-800"></th>
                </tr>
              </thead>
              <tbody className="bg-base-200">
                {tripDetails.map((value, index) => {
                  return (
                    <tr key={value._id}>
                      <td>{index + 1}</td>
                      <td>{value.pickup_location}</td>
                      <td>{value.dropoff_location}</td>
                      <td>{value.fare}</td>
                      <td>
                        <Link to={`/admin/trip-details/${value._id}`}>
                          <Button className="p-2" variant="gradient">
                            More
                          </Button>
                        </Link>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <div className="skeleton w-[50vh] md:ms-24 h-[72vh]"></div>
      )}
    </div>
    </>
  );
}
