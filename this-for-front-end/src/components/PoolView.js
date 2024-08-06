import React, { useContext, useEffect } from 'react'
import Poolmap from './Poolmap';
import carpic from'./design/images/HD-wallpaper-suzuki-swift-2017-glx-turbo-new-red-swift-h_002.jpg'
import { PoolContext } from './Context/PoolContext';
const PoolView = () => {
 const{pool,updatePool}=useContext(PoolContext);
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
                                
                                  <button className='Edit'  > Cancel</button>
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
