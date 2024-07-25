import React,{useState} from 'react'

import {DestinationContext} from './DestinationContext';
import {SourceContext} from './SourceContext';
import { LoginContext } from './LoginContext';
<<<<<<< HEAD

=======
import { PoolContext } from './PoolContext';
import { SearchContext } from './SearchContext';
>>>>>>> ec4ba55 (first commit)
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
<<<<<<< HEAD

 

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
    
=======
const initializspool=()=>{
  const value=localStorage.getItem('pool');
 return value?JSON.parse(value):{};
 

};

    const [source, setSource]=useState(initializsource);
    const [destination, setDestination]=useState(initializsdestination);
    const [search, setSearch]=useState({destination:{},source:{}});
    
    const [login, setLogin]=useState(initializslogin);
    const [pool, setPool]=useState(initializspool);
    const updateLogin = (newValue) => {
      setLogin(newValue);
    };
    // const updatesearch = (newValue) => {
    //   setSearch(newValue);
    // };
    const updatePool = (newValue, type) => {
      setPool(prevPool => {
        if (type === "Pdestination") {
          return {
            ...prevPool,
            destination: newValue
          };
        } else if (type === "Psource") {
          return {
            ...prevPool,
            source: newValue
          };
        }
        return prevPool;
      });
    };
    const updatesearch = (newValue, type) => {
      setSearch(prevPool => {
        if (type === "Pdestination") {
          return {
            ...prevPool,
            destination: newValue
          };
        } else if (type === "Psource") {
          return {
            ...prevPool,
            source: newValue
          };
        }
        return prevPool;
      });
    };
   
  
  return (
    <PoolContext.Provider value={{pool,updatePool}}>
      <SearchContext.Provider value={{search,updatesearch}}>
        <LoginContext.Provider value={{login,updateLogin}}>
                            <DestinationContext.Provider value={{destination, setDestination}}>
                                    <SourceContext.Provider value={{source, setSource}}>
                                          {children}       
                                    </SourceContext.Provider >
                            </DestinationContext.Provider > 
          </LoginContext.Provider>
        </SearchContext.Provider>
      </PoolContext.Provider>
>>>>>>> ec4ba55 (first commit)
  )
}

export default ContextProvider

<<<<<<< HEAD



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
=======
>>>>>>> ec4ba55 (first commit)
