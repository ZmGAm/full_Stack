"use Client"
import React from 'react';
<<<<<<< HEAD
import { useState ,useEffect } from 'react';
import { Source } from 'react-map-gl';
// import "./../node_modules/bootstrap/dist/css/bootstrap.min.css"
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './design/signup.css';
import  Locationsearch  from "./Locationsearch";

// import Axios  from 'axios';
// import { imageDb } from './config';
const Pool_c = () => {

  const preset_key="cars-pics";
  const [error,setError]=useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const id = Math.random().toString(36).substring(2);
=======
import { useState ,useEffect,useContext } from 'react';
import  Locationsearch  from "./Locationsearch";
import { PoolContext } from './Context/PoolContext';
import { LoginContext } from './Context/LoginContext';
import { SearchContext } from './Context/SearchContext';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import GoogleMapNew from './GoogleMapNew';
const Pool_c = () => {
  const posts_data="http://localhost:5000/pool/Pool_c";
  
  const [error,setError]=useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const{pool,updatePool}= useContext(PoolContext);
  const{login,updateLogin}= useContext(LoginContext);
  const{search}= useContext(SearchContext);
  // const ID = Math.random().toString(36).substring(2);
  const[searchsource,setSearchSource]=useState(null );
  const[searchdestination,setSearchDestination]=useState(null );
>>>>>>> ec4ba55 (first commit)
  // const [image, setImage] = useState();
  // const [filen, setFilen] = useState();
  const [exit, setExit] = useState('');
    const [userRegistration,setUserRegistration]=useState({
<<<<<<< HEAD
        destination:"",
        source:"",
=======
        destination:{},
        source:{},
>>>>>>> ec4ba55 (first commit)
        Name:"",
        seats:"",
        transmission:"",
        rent:"",
        time:"",
<<<<<<< HEAD
        id:"",
        date:""
     
    });
 
    const posts_data="http://localhost:5000/pool/Pool_c";

    const inputvalid= (e)=>{
        const name=e.target.name;
        const value=e.target.value;
        // const file=e.target.files[0];
        console.log(name,value);

        // setUserRegistration({...userRegistration,[name]:value});
        if (userRegistration) {
          setUserRegistration({ ...userRegistration, [name]: value });
=======
        ID:"",
        date:""
     
    });

   
// useEffect(()=>{

// console.log("SEARCH IN POOL",search)

// })
    useEffect(()=>{
    //  setDestin(pool.destination)
    console.log("pool in pc",pool);
    // console.log("destination in pc",userRegistration.destination);
    // console.log("source in pc",userRegistration.source);
    console.log("user registration",userRegistration);
    },[pool]);
    // useEffect(()=>{
    //   setSource(pool.source)
    //   setDestin(pool.destination)
    // console.log("destin",destin,"source",source);
    // },[pool]);
    const inputvalid= (e)=>{
      const name=e.target.name;
      const value=e.target.value;
      // const file=e.target.files[0];
      // console.log(name,value);
      
      // setUserRegistration({...userRegistration,[name]:value});
      if (userRegistration) {
        
       
          // setUserRegistration({ ...userRegistration,destination:pool.destination,source:pool.source, [name]: value });
          setUserRegistration({ ...userRegistration,[name]: value });
>>>>>>> ec4ba55 (first commit)
          // setFilen(file);
        } else {
          console.error("userRegistration is null"); // Handle the case where userRegistration is not yet initialized
        }
      
    }

<<<<<<< HEAD
       
=======
   
    useEffect(() => {
      console.log("search source value in develop" ,searchsource);
      // console.log("search destination value in develop" ,searchdestination);
    }, [searchsource]);
    useEffect(() => {
      console.log("search destination in develop" ,searchdestination);
      // console.log("search destination value in develop" ,searchdestination);
    }, [searchdestination]);
    const GetCoordinate = (place,type) => {
      console.log("place",place);
      if(!place||!place.value||!place.value.place_id){ 
        // setPlace("location is empty")
        console.log("place is empty IN get coordinate")
        return}else{
      const placeId = place.value.place_id;
      const services=new window.google.maps.places.PlacesService(

        document.createElement("div"),
      )

      
      services.getDetails({ placeId }, (place, status) => {
        if (status === "OK" && place.geometry && place.geometry.location) {
          if(type==="destination"){
            setUserRegistration({ ...userRegistration,destination:{
              lat: place.geometry.location.lat(),
              lng: place.geometry.location.lng(),
              adress: place.formatted_address,
              name: place.name,
              } });

          }
          if(type==="source"){
            setUserRegistration({ ...userRegistration,source:{
              lat: place.geometry.location.lat(),
              lng: place.geometry.location.lng(),
              adress: place.formatted_address,
              name: place.name,
              } });

          }
               
        }
      });
    }
  };
>>>>>>> ec4ba55 (first commit)
      const submmit = async (e) => {
        e.preventDefault();
        
        // Validate user input (assuming you have a validate function)
        setError(validate(userRegistration));
        setIsSubmit(true);
        
      };
      const insertdata= async (e)=>{
        
<<<<<<< HEAD
        const newRecord = { ...userRegistration, date: new Date().toLocaleString(),id:id };
=======
        const newRecord = { ...userRegistration, date: new Date().toLocaleString(),ID:login.ID };
>>>>>>> ec4ba55 (first commit)
        try {
          // Make an API request to post form data
          // const response = await Axios.post(posts_data, newRecord);
          const response = await fetch(posts_data,{
            method:'POST',
            body:JSON.stringify(newRecord),
            headers:{
              'Content-Type':'application/json'
            }
          });
          const data= await response.json();
          setExit(data);
          console.log("response ",data);
      
          if (response.status === 200) {
            console.log('Data submitted successfully:', response);
            // Handle success (e.g., show a success message)
          } else {
            console.error('API request failed:', response.status);
            // Handle error (e.g., show an error message)
          }
        } catch (error) {
          console.error('Error during API request:', error);
          // Handle error (e.g., show an error message)
        }
      }
      useEffect(()=>{

        console.log("error",error);
        if(Object.keys(error).length===0 && isSubmit){
          console.log("user",userRegistration);
          insertdata();
        }
      },[error]);
      
      const validate = (values) => {
          const errors = {};
          const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
          const no = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g;
<<<<<<< HEAD
          if (!values.destination) {
            errors.destination = "destination is required!";
          }
          if (!values.source) {
            errors.source = "source is required!";
          } 
=======
          if (!searchsource) {
            errors.source = "source is required!";
          }
          if (!searchdestination) {
            errors.destination = "destination is required!";
          }
>>>>>>> ec4ba55 (first commit)
          if (!values.rent) {
            errors.rent = "rent is required!";
          }
          if (!values.seats) {
            errors.seats = "seats is required!";
          } else if (!no.test(values.seats)) {
            errors.seats = "seats is not valid format ";
          }
         
          if (!values.Name) {
            errors.Name = "Name  is required";
          }
          if (!values.Model) {
            errors.Model = "Model is required";
          }
          if (!values.transmission) {
            errors.transmission = "transmission is required";
          }
          if (!values.time) {
            errors.time = "time is required";
          }
          return errors;
        };

        // style={{  width: "500px",
        // margin: "auto",marginTop:"100px"}}
    return <> 
    <div className="Container" 
  style={{  display:"flex",alignItems: "center",justifyContent:"center", width: "100hv",
  height: "900PX"}} >
    <div className="farm"> 
        <form className="form"action="" onSubmit={submmit}  > 
                <div className="form-group">
                        <label htmlFor="source" className="form-label">destination</label>
                       <div className='desti'>
<<<<<<< HEAD

                        <Locationsearch type='destination'/>
                       </div>
                        <p1 className="formerrors">{error.destination}</p1>
=======
                       <GooglePlacesAutocomplete
                          selectProps={
                              {
                              value:searchdestination,
                              onChange:
                              (place) => {
                                // if(place){
                                  GetCoordinate(place,"destination");
                                  setSearchDestination(place);
                              
                              }
                          }
                        }
                          />  
                        <p1 className="formerrors">{error.destination}</p1>
                       </div>
>>>>>>> ec4ba55 (first commit)
                                                    

                </div>
                <div className="form-group">
                        <label htmlFor="source" className="form-label">source</label>
<<<<<<< HEAD
                        <input type="text"  value={userRegistration.source}
                        onChange={inputvalid}
                        autoComplete='off'name="source" id="source" />
                        <p1 className="formerrors">{error.source}</p1>
                        <Locationsearch type='Source'/>
=======
                       <div className='desti'>
                       <GooglePlacesAutocomplete
                            selectProps={
                              {
                              value: searchsource,
                              onChange:(place) => {
                                // if(place){
                                  GetCoordinate(place,"source");
                                  setSearchSource(place);
                              
                              }
                              
                              }
                            }
                            
                             />  

                        
                        <p1 className="formerrors">{error.source}</p1>
                       </div>
                                                    

>>>>>>> ec4ba55 (first commit)
                </div>
                <div className="form-group">
                        <label htmlFor="Name" className="form-label">Name</label>
                        <input type="text"  value={userRegistration.Name}
                        onChange={inputvalid}
                        autoComplete='off'name="Name" id="Name" />
                        <p1 className="formerrors">{error.Name}</p1>
                </div>
                <div className="form-group">
                        <label htmlFor="Model" className="form-label">Model</label>
                        <input type="text" value={userRegistration.Model}
                        onChange={inputvalid}
                         autoComplete='off'name="Model" id="Model" />
                        <p1 className="formerrors">{error.Model}</p1>
                </div>
                <div className="form-group">
                        <label htmlFor="seats" className="form-label">No of seats </label>
                        <input type="number" value={userRegistration.seats}
                        onChange={inputvalid}
                         autoComplete='off'name="seats" id="seats" />
                        <p1 className="formerrors">{error.seats}</p1>
                </div>
                <div className="form-group">
                        <label htmlFor="transmission" className="form-label">transmission</label>
                        <select name="transmission" value={userRegistration.transmission} onChange={inputvalid}>
                          <option>Please Select</option>
                          <option>auto</option>
                          <option>Maunal</option>
                         
                        </select>
                        <p1 className="formerrors">{error.transmission}</p1>
                </div>
                <div className="form-group">
                        <label htmlFor="rent" className="form-label">rent </label>
                        <input type="number" value={userRegistration.rent}
                        onChange={inputvalid}
                         autoComplete='off'name="rent" id="rent" />
                        <p1 className="formerrors">{error.rent}</p1>
                </div>
                <div className="form-group">
                        <label htmlFor="time" className="form-label">Time </label>
                        <input type="text" value={userRegistration.time}
                        onChange={inputvalid}
                         autoComplete='off'name="time" id="time" />
                        <p1 className="formerrors">{error.time}</p1>
                </div>
                {/* <div>
                        <label htmlFor="file">image</label>
                        <input type="file" value={userRegistration.Image}
                        onChange={inputvalid}
                         autoComplete='off'name="image" id="image" />
                        <p1 className="formerrors">{error.Image}</p1>
                </div> */}
<<<<<<< HEAD
              <p>user {exit.message}</p>
                <button class="btn btn-primary" >submmit</button>
            </form>
            </div> 
            <div>
=======
              <p> {exit.message}</p>
                <button class="btn btn-primary" >submmit</button>
            </form>
            </div>
            <div
             style={{display:'flex',margin:"0"}} 
              >
                                                    
                                                     
                                                          {/* <GoogleMapNew/> */}

                                                        

                                                </div> 
            <div className='map'> 
             
>>>>>>> ec4ba55 (first commit)
                {
                    
                    // data.map((curElem)=>{
                    //     const {id,username,email,phone,password}=curElem;
                    //     return( 
                            
                    //         <div>
                    //             <p>{username}</p>
                    //             <p>{email}</p>
                    //             <p>{phone}</p>
                    //             <p>{password}</p>
                    //         </div>
                    //     )
                    // })
                }
            </div>

   </div>
  
</>
      
};
  
export default Pool_c;