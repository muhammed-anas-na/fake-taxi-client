import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { useRef, useEffect } from 'react';

export default function RowOne() {

  mapboxgl.accessToken = 'pk.eyJ1IjoiYW5hcy1uYSIsImEiOiJjbHJoaGdydm0wYzd1Mml1Zzk2NGNodGJnIn0.lOyOTcDht4tPvLSjvf_yxQ';
  
  const mapContainer = useRef(null);
  const map = useRef(null);
  
  useEffect(() => {

   if (!map.current) {
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v12',
        center: [0, 0],
        zoom: 15,
      });

      map.current.addControl(new mapboxgl.GeolocateControl({
        positionOptions: {
        enableHighAccuracy: true
        },
        trackUserLocation: true,
        showUserHeading: true
        }));
    } else {
      map.current.setCenter([0, 0]);
    }



  } , []);

  return (
    <>
    <section className="px-4 py-12 mx-auto max-w-7xl">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
        <div className="card border-none shadow-xl hover:shadow-2xl duration-500 hover:-translate-x-3">
          <div className="p-5">
            <p className="mb-2 text-xs font-semibold leading-none tracking-wide text-gray-500 uppercase">
             Trips Today
            </p>
            <h2 className="text-3xl font-extrabold leading-none text-gray-800 truncate">
              4
            </h2>
          </div>
          <a
            href="#"
            className="px-5 py-3 text-sm font-medium text-purple-700 card-footer hover:text-black"
          >
            See all income reports
          </a>
        </div>
        <div className="card border-none shadow-xl hover:shadow-2xl duration-500 hover:-translate-x-3">
          <div className="p-5">
            <p className="mb-2 text-xs font-semibold leading-none tracking-wide text-gray-500 uppercase">
            Total Trips
            </p>
            <h2 className="text-3xl font-extrabold leading-none text-gray-800 truncate">
              350
            </h2>
          </div>
          <a
            href="#"
            className="px-5 py-3 text-sm font-medium text-purple-700 card-footer hover:text-black"
          >
            See all expense tracking
          </a>
        </div>
        <div className="card border-none shadow-xl hover:shadow-2xl duration-500 hover:-translate-x-3">
          <div className="p-5">
            <p className="mb-2 text-xs font-semibold leading-none tracking-wide text-gray-500 uppercase">
             Today's Revenue
            </p>
            <h2 className="text-3xl font-extrabold leading-none text-gray-800 truncate">
              $24
            </h2>
          </div>
          <a
            href="#"
            className="px-5 py-3 text-sm font-medium text-purple-700 card-footer hover:text-black"
          >
            View all invoices
          </a>
        </div>
        <div className="card border-none shadow-xl hover:shadow-2xl duration-500 hover:-translate-x-3">
          <div className="p-5">
            <p className="mb-2 text-xs font-semibold leading-none tracking-wide text-gray-500 uppercase">
              Total Revenue
            </p>
            <h2 className="text-3xl font-extrabold leading-none text-gray-800 truncate">
              $655
            </h2>
          </div>
          <a
            href="#"
            className="px-5 py-3 text-sm font-medium text-purple-700 card-footer hover:text-black"
          >
            Full projection report
          </a>
        </div>
        
      </div>
      <div className='flex  mt-5 gap-3'>
        <div ref={mapContainer} className="map-container md:w-3/4 md:h-80"/>
        <div>Not recieved</div>
      </div>
        
    </section>
    </>
  );
}
