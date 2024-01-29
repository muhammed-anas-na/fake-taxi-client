import Lottie from "lottie-react";
import { Link } from "react-router-dom";
import animationData from "../../assets/Animations/driver-hero.json";
import animationData2 from "../../assets/Animations/driver-hero2.json";
import Card from "./Card";
import { useSelector } from "react-redux";
import io from 'socket.io-client';

export default function DriverHome() {
  const driverData = useSelector((store)=>store.driver.driverData)


  return (
    <>
      <section className="bg-driver-bg text-gray-100 h-svh py-24">
        <div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
          <h1 className="text-4xl font-bold leadi sm:text-5xl">
            Drive when you want
            <span className="text-base-yellow"> and make</span> what you need.
          </h1>
          <p className="px-8 mt-8 mb-12 text-lg">Earn on your own schedule!</p>
          <div className="flex flex-wrap justify-center">
            {
              driverData.firstName ? (
                <Link to={"/driver/dashboard"}>
                <button className="px-8 py-3 m-2 text-lg font-semibold rounded  bg-base-yellow text-gray-900 cursor-pointer">
                  Dashboard
                </button>
              </Link>
              ) :(
                <Link to={"/driver/signup"}>
                <button className="px-8 py-3 m-2 text-lg font-semibold rounded  bg-base-yellow text-gray-900 cursor-pointer">
                  Get started
                </button>
              </Link>
              )
            }
            <button className="px-8 py-3 m-2 text-lg border rounded  text-gray-50  border-gray-700">
              Learn more
            </button>
          </div>
        </div>
      </section>

      <div className="container flex flex-col px-6 py-4 mx-auto space-y-6 md:h-128 md:py-16 md:flex-row md:items-center md:space-x-6">
        <div className="flex flex-col items-center w-full md:flex-row md:w-1/2">
          <div className="flex justify-center order-2 mt-6 md:mt-0 md:space-y-3 md:flex-col">
            <button className="w-3 h-3 mx-2 bg-blue-500 rounded-full md:mx-0 focus:outline-none"></button>
            <button className="w-3 h-3 mx-2 bg-gray-300 rounded-full md:mx-0 focus:outline-none hover:bg-blue-500"></button>
            <button className="w-3 h-3 mx-2 bg-gray-300 rounded-full md:mx-0 focus:outline-none hover:bg-blue-500"></button>
            <button className="w-3 h-3 mx-2 bg-gray-300 rounded-full md:mx-0 focus:outline-none hover:bg-blue-500"></button>
          </div>

          <div className="max-w-lg md:mx-12 md:order-2">
            <div className="flex flex-col gap-8 h-screen items-center">
              <h1 className="text-4xl first-letter:text-6xl first-letter:font-bold">
                Why drive with us?
              </h1>
              <Card
                title={"Set your own hours"}
                desc={"You decide when and how often you drive."}
              />
              <Card
                title={"Get paid fast"}
                desc={"Weekly payments in your bank account."}
              />
              <Card
                title={"Get support at every turn"}
                desc={
                  "If there’s anything that you need, you can reach us anytime."
                }
              />
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center w-full h-96 md:w-1/2">
          <Lottie
            animationData={animationData}
            className="object-cover w-full h-full max-w-2xl rounded-md"
          />
        </div>
      </div>

      <h1 className="text-4xl first-letter:text-6xl first-letter:font-bold md: ps-32">
        Safety on the road
      </h1>

      <div className="container flex flex-col px-6 py-4 mx-auto space-y-6 md:h-128 md:py-16 md:flex-row md:items-center md:space-x-6">
        <div className="flex items-center justify-center w-full h-96 md:w-1/2">
          <Lottie
            animationData={animationData2}
            className="object-cover w-full h-full max-w-2xl rounded-md"
          />
        </div>

        <div className="flex flex-col items-center w-full md:flex-row md:w-1/2">
          <div className="max-w-lg md:mx-12 md:order-2">
            <div className="flex flex-col gap-8 h-screen items-center">
              <Card
                title={"Protection on every trip"}
                desc={
                  "Each trip you take with the Uber app is insured to protect you and your rider."
                }
              />
              <Card
                title={"Help if you need it"}
                desc={
                  "The Emergency Button calls 911. The app displays your trip details so you can quickly share them with authorities."
                }
              />
              <Card
                title={"Community Guidelines"}
                desc={
                  "Our standards help to create safe connections and positive interactions with everyone. Learn how our guidelines apply to you."
                }
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
