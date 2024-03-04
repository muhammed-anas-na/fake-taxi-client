import Fa from 'react-fontawesome';
import Dailyrides from "./SearchcabComponents/Dailyrides";
import { useNavigate } from 'react-router-dom';
export default function Bookcab() {
  const navigate = useNavigate()
  return (
    <div className="bg-hero h-[98vh] scrollbar-hide">
      <Fa onClick={()=>navigate(-1)} name="arrow-left" className='px-4 py-3 cursor-pointe text-2xl'/>
      <section className="relative flex items-center w-full">
        <div className="relative items-center w-full px-5 py-24 mx-auto max-w-7xl md:px-12">
          <div className="relative flex-col items-start align-middle">
          <h1 className='text-2xl font-semibold md:text-3xl pb-0'>Find a cab</h1>
            <div className="grid grid-cols-1 gap-6 lg:gap-24 lg:grid-cols-2">
              <div className="relative gap-12 m-auto lg:inline-flex">
                <div className="max-w-xl text-center lg:text-left">
                  <div className="flex md:gap-32 gap-6 mt-4 text-xs lg:text-sm">
                    <span className="bg-base-yellow rounded-full md:w-auto md:px-4 cursor-pointer px-3">
                      Daily Rides
                    </span>
                    <span className="cursor-pointer">Outstations</span>
                    <span className="cursor-pointer">Rentals</span>
                  </div>
                  <Dailyrides/>
                </div>
              </div>
              <div className="block w-full mt-12 lg:mt-0">
                <img
                  alt="hero"
                  className="hidden xl:block object-cover object-center w-full mx-auto drop-shadow-xl lg:ml-auto rounded-2xl"
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
