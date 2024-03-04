import React, { useEffect, useState, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions';
import '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css';

mapboxgl.accessToken = 'pk.eyJ1IjoiYW5hcy1uYSIsImEiOiJjbHJoaGdydm0wYzd1Mml1Zzk2NGNodGJnIn0.lOyOTcDht4tPvLSjvf_yxQ';

interface MapComponentProps {
  from: string;
  to: string;
}

const MapContainer: React.FC<MapComponentProps> = ({ from = '', to = '' }) => {
  console.log("FROM IN MAP ==>", from);
  console.log("TO IN MAP ==>", to);
  const mapContainer = useRef(null);
  const map = useRef(null);
  const directions = useRef(null);
  const [lng, setLng] = useState(0);
  const [lat, setLat] = useState(0);
  const [zoom, setZoom] = useState(15);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(position => {
      setLng(position.coords.longitude);
      setLat(position.coords.latitude);
    });
    if (!map.current) {
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v12',
        zoom: zoom,
        center: [lng, lat],
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
    }

    directions.current.setOrigin(from);
    directions.current.setDestination(to);

  }, [from, to]); // Include 'from' and 'to' in the dependency array

  return (
    <div ref={mapContainer} className="map-container md:w-full md:h-72 md:mt-7 md:pb-4" />
  );
};

export default React.memo(MapContainer);
