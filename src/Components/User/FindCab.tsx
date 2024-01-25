import Fa from "react-fontawesome";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect , useState } from "react";
import io from 'socket.io-client';

export default function FindCab() {
  const navigate = useNavigate();
  const {distance , duration , from ,to} = useSelector((store)=> store.findcab.findcabData);
  const [bikePrice , setbikePrice] = useState(0)
  const [hashbackPrice , sethashbackPrice] = useState(0);
  const [suvPrice , setsuvPrice] = useState(0);

  
  function calculateFare(distanceInMeter: number , durationInSecond: number){
    const distanceInKm = distanceInMeter/1000;
    const durationInMinute = durationInSecond/60;

    const BASE_PRICE_FOR_BIKE = 10;
    const BASE_PRICE_FOR_HASHBACKS = 30;
    const BASE_PRICE_FOR_SUV = 50;
    const PER_KM_FARE = 10;
    const PER_MIN_FARE = 1.5

    const PRICE_FOR_KM = PER_KM_FARE*distanceInKm;
    const PRICE_FOR_MIN = PER_MIN_FARE * durationInMinute; 

    const TOTAL_BIKE_FARE = Math.floor(BASE_PRICE_FOR_BIKE + PRICE_FOR_KM + PRICE_FOR_MIN);
    const TOTAL_HASHBACK_FARE = Math.floor(BASE_PRICE_FOR_HASHBACKS + PRICE_FOR_KM + PRICE_FOR_MIN);
    const TOTAL_SUV_FARE = Math.floor(BASE_PRICE_FOR_SUV + PRICE_FOR_KM + PRICE_FOR_MIN);
    return {
      TOTAL_HASHBACK_FARE,
      TOTAL_BIKE_FARE,
      TOTAL_SUV_FARE
    }
  }

  useEffect(()=>{
    const {TOTAL_BIKE_FARE , TOTAL_HASHBACK_FARE ,TOTAL_SUV_FARE} = calculateFare(distance , duration);
    setbikePrice(TOTAL_BIKE_FARE)
    sethashbackPrice(TOTAL_HASHBACK_FARE);
    setsuvPrice(TOTAL_SUV_FARE);
    

  } , [distance , duration])

  const handleFindCab=async(num: number)=>{
    let category;
    let total_price;
    if(num == 1){
      category = 'bike'
      total_price = bikePrice
    }if(num == 2){
      category = 'hashback'
      total_price = hashbackPrice
    }if(num == 3){
      category = 'suv'
      total_price = suvPrice;
    }
    try{
      const repsonse = await MatchDriver({category , total_price , from , to})
    }catch(err){
      console.log(err);
    }
    //socket.emit("newTrip", { category , total_price , from , to });

  }

  return (
    <div className="bg-hero h-screen bg-no-repeat">
      <Fa
        onClick={() => navigate(-1)}
        name="arrow-left"
        className="px-4 py-3 cursor-pointer text-2xl"
      />
      <section className="relative flex w-full">
        <div className="relative w-full px-5 py-24 mx-auto max-w-7xl md:px-12">
          <div className="relative flex-col">
            <h1 className="text-2xl font-semibold md:text-3xl pb-0">
              Search for cab
            </h1>
            <div className="grid grid-cols-1 gap-6 lg:gap-24 lg:grid-cols-2">
              <div>
                <div onClick={()=>handleFindCab(1)}
                className="flex hover:translate-x-3 duration-500 items-center gap-5 bg-white shadow-2xl p-3 rounded-lg cursor-pointer mt-4">
                  <img
                    alt="hero"
                    className="object-cover  object-center w-20 drop-shadow-xl m-0 rounded-2xl"
                    src="/hero-image.png"
                  />
                  <h1 className="font-bold">Motor Bike</h1>
                  <div className="flex items-center ml-auto">
                  <p>{bikePrice ? Math.floor(bikePrice)+".00"  : (<span className="loading loading-infinity loading-lg"></span>)}</p>
                  <Fa
                    name="arrow-right"
                    className="px-4 py-3 cursor-pointer right-0 hover:translate-x-3  duration-500"
                    />
                  </div>
                </div>

                <div onClick={()=>handleFindCab(2)}
                className="flex hover:translate-x-3 duration-500 items-center gap-5 bg-white shadow-2xl p-3 rounded-lg cursor-pointer mt-4">
                  <img
                    alt="hero"
                    className="object-cover  object-center w-20 drop-shadow-xl m-0 rounded-2xl"
                    src="/hero-image.png"
                  />
                  <h1 className="font-bold">Hashback</h1>
                  <div className="flex items-center ml-auto">
                  <p>{hashbackPrice ? Math.floor(hashbackPrice)+".00" : (<span className="loading loading-infinity loading-lg"></span>)}</p>
                  <Fa
                    name="arrow-right"
                    className="px-4 py-3 cursor-pointer right-0 hover:translate-x-2  duration-500"
                    />
                  </div>
                </div>


                <div onClick={()=>handleFindCab(3)}
                className="flex hover:translate-x-3 duration-500 items-center gap-5 bg-white shadow-2xl p-3 rounded-lg cursor-pointer mt-4">
                  <img
                    alt="hero"
                    className="object-cover  object-center w-20 drop-shadow-xl m-0 rounded-2xl"
                    src="/hero-image.png"
                  />
                  <h1 className="font-bold">SUV</h1>
                  <div className="items-center ml-auto flex">
                  
                  <p>{suvPrice ? Math.floor(suvPrice)+".00" : (<span className="loading loading-infinity loading-lg"></span>)}</p>
                  <Fa
                    name="arrow-right"
                    className="px-4 py-3 cursor-pointer right-0 hover:translate-x-2  duration-500"
                    />


                  </div>
                </div>

              </div>

              

              <div className="block w-full mt-12 lg:mt-0">
                <img
                  alt="hero"
                  className="hidden lg:block object-cover object-center w-full mx-auto drop-shadow-xl lg:ml-auto rounded-2xl"
                  src="/hero-image.png"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
