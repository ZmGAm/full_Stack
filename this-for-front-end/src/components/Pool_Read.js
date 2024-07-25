import React, { useContext, useEffect, useState } from 'react'
import { DestinationContext } from './Context/DestinationContext';
import { SourceContext } from './Context/SourceContext';
const Pool_Read = () => {
  const[currentdata,setCurrentData]=useState({});
const{destination}=useContext(DestinationContext);
const{source}=useContext(SourceContext);
useEffect(()=>{
  console.log("view pool destination",destination);
 
},[destination])
useEffect(()=>{
  console.log("view pool source",source);
 
},[source])
const getdata="http://localhost:5000/pool/Pool_Read";
  const geteachdata= async (e)=> {
           
    // const user=localStorage.getItem('login');
      // Make an API request to post form data
      // const response = await Axios.post(posts_data, newRecord);
      try{
      const response = await fetch(getdata,{
        method:'POST',
        body:JSON.stringify(source),
        headers:{
          'Content-Type':'application/json'
        }
      });
      const data= await response.json();
 
      if(data){
        
        setCurrentData(data);
        console.log("data in pool_read",data);
        console.log("current pool_read",currentdata);
        console.log(" data.data pool_read",data.data);
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
  console.log("view pool");
 geteachdata();
},[])
  return <>
   
  <div style={{ border: "3px solid red",display:"flex",width:"20%",height:"20%"}}>
     <h2 style={{color:"black"}}> nw gamer pool</h2>
     <h2 style={{color:"black"}}> new gamer pool</h2>
     <h2 style={{color:"black"}}> new gamer pool</h2>
     <h2 style={{color:"black"}}> new gamer pool</h2>
   </div>
 
{
    
    Object.values(currentdata).map((item)=>{
         const{destination,source}=item;
         return(<>
               <div >

                     <div >
                         
                                 <div className="pool-data" style={{color:"black"}}>

                                     <h30>source: {source}</h30>
                                     <h30>destinaion: {destination}</h30>
                                 </div>
                                 
                               
                                 
                                 
                         </div>
                          
               </div>
                         <p> find {currentdata.message}</p>
           
         </>
         )
     })
 

     
}    
  
  </>
}

export default Pool_Read

// (
//   <div style={{ border: "3px solid red",display:"flex",width:"20%",height:"20%"}}>
//     <h2 style={{color:"black"}}> new gamer pool</h2>
//     <h2 style={{color:"black"}}> new gamer pool</h2>
//     <h2 style={{color:"black"}}> new gamer pool</h2>
//     <h2 style={{color:"black"}}> new gamer pool</h2>
//   </div>
// )