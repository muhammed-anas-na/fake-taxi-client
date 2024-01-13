export default function Bookcab() {
  return (
    <div className="bg-hero h-svh p-28">
      <div className="grid grid-cols-5 grid-rows-5 gap-4">
        <div className="col-span-3 row-span-2">
          <h1>FIND A CAB</h1>
        </div>

        <div className="col-span-2 row-span-5 col-start-4"></div>

        <div className="flex col-span-3 row-start-3">
          <div>
            <h3 className="mx-6 bg-base-yellow px-5 rounded-full">
              DAILY RIDES
            </h3>
          </div>
          <div>
            <h3 className="mx-6 bg-base-yellow px-5 rounded-full">
              OUTSTATIONS
            </h3>
          </div>
          <div>
            <h3 className="mx-6 bg-base-yellow px-5 rounded-full">RENTALS</h3>
          </div>
        </div>

        <div className="flex col-span-3 row-span-2 row-start-6">
          <div>
            <label className="relative block overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-blue-600">
              <input
                type="text"
                id="Name"
                placeholder="Name"
                className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
              />
              <span className="absolute start-0 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
                Name
              </span>
            </label>
          </div>

          <div>
            <label className="relative block overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-blue-600">
              <input
                type="number"
                id="number"
                placeholder="Number"
                className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
              />

              <span className="absolute start-0 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
                Number
              </span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
