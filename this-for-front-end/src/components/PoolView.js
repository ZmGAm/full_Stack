import React, { useContext, useEffect, useState } from 'react'
import Poolmap from './Poolmap';
import carpic from'./design/images/HD-wallpaper-suzuki-swift-2017-glx-turbo-new-red-swift-h_002.jpg'
import { PoolContext } from './Context/PoolContext';
import { LoginContext } from './Context/LoginContext';
import { useNavigate } from 'react-router-dom';
const PoolView = () => {
  const direct=useNavigate();
  const putdata="http://localhost:5000/pool/Pool_Read";
  const initializselect=()=>{
      
    const value =localStorage.getItem('selected');
    return value?JSON.parse(value):1;

};
 const{pool,updatePool}=useContext(PoolContext);
 const[select,setSelect]=useState({});
 const[Seats,setSeats]=useState(pool.Location.Seats);
const[Rent,setRent]=useState(0);
const[oldRent,setOldRent]=useState(pool.Location.Rent);
const[selected,setSlected]=useState(initializselect);
const{login}=useContext(LoginContext);
const[ID,setID]=useState(pool.Location.ID);

 const hnoofselect= ()=>{

  if(pool.code==3000){
  if(login.code===1000&&login.type=="Passenger"){
     console.log("rent ",oldRent);
     if(selected>0){
     
       setSlected(selected-1);
       setSeats(+Seats+1)
      
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
      
      direct("/");
    },2000)
        
    }

},[select])
 const updatedata= async (e)=> {
           
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
  if(selected>=0&&Rent>0&&Seats!==0){
    updatedata();
    localStorage.setItem("selected",selected);
   
  }
  console.log("seats after cancel",Seats);
  console.log("oldrent after cancel",oldRent);
  console.log("selected after cancel",selected);
  console.log("rent after cancel",Rent);
},[Rent,Seats,oldRent,selected])
 useEffect(()=>{
  console.log(" pool context ",pool);
 
},[PoolContext])
  
  return <>
  <div className='upper'>
  <div style={{width:"35vw" ,height:"86vh"}} className="div-for-cars1">

{
  Object.values(pool).map((item)=>{
      const{Name,Model,transmission,Seats,Rent,updatedRent,Date,Time,destination,source,destinationname,sourcename}=item;
      if(Name){

       return(<>
        
         <div >

              
                   
                           <div className="poolview" style={{color:"black"}}>
                                <img src={carpic} alt="loading" style={{width:"100%"}}/>
                                  <h24>Pickup Location Name: {sourcename}</h24>
                                  <h24>Pickup Location adress: {source}</h24>
                                  <h24>Drop off Location Name: {destinationname}</h24>
                                  <h24>Drop off Location adress: {destination}</h24>
                                  <h24>Pool Creator Name: {Name}</h24>
                                  <h24>Rent: {updatedRent}</h24>
                                  <h24>Model: {Model}</h24>
                                  <h24>Time: {Time}</h24>
                                  <h24>Date: {Date}</h24>
                                  <h24>Seats: {Seats}</h24>
                                  <button className='Edit' onClick={hnoofselect} > Cancel</button>
                                  
                           </div> 
                  
                  
         </div>
     
   </>
   )

      }
      
  })
}
     
  </div>
  <div className='naqsha' style={{width:'100vw',height:'100%', border:"3px solid blue"}}  >
                                                    
                                                     
                                                    <Poolmap/>

                                                  
                                          </div>
 </div>
  </>
}

export default PoolView
