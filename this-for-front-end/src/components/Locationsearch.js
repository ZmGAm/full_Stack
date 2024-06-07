/* global google */
import React, { useContext, useEffect, useState } from "react";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
// import { SourceContext,DestinationContext } from './Context/Context';
// import { DestinationContext } from './Context/DestinationContext';
// import DestinationContext from './Context/DestinationContext';
// import SourceContext from './Context/SourceContext';
import { DestinationContext } from "./Context/DestinationContext";
import { SourceContext } from "./Context/SourceContext";
// import { json } from "react-router-dom";

function Locationsearch({ type }) {
  const [searchValue, setSearchValue] = useState(null);
  const [placeholder, setPlaceholder] = useState(null);
  const { destination, setDestination } = useContext(DestinationContext);
  const { source, setSource } = useContext(SourceContext);
  //  const PLACES_API='AIzaSyAoJwUr3rjwlC4FgP7eDnU6OpvQkzmCj-8'
  //  const PLACES_API=process.env.REACT_APP_GOOGLE_API_KEY
  //  const PLACES_API='AIzaSyDEgyE-5982wLBCt7ytRquNv_xI7-cZHA4'
  useEffect(() => {
    setPlaceholder(
      type === "Source" ? "Pickup Location " : "Dropoff Location "
    );
  }, [type]);
  useEffect(() => {
    localStorage.setItem('source',JSON.stringify(source))
  }, [source]);
  useEffect(() => {
    localStorage.setItem('destination',JSON.stringify(destination))
  }, [destination]);

  const GetCoordinate = (place, type) => {
    const placeId = place.value.place_id;
    const services = new google.maps.places.PlacesService(
      document.createElement("div")
    );
    services.getDetails({ placeId }, (place, status) => {
      if (status === "OK" && place.geometry && place.geometry.location) {
        if (type === "Source") {
          setSource({
            lat: place.geometry.location.lat(),
            lng: place.geometry.location.lng(),
            name: place.formatted_address,
            label: place.name,
          });
          
        } else {
          setDestination({
            lat: place.geometry.location.lat(),
            lng: place.geometry.location.lng(),
            name: place.formatted_address,
            label: place.name,
          });
          // localStorage.setItem('destination',destination)
        }
        // console.log('source',source);
        // console.log('destination',destination.label);
      }
    });
  };
  // console.log('lat',SourceContext);
  // useEffect(()=>{

  //   console.log('source',source);
  //   console.log('destination',destination);
  // },[source,destination])

  return (
    <div className="locationsearch">
      <GooglePlacesAutocomplete
        // apiKey:PLACES_API

        // apiKey={process.env.REACT_APP_NEXT_PUBLIC_GOOGLE_API_KEY}
        selectProps={{
          value: searchValue,
          onChange: (place) => {
            GetCoordinate(place, type);
            setSearchValue(place);
          },
          placeholder: placeholder,
          components: {
            DropdownIndicator: false,
          },
        }}
      />
    </div>
  );
}

export default Locationsearch;
