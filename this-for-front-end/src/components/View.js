<<<<<<< HEAD
import React,{useState,useEffect} from 'react';
// import { useFormik } from 'formik'; 
// import  Axios  from 'axios';

import "./design/pool.css";
import axios from 'axios';
// gamer
// const getdata="https://65db334b3ea883a152914d9b.mockapi.io/create-pools";
// const getdata="AIzaSyCsHhl2ACcwjgaeVOpFb6eFfbCB3qEGTLM";
const getdata="http://localhost:5000/user/get";
const View = () => {
   
    const[data,setData]=useState([])
    const geteachdata= async()=>{

        const result =await axios.get(getdata);
        setData(result.data.data);
        console.log("data",data);
    }

        useEffect(()=>{
=======
import React,{useState,useEffect, useContext} from 'react';

import picprofile from './design/images/driver.jpg';
import "./design/pool.css";
import { LoginContext } from './Context/LoginContext';
// import axios from 'axios';

// const getdata="AIzaSyCsHhl2ACcwjgaeVOpFb6eFfbCB3qEGTLM";
const getdata="http://localhost:5000/user/View";
const View = () => {
    
    const[currentdata,setCurrentData]=useState({})
    // const[loading,setLoading]=useState(false)
    const{login,updateLogin}=useContext(LoginContext)
    const geteachdata= async (e)=> {
           
      // const user=localStorage.getItem('login');
        // Make an API request to post form data
        // const response = await Axios.post(posts_data, newRecord);
        try{
        const response = await fetch(getdata,{
          method:'POST',
          body:JSON.stringify(login),
          headers:{
            'Content-Type':'application/json'
          }
        });
        const data= await response.json();
   
        if(data){
          
          setCurrentData(data);
          console.log("data in view",data);
          console.log("current data in view",currentdata);
          console.log(" data.data in view",data.data);
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
    // const geteachdata= async()=>{

    //     const result =await axios.get(getdata);
    //     setData(result.data.data);
    //     console.log("data",data);
    // }

        useEffect(()=>{
            console.log("login in view " ,localStorage.getItem('login'));
>>>>>>> ec4ba55 (first commit)
            geteachdata();
        },[]);
    return <>

<<<<<<< HEAD

    {
       Object.values(data).map((item)=>{
            const{id,username,password,phone,email}=item;
            return(<>

                    <div>

                    </div>
                    <div className="pool-data">

                        <h1>{id}</h1>
                        <h1>{username}</h1>
                        <h1>{email}</h1>
                        <h1>{password}</h1>
                        <h1>{phone}</h1>
                        <h1>{phone}</h1>
                        {/* <image src={image}/> */}
                        
                        {/* <h1>{image}</h1> */}
                    </div>
            </>
            )
        })
    }
        
        {/* <h1>{data.id}</h1>;
        <h1>{data.title}</h1>;
        <h1>{data.body}</h1>; */}
      
=======
{
    
       Object.values(currentdata).map((item)=>{
            const{ID,username,password,phone,email}=item;
            return(<>
                  <div className='topcontain'>

                        <div className='profile'>
                            <img src={picprofile} alt="loading" style={{width:"100%"}}/>
                                    <div className="pool-data" style={{color:"black"}}>

                                        <h30>ID: {ID}</h30>
                                        <h30>User Name: {username}</h30>
                                        <h30>Email: {email}</h30>
                                        <h30>Pass word: {password}</h30>
                                        <h30>Contact: {phone}</h30>
                                
                                    </div>
                                    
                                    <button className='Edit' > Edit</button>
                                    
                                    
                            </div>
                             
                  </div>
                            <p> {currentdata.message}</p>
              
            </>
            )
        })
    
  
        
}    
>>>>>>> ec4ba55 (first commit)
    </>
   
};
  
export default View;