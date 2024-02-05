import { useEffect , useRef } from "react";
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import customMarkerImage from '../../assets/map-car.png'; 

mapboxgl.accessToken = 'pk.eyJ1IjoiYW5hcy1uYSIsImEiOiJjbHJoaGdydm0wYzd1Mml1Zzk2NGNodGJnIn0.lOyOTcDht4tPvLSjvf_yxQ';



export default function LiveMap() {

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
            .setLngLat([0, 0])
            .addTo(map.current);

            map.riderMarker = new mapboxgl.Marker()
            .setLngLat([0, 1])
            .addTo(map.current);


        }
    })

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
    <div ref={mapContainer} className="map-container  md:w-full md:h-72 md:mt-7 md:pb-4"/>

  );
}
