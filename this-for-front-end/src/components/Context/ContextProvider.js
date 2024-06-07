import React,{useState} from 'react'

import {DestinationContext} from './DestinationContext';
import {SourceContext} from './SourceContext';
import { LoginContext } from './LoginContext';

const ContextProvider= ({children})=> {
  const initializsource=()=>{
      
    const value =localStorage.getItem('source');
    return value?JSON.parse(value):null;

};
const initializsdestination=()=>{
      
  const value =localStorage.getItem('destination');
  return value?value:null;

};

const initializslogin=()=>{
   const user=localStorage.getItem('login');
  return user?JSON.parse(user):{};
  

};

 

    const [source, setSource]=useState(initializsource);
    const [destination, setDestination]=useState(initializsdestination);
    
    const [login, setLogin]=useState(initializslogin);
    const updateLogin = (newValue) => {
      setLogin(newValue);
    };
   
  
  return (
    <LoginContext.Provider value={{login,updateLogin}}>
                        <DestinationContext.Provider value={{destination, setDestination}}>
                                <SourceContext.Provider value={{source, setSource}}>
                                      {children}       
                                </SourceContext.Provider >
                        </DestinationContext.Provider > 
      </LoginContext.Provider>
    
  )
}

export default ContextProvider




// import React, { createContext,useState } from 'react'

// export const DestinationContext= createContext(null);
// export const SourceContext= createContext(null);
// function Context() {
//     const [source, setSource]=useState("context source");
//     const [destination, setDestination]=useState("context destination");
//   return (
//    <DestinationContext.Provider value={{destination, setDestination}}>
//         <SourceContext.Provider value={{destination, setDestination}}>

            
//         </SourceContext.Provider >

//    </DestinationContext.Provider >
//   )
// }

// export default Context
