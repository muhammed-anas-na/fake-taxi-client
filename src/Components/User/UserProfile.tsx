import { useState, useEffect } from "react";
import { Avatar } from "@material-tailwind/react";
// import { Card, Typography } from "@material-tailwind/react";
import {
  GetAllTripsOfUserFn,
  GetUserDetails,
} from "../../utils/Axios/methods/POST";
import { useSelector } from "react-redux";
import { Link, Route, Routes } from "react-router-dom";
import ProfilePersonal from "./ProfilePersonal";
import Profiletrips from "./ProfileTrips";
import Fa from "react-fontawesome";

import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
function ProfileCard({ children }) {
  const userData = useSelector((store) => store.user.userData);
  return (
    <>
      <Link to="/"><Fa name="arrow-left" className="px-4 py-3 cursor-pointer text-2xl" /></Link>
      <div className="flex justify-center">
        <Card className="w-96">
          <CardHeader floated={false} className="h-40">
            <img
              src="https://docs.material-tailwind.com/img/team-4.jpg"
              alt="profile-picture"
              style={{ objectFit: "cover", width: "100%", height: "100%" }}
            />
          </CardHeader>
          <CardBody className="text-center">
            <Typography variant="h4" color="blue-gray" className="mb-2">
              {userData ? userData.full_name : ""}
            </Typography>
            <Typography color="blue-gray" className="font-medium" textGradient>
              RIDER
            </Typography>
          </CardBody>

          <div className="flex justify-around">
            <Link to="/profile/personal">
              <h1>Personal</h1>
            </Link>
            <Link to="/profile/trips">
              <h1>Trips</h1>
            </Link>
          </div>
          {children}
        </Card>
      </div>
    </>
  );
}

export default function UserProfile() {
  return (
    <>
      <Routes>
        <Route
          path="/personal"
          element={
            <ProfileCard>
              <ProfilePersonal />
            </ProfileCard>
          }
        />

        <Route
          path="/trips"
          element={
            <ProfileCard>
              <Profiletrips />
            </ProfileCard>
          }
        />
      </Routes>
    </>
  );
}
