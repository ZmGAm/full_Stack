
import React, { useState, useEffect, useContext } from "react";
import {
  GoogleMap,
  MarkerF,
  OverlayViewF,
  OverlayView,
  DirectionsRenderer,
} from "@react-google-maps/api";

import { PoolContext } from "./Context/PoolContext";
const containerStyle = {
  width: "100%",
  height: window.innerWidth * 0.45,
};
function Poolmap() {
  
  const { pool } = useContext(PoolContext);

  const [center, setCenter] = useState({
    lat: -3.745,
    lng: -38.523,
  });

  const [map, setMap] = React.useState(null);
  const [directionpoint, setDirectionpoint] = React.useState({});

  const onLoad = React.useCallback(
    function callback(map) {
      const bounds = new window.google.maps.LatLngBounds(center);
      map.fitBounds(bounds);
      setMap(map);
    },
    [center]
  );

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);
  
  useEffect(() => {
    // setPlaceholder(type === 'Source' ? 'Pickup Location ' : 'Dropoff Location ');
    if (pool.Location.source != null && map) {
      setCenter({
        lat: pool.Location.slat,
        lng: pool.Location.slng,
      });
    }
  
  }, [pool.Location.source]);

  useEffect(() => {
    // setPlaceholder(type === 'Source' ? 'Pickup Location ' : 'Dropoff Location ');
    if (pool.Location.destination !=null && map) {
      setCenter({
        lat: pool.Location.dlat,
        lng: pool.Location.dlng,
      });
    }
  }, [pool.Location.destination]);
 

  // const directionRoute=()=>{

  //   const DirectionsService=new window.google.maps.DirectionsService();
  //   DirectionsService.route({
  //     origin:{lat:source.lat,lng:source.lng},
  //     destination:{lat:destination.lat,lng:destination.lng},
  //     travelMode:window.google.maps.TravelMode.DRIVING
  //   },(result,Status)=>{
  //     console.log("direction status",Status)
  //     // console.log("direction google status",window.google.maps.DirectionsService.OK)
  //     if(Status==='OK'){
  //       setDirectionpoint(result)
  //         console.log("direction result",result)
  //         console.log("direction point",directionpoint)
  //     }
  //     else{
  //       console.error('Error');
  //     }
  //   })
  // }
  // const directionRoute = () => {
  //   const DirectionsService = new window.google.maps.DirectionsService();
  //   DirectionsService.route(
  //     {
  //       origin: new window.google.maps.LatLng(source.lat, source.lng),
  //       destination: new window.google.maps.LatLng(destination.lat, destination.lng),
  //       travelMode: window.google.maps.TravelMode.DRIVING
  //     },
  //     (result, status) => {
  //       console.log("Direction Status:", status);
  //       if (status === window.google.maps.DirectionsStatus.OK) {
  //         console.log("Direction Result:", result);
  //         setDirectionpoint(result);
  //         console.log("Direction point Result:", directionpoint);
  //         console.log("google Result:", window.google);

  //       } else {
  //         console.error('Error:', status);
  //       }
  //     }
  //   );
    
  // };


  const directionRoute = () => {
    const DirectionsService = new window.google.maps.DirectionsService();
    // const DirectionsRenderer=new window.google.maps.DirectionsRenderer();
    if (pool.Location.source && pool.Location.destination) { 
    DirectionsService.route(
      {
        origin: new window.google.maps.LatLng(pool.Location.slat, pool.Location.slng), // Create LatLng object for origin
        destination: new window.google.maps.LatLng(pool.Location.dlat,pool.Location.dlng), // Create LatLng object for destination
        travelMode: window.google.maps.TravelMode.DRIVING,
        provideRouteAlternatives:true,
      },
      (result, status) => {
        console.log("Direction Status:", status);
        if (status === window.google.maps.DirectionsStatus.OK) {
          console.log("Direction Result:", result);
          // DirectionsRenderer.setDirections(result);
          setDirectionpoint(result);
        } else {
          console.error('Error:', status);
        }
      }
    );
  }
  }
  
  useEffect(() => {
    if (pool.Location.source || pool.Location.destination) {
      directionRoute();
    }
  }, [pool.Location.source , pool.Location.destination]);
  useEffect(() => {
    console.log("Direction point Result:", directionpoint);
  }, [directionpoint]);  
  
  useEffect(() => {
    if (map && directionpoint) {
      const directionsRenderer = new window.google.maps.DirectionsRenderer({ map });
      directionsRenderer.setDirections(directionpoint);
      directionsRenderer.setOptions({
        suppressMarkers: true, // Disable default route markers
        polylineOptions: {
          strokeColor: "#000000", // Set route color to blue
          strokeWeight: 4, // Adjust route line thickness
          strokeOpacity: 0.5, // Set route opacity
        },})
      
    }
  }, [map, directionpoint]);
  

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      {pool.Location.source != null ? (
        
        <MarkerF position={{ lat: pool.Location.slat, lng: pool.Location.slng }} >
          <OverlayViewF
            position={{ lat: pool.Location.slat, lng:  pool.Location.slng }}
            mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
          >
            
              <h style={{color:"red" ,background:"white",fontsize:"20px"}}> {pool.sourcename}</h>
          
          </OverlayViewF>
        </MarkerF>
       ): null}
       { pool.Location.destination != null ? (
        
        <MarkerF position={{ lat:  pool.Location.dlat, lng:  pool.Location.dlng }} >
          <OverlayViewF
            position={{ lat: pool.Location.dlat, lng: pool.Location.dlng }}
            mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
          >
              <h style={{color:"red" ,background:"white",fontsize:"20px"}}>{pool.destinationname}</h>
          </OverlayViewF>
        </MarkerF>
       ): null}
        
      <></>
    </GoogleMap>
  );
}

export default Poolmap