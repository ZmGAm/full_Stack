/* global google */
import React, { useContext, useEffect, useState } from "react";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
<<<<<<< HEAD
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
=======
import { DestinationContext } from "./Context/DestinationContext";
import { SourceContext } from "./Context/SourceContext";
import { PoolContext } from "./Context/PoolContext";
import { SearchContext } from "./Context/SearchContext";
function Locationsearch({ type }) {
  const [searchValue, setSearchValue] = useState(null);
  const [placeholder, setPlaceholder] = useState(null);
  const [Place, setPlace] = useState(null);
  const { destination, setDestination } = useContext(DestinationContext);
  const { source, setSource } = useContext(SourceContext);
  const { pool, updatePool } = useContext(PoolContext);
  const { search, updatesearch } = useContext(SearchContext);
 
  useEffect(() => {
   
    if(type==="Source"){
      setPlaceholder("Pickup Location");
    }
    else if(type==="destination"){
      setPlaceholder("Dropoff Location");
    }
    if(type==="poolsource"){
      setPlaceholder("Pickup Location");
    }
    else if(type==="pooldestination"){
      setPlaceholder("Dropoff Location");
    }
  }, [type]);
 
  useEffect(() => {
    localStorage.setItem('source',JSON.stringify(source))
  }, [source]);

  useEffect(() => {
    localStorage.setItem('destination',JSON.stringify(destination))
  }, [destination]);
 useEffect(() => {
    localStorage.setItem('pool',JSON.stringify(pool))
  }, [pool]);
  useEffect(() => {
    console.log("runtime" ,searchValue);
  }, [searchValue]);
  // useEffect(() => {
  //   if(type==="poolsource"){
  //   if(!searchValue||!searchValue.value||!searchValue.place_id){
  //     // console.log(tp"search in location poolsource",searchValue); 
      
  //     updatesearch("pool source is null");
      
  //     // updatesearch(type==="poolsource"?"poolsource is null": "pooldestination is null");
  //   }
  //    console.log("search error ",search);
  // }
  // }, [searchValue,type]);
  // useEffect(() => {
  //   if(type==="pooldestination"){
  //   if(!searchValue||!searchValue.value||!searchValue.place_id){
  //     // console.log(tp"search in location poolsource",searchValue); 
     
  //     updatesearch("pool destination is null");
      
  //     // updatesearch(type==="poolsource"?"poolsource is null": "pooldestination is null");
  //   }
  //    console.log("search error ",search);
  // }
  // }, [searchValue,type]);

  const GetCoordinate = (place, type) => {
    console.log("place",place);
    if(!place||!place.value||!place.value.place_id){ 
      setPlace("location is empty")
      console.log("place is empty IN get coordinate")
      return}else{
    const placeId = place.value.place_id;
    const services = new google.maps.places.PlacesService(
      document.createElement("div"),
      
    );
    
    services.getDetails({ placeId }, (place, status) => {
      if (status === "OK" && place.geometry && place.geometry.location) {
       
          if (type === "Source") {
            setSource({
              lat: place.geometry.location.lat(),
              lng: place.geometry.location.lng(),
              adress: place.formatted_address,
              name: place.name,
              });

            
            } if(type==="destination"){
              setDestination({
                lat: place.geometry.location.lat(),
                lng: place.geometry.location.lng(),
                adress: place.formatted_address,
                name: place.name,
                });
              
            }

              // console.log("pool source in create pool",pool.source);
            // localStorage.setItem('pool',pool.source)
              
           
              // updatesearch({destination:{
              //   adress: place.formatted_address,
              // },source:{}})
              
            // localStorage.setItem('pool',pool.destination)
            // console.log("pool destin in create pool",pool.destination);
            
          // console.log("pool in create pool",pool);
        
>>>>>>> ec4ba55 (first commit)
        // console.log('source',source);
        // console.log('destination',destination.label);
      }
    });
<<<<<<< HEAD
  };
=======
  }
};
>>>>>>> ec4ba55 (first commit)
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
<<<<<<< HEAD
        selectProps={{
          value: searchValue,
          onChange: (place) => {
            GetCoordinate(place, type);
            setSearchValue(place);
=======
        selectProps={
          {
          value: searchValue,
          onChange: (place) => {
            // if(place){
              GetCoordinate(place, type);
              setSearchValue(place);
          //   }
          //  else{

          //     // <p>place is empty</p> 
              
          //     console.log("place is empty")
          //  }
           
>>>>>>> ec4ba55 (first commit)
          },
          placeholder: placeholder,
          components: {
            DropdownIndicator: false,
          },
<<<<<<< HEAD
        }}
      />
=======
        }
        
      }
        
      />
      
      {/* <p>{Place}</p> */}
>>>>>>> ec4ba55 (first commit)
    </div>
  );
}

export default Locationsearch;
