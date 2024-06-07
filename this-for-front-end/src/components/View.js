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
            geteachdata();
        },[]);
    return <>


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
      
    </>
   
};
  
export default View;