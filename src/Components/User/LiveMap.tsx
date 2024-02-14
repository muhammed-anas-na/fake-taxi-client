import { useEffect , useRef } from "react";
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import customMarkerImage from '../../assets/map-car.png'; 

mapboxgl.accessToken = 'pk.eyJ1IjoiYW5hcy1uYSIsImEiOiJjbHJoaGdydm0wYzd1Mml1Zzk2NGNodGJnIn0.lOyOTcDht4tPvLSjvf_yxQ';



export default function LiveMap({DriverLocation , destination}) {
  console.log("Destination location inmap ==>" ,destination)
    const mapContainer = useRef(null);
    const map = useRef(null);

    useEffect(()=>{
        if(!map.current){
            map.current = new mapboxgl.Map({
                container: mapContainer.current,
                style: 'mapbox://styles/mapbox/streets-v12',
                center: [0,0],
                zoom:2,
            })
            map.driverMarker = new mapboxgl.Marker({
                element: createCustomMarkerElement(),
            })  
            .setLngLat([                  
                  DriverLocation?.longitude? DriverLocation.longitude :76.450838,
                  DriverLocation?.latitude? DriverLocation.latitude:10.024144
              ])
            .addTo(map.current);

            map.riderMarker = new mapboxgl.Marker()
            .setLngLat([
              destination?.longitude? destination.longitude :76.321802,
              destination?.latitude? destination.latitude:9.9380803
            ])
            .addTo(map.current);


        }
    } , [DriverLocation])

      // Function to create a custom marker element with the custom image
  const createCustomMarkerElement = () => {
    const element = document.createElement('div');
    element.className = 'custom-marker';
    element.style.backgroundImage = `url(${customMarkerImage})`;
    element.style.backgroundSize = 'cover'; // Adjust to 'contain' if needed
    element.style.width = '30px'; // Set the width of your custom marker
    element.style.height = '50px'; 
    return element;
  };

  return (
    <div ref={mapContainer} className="map-container  md:w-full md:h-72"/>

  );
}
