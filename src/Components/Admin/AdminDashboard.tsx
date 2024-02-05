import { lazy, Suspense, useState } from "react";
import AdminHeader from "./DashboardComponents/AdminHeader";
const RowOne = lazy(() => import("./DashboardComponents/RowOne"));
const ViewDrivers = lazy(() => import("./DashboardComponents/ViewDrivers"));
const VehicleCategory = lazy(()=>import("./DashboardComponents/VehicleCategory"))


export default function DriverDashboard() {
  const [current , setCurrent] = useState('rowone')
  return (
    <div className="grid grid-cols-5 grid-rows-5">
      <div className="row-span-5">
        <div className="flex h-screen flex-col justify-between border-e bg-white shadow-2xl fixed">
          <div className="px-4 py-6">
            <span className="grid h-10 w-32 place-content-center rounded-lg bg-gray-100 text-xs text-gray-600">
              Logo
            </span>
            <ul className="mt-6 space-y-1">
              <li onClick={()=>setCurrent('rowone')}>
                <span
                  className="block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700"
                >
                  Dashboard
                </span>
              </li>

              <li>
                <details className="group [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                    <span className="text-sm font-medium"> Trips </span>

                    <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  </summary>

                  <ul className="mt-2 space-y-1 px-4">
                    <li onClick={()=>setCurrent('trips')}>
                      <span
                  
                        className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                      >
                        All Trips
                      </span>
                    </li>
                    <li>
                      <a
                        href=""
                        className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                      >
                        Completed
                      </a>
                    </li>

                    <li>
                      <a
                        href=""
                        className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                      >
                        Canclled
                      </a>
                    </li>
                  </ul>
                </details>
              </li>

              <li onClick={()=>setCurrent('view-drivers')} className="cursor-pointer">
                <span className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                  Drivers
                </span>
              </li>

              <li
                  onClick={()=>setCurrent('users')}
               className="cursor-pointer">
                <span
                  className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                >
                  Users
                </span>
              </li>

              <li onClick={()=>{setCurrent('VehicleCategory')}} className="cursor-pointer">
                <span
                  className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                >
                  Vehicle Details
                </span>
              </li>
              <li onClick={()=>setCurrent('rewards')} className="cursor-pointer">
                <span
                  
                  className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                >
                  Rewards
                </span>
              </li>
              <li>
                <details className="group [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                    <span className="text-sm font-medium"> Account </span>

                    <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  </summary>

                  <ul className="mt-2 space-y-1 px-4">
                    <li>
                      <a
                        href=""
                        className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                      >
                        Details
                      </a>
                    </li>

                    <li>
                      <a
                        href=""
                        className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                      >
                        Security
                      </a>
                    </li>

                    <li>
                      <form action="/logout">
                        <button
                          type="submit"
                          className="w-full rounded-lg px-4 py-2 text-sm font-medium text-gray-500 [text-align:_inherit] hover:bg-gray-100 hover:text-gray-700"
                        >
                          Logout
                        </button>
                      </form>
                    </li>
                  </ul>
                </details>
              </li>
            </ul>
          </div>

          <div className="sticky inset-x-0 bottom-0 border-t border-gray-100">
            <a
              href="#"
              className="flex items-center gap-2 bg-white p-4 hover:bg-gray-50"
            >
              <img
                alt="Man"
                src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                className="h-10 w-10 rounded-full object-cover"
              />

              <div>
                <p className="text-xs">
                  <strong className="block font-medium">Eric Frusciante</strong>

                  <span> eric@frusciante.com </span>
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="col-span-4 row-span-5">
          <AdminHeader />
        <Suspense fallback="Loading...">
          {current == 'rowone' ? <RowOne/> :''}
          {current == 'view-drivers' ? <ViewDrivers/>:''}
          {current == 'VehicleCategory' ? <VehicleCategory/>:''}
        </Suspense>
      </div>
    </div>
  );
}
