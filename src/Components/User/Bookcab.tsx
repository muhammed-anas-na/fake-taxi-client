import Fa from 'react-fontawesome';
import Dailyrides from "./SearchcabComponents/Dailyrides";
import { useNavigate } from 'react-router-dom';
export default function Bookcab() {
  const navigate = useNavigate()
  return (
    <div className="bg-hero h-svh ">
      <Fa onClick={()=>navigate(-1)} name="arrow-left" className='px-4 py-3 cursor-pointer'/>
      <section className="relative flex items-center w-full">
        <div className="relative items-center w-full px-5 py-24 mx-auto max-w-7xl md:px-12">
          <div className="relative flex-col items-start align-middle">
            <div className="grid grid-cols-1 gap-6 lg:gap-24 lg:grid-cols-2">
              <div className="relative gap-12 m-auto lg:inline-flex">
                <div className="max-w-xl text-center lg:text-left">
                  <div className="flex gap-32 ">
                    <span className="bg-base-yellow rounded-full w-auto px-4 cursor-pointer">
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
                  className="object-cover object-center w-full mx-auto drop-shadow-xl lg:ml-auto rounded-2xl"
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
