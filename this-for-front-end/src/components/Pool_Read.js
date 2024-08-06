import React, { useContext, useEffect, useState } from 'react'
import { DestinationContext } from './Context/DestinationContext';
import { SourceContext } from './Context/SourceContext';
import { LoginContext } from './Context/LoginContext';
import { useNavigate } from 'react-router-dom';
import { PoolContext } from './Context/PoolContext';
const Pool_Read = () => {
  const direct=useNavigate();
  const getdata="http://localhost:5000/pool/Pool_Read";
  const putdata="http://localhost:5000/pool/Pool_Read";
  const initializselect=()=>{
      
    const value =localStorage.getItem('selected');
    return value?JSON.parse(value):1;

};
  const[currentdata,setCurrentData]=useState({});
  const[select,setSelect]=useState({});
  const[Rent,setRent]=useState(0);
  const[ID,setID]=useState(0);
  const[oldRent,setOldRent]=useState({});
  const[selected,setSlected]=useState(initializselect);
  const[Seats,setSeats]=useState(0);
 const{destination}=useContext(DestinationContext);
 const{source}=useContext(SourceContext);
 const{login}=useContext(LoginContext);
 const{updatePool}=useContext(PoolContext);
useEffect(()=>{
  console.log("view pool destination",destination);
 
},[destination])

useEffect(()=>{
  console.log("view pool source",source);
 
},[source])
const updatedata= async (e)=> {
           
  // const user=localStorage.getItem('login');
    // Make an API request to post form data
    // const response = await Axios.post(posts_data, newRecord);
    try{
    const response = await fetch(putdata,{
      method:'PUt',
      body:JSON.stringify({Seats,Rent,ID}),
      headers:{
        'Content-Type':'application/json'
      }
    });
    const select= await response.json();

    if(select){
      
      setSelect(select);
      
      // localStorage.setItem("poolread",JSON.stringify(data))
      console.log("select in pool_read",select);
     
      console.log("message",select.message);
    
      
    //  if(data.message==="success fully find profile"){
    //   setLoading(true);
    //  }else{
    //   setLoading(false);
    //  }
    }

    if (response.status === 200) {
      console.log('in fornt Data submitted successfully:',response.status ) //response);
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
  if(Seats>=0&&Rent>0&&selected!==1){
    updatedata();
    localStorage.setItem("selected",selected);
    geteachdata();
  }
  // console.log("seats after selection",Seats);
  // console.log("oldrent after selection",oldRent);
  // console.log("selected after selection",selected);
  // console.log("rent after selection",Rent);
},[Rent,Seats,oldRent,selected])
const hnoofselect= ()=>{

 if(currentdata.code==3000){
 if(login.code===1000&&login.type=="Passenger"){
    console.log("rent ",oldRent);
    if(Seats>0){
    
      setSlected(selected+1);
      setSeats(Seats-1)
      setRent(oldRent/selected)
    }else if(Seats==0){
      localStorage.removeItem('selected');
      // console.log("seats are not availbale");
      setSelect({message:"seats are not availbale"})
    }
  }
  else if(login.code!==1000||login.type!=="Passenger"){
    setSelect({message:"you must be login or signup ass Passenger first"});

  }
 
 }
};
useEffect(()=>{
  if(login.code===1000&&select.code===9000){
    
    setTimeout(()=>{
      
      direct("/PoolView");
    },2000)
        
    }

},[select])
  const geteachdata= async (e)=> {
           
    // const user=localStorage.getItem('login');
      // Make an API request to post form data
      // const response = await Axios.post(posts_data, newRecord);
      try{
      const response = await fetch(getdata,{
        method:'POST',
        body:JSON.stringify({source,destination,ID}),
        headers:{
          'Content-Type':'application/json'
        }
      });
      const data= await response.json();
 
      if(data){
        
        setCurrentData(data);
        updatePool(data)
        
        // console.log("data in pool_read",data);
        // console.log("current pool_read",currentdata);
        // console.log(" data.data pool_read",data.data);
        localStorage.setItem("pool",JSON.stringify(data))
        // console.log("data in pool_read",data);
        // console.log("current pool_read",currentdata);
        // console.log("data.location mean pool in read",data.Location.Seats);
        setSeats(data.Location.Seats);
        // console.log("seats in pool_read",Seats);
        setOldRent(data.Location.Rent);
        setID(data.Location.ID);
        // console.log("oldrent in pool_read",oldRent);
        // console.log("ID in pool_read",ID);
      //  if(data.message==="success fully find profile"){
      //   setLoading(true);
      //  }else{
      //   setLoading(false);
      //  }
      }
  
      if (response.status === 200) {
        console.log('in fornt Data submitted successfully:',response.status ) //response);
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
  // console.log("view pool");
 geteachdata();
},[destination||source])
  return <>
   
 
{
    
    Object.values(currentdata).map((item)=>{
      const{Name,Model,transmission,Seats,Rent,updatedRent,Date,Time,destination,source,destinationname,sourcename}=item;
      if(Name){

       return(<>
        <div class="text"> {  currentdata.message}</div>
         <div >

               <div >
                   
                           <div className="pool-data" style={{color:"black"}}>

                             
                               <h30>Drop off Location: {destinationname}  </h30>
                               <h30>Pickup Location: {sourcename} </h30>
                               <h30>Rent: {updatedRent}</h30>
                               <h30>Seats: {Seats}</h30>
                               <h30>Date: {Date}</h30>
                               <h30>Time: {Time}</h30>
                               <h30> {select.message}</h30>
                           </div>       
                   </div>
                   <button className='Edit' onClick={hnoofselect} > Select</button>
         </div>
     
   </>
   )

      }
      
  })
 

     
}    
  
  </>
}

export default Pool_Read
