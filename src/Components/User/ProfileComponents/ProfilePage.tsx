import Lottie from "lottie-react";
import animationData from "../../../assets/Animations/Animation - 1704193432980.json";
import { useRef, useState, useEffect } from "react";
import { useSelector } from "react-redux";

export default function Profilepage() {
  const userData = useSelector((store) => store.user.userData);
  const phoneRef = useRef();
  return (
    <>
      <h1>Profoile page</h1>
      <div className="p-10 flex">
        <Lottie
          animationData={animationData}
          width={20}
          lottieRef={phoneRef}
          loop={true}
        />
        <div className="px-20 items-center my-36">
          <h1 className="font-bold text-lg pb-2">
            First Name:{" "}
            {userData.first_name ? userData.first_name : "Loading..."}
          </h1>
          <h1 className="font-bold text-lg pb-2">
            Last Name: {userData.last_name ? userData.last_name : "Loading..."}
          </h1>
          <h1 className="font-bold text-lg pb-2">
            Email: {userData.email ? userData.email : "Loading..."}
          </h1>
          <h1 className="font-bold text-lg pb-2">
            Phone: {userData.phone ? userData.phone : "Loading..."}
          </h1>
        </div>
      </div>
    </>
  );
}
