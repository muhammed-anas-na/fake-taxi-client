import React, { useEffect,useState, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions';
import '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css';


//import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions';

mapboxgl.accessToken = 'pk.eyJ1IjoiYW5hcy1uYSIsImEiOiJjbHJoaGdydm0wYzd1Mml1Zzk2NGNodGJnIn0.lOyOTcDht4tPvLSjvf_yxQ';


interface MapComponentProps {
  from: string
  to: string,
}
const MapComponent:React.FC<MapComponentProps> = ({from,to}) => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const directions = useRef(null);

  const [lng, setLng] = useState(0);
  const [lat, setLat] = useState(0);
  const [zoom, setZoom] = useState(15);

  useEffect(() => {
    if (!map.current) {
       map.current = new mapboxgl.Map({
         container: mapContainer.current,
         style: 'mapbox://styles/mapbox/streets-v12',
         center:[10.025801, 76.449645],
         zoom: zoom,
       });
 
       map.current.addControl(new mapboxgl.GeolocateControl({
         positionOptions: {
         enableHighAccuracy: true
         },
         trackUserLocation: true,
         showUserHeading: true
         }));

         directions.current = new MapboxDirections({
          accessToken: mapboxgl.accessToken,
          unit: 'metric',
          profile: 'mapbox/driving',
          
        });
  
        map.current.addControl(directions.current, 'top-left');
        directions.current.setOrigin('maradu'); // Set pickup location
        directions.current.setDestination('vytilla'); // Set drop-off location

        // directions.current.setOrigin(from); // Set pickup location
        // directions.current.setDestination(to); // Set drop-off location

     }
   } , [lat, lng, zoom]);

  return (
      <div ref={mapContainer} className="map-container  md:w-full md:h-72 md:mt-7 md:pb-4"/>
  );
};

export default MapComponent;
