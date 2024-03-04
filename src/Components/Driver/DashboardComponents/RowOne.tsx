import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { useRef, useEffect, useState } from 'react';
import socket from '../Socket';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addFindCab } from '../../../utils/Redux/Slice/FindCabSlice';

export default function RowOne() {

  mapboxgl.accessToken = 'pk.eyJ1IjoiYW5hcy1uYSIsImEiOiJjbHJoaGdydm0wYzd1Mml1Zzk2NGNodGJnIn0.lOyOTcDht4tPvLSjvf_yxQ';
  
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(0);
  const [lat, setLat] = useState(0);
  const [zoom, setZoom] = useState(15);
  const [request , setRequest] = useState([])

  socket.on('reqestToDriver', (data) => { 
    console.log("Requesting for ridee==>",data)
    setRequest(() => [data]);
  });
  
  const handleRequest=(message: string)=>{
    socket.emit('successRide' , {request,message});
    socket.on('tripCreated' , (data)=>{
      setRequest([])
      console.log("Trip data in driver ==>" , data);
      localStorage.setItem('userSocketId' , data.userSocketId);
      dispatch(addFindCab(data));
      navigate(`/driver/trip/${data.tripData._id}`)
    })
  }

  useEffect(() => {
   if (!map.current) {
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v12',
        center: [lng, lat],
        zoom: zoom,
      });

      map.current.addControl(new mapboxgl.GeolocateControl({
        positionOptions: {
        enableHighAccuracy: true
        },
        trackUserLocation: true,
        showUserHeading: true
        }));
    } else {
      map.current.setCenter([lng, lat]);
    }
  } , [lat, lng, zoom]);

  return (
    <>
    <section className="px-4 py-12 max-w-7xl md:ms-[35vh]">
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
        <div>{request.length == 0 ? "Not Recieved" : (
        request.map((value,index)=>{
          return(
            <div className='bg-white shadow-2xl md:w-64 p-3'>
              <p>From :{value.from}</p>
              <p>To : {value.to}</p>
              <p>Fare: {value.total_price}</p>
              <div className='flex gap-2'>
                <button
                onClick={()=>handleRequest('accept')} 
                className='bg-green-700 text-white p-2 rounded-full'>Accept</button>
                <button 
                onClick={()=>{
                  handleRequest('reject')
                  setRequest([]);
                }}
                className='bg-red-900 text-white p-2 rounded-full'>Decline</button>
              </div>
            </div>
          )
        })
        )}</div>
      </div>
        
    </section>
    </>
  );
}
