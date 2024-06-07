"use Client"
import React from 'react';
import { useState ,useEffect } from 'react';
// import "./../node_modules/bootstrap/dist/css/bootstrap.min.css"
// import 'bootstrap/dist/css/bootstrap.min.css';
import './design/signup.css';


// import Axios  from 'axios';
// import { imageDb } from './config';
const Signup = () => {

  const preset_key="cars-pics";
  const [error,setError]=useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const id = Math.random().toString(36).substring(2);
  // const [image, setImage] = useState();
  // const [filen, setFilen] = useState();
  const [exit, setExit] = useState('');
    const [userRegistration,setUserRegistration]=useState({
        username:"",
        email:"",
        phone:"",
        password:"",
        dateofbirth:"",
        id:"",
        type:"",
        date:""
     
    });
    // const posts_data="https://65db334b3ea883a152914d9b.mockapi.io/create-pools";
    // const posts_data="https://car-pooling-761a7-default-rtdb.firebaseio.com/car-poolingfrom.json";
    // const posts_data="https://65db334b3ea883a152914d9b.mockapi.io/create-pools";
    // const posts_data="https://console.firebase.google.com/project/car-pooling-761a7/database/car-pooling-761a7-default-rtdb/data";
    // const posts_data="https://localhost:27017/car_pooling/user";
    const posts_data="http://localhost:5000/user/signup";
    const posts_pic="https://api.cloudinary.com/v1_1//dogabixdo/image/upload";
    
    // const [records,setRecords] =useState ([]); 
    const inputvalid= (e)=>{
        const name=e.target.name;
        const value=e.target.value;
        // const file=e.target.files[0];
        console.log(name,value);

        // setUserRegistration({...userRegistration,[name]:value});
        if (userRegistration) {
          setUserRegistration({ ...userRegistration, [name]: value });
          // setFilen(file);
        } else {
          console.error("userRegistration is null"); // Handle the case where userRegistration is not yet initialized
        }
        // setImage({...image,[name]:value});
        //  setFilen(file);
    }
    // const submmit =(e)=>{
    //     e.preventDefault();
    //     const newRecord={...userRegistration,id: new Date().getTime().toString()};
    //     // const picture={...image,id: new Date().getTime().toString()};
       
    //     // console.log(records);
    //     // setRecords({...records,newRecord});
    //     setError(validate(userRegistration))
        
    //     setIsSubmit(true);
    //     console.log(newRecord);
        
    //     // console.log(picture);
        
        
    //     // setUserRegistration({username:"",email:"",phone:"",password:""});
    //     // const dataArray = records.data || [];
    //     // const formData =new FormData();
    //     // formData.append('file',filen);
    //     // formData.append('upload_preset',preset_key);
    //     // Axios.post("https://car-pooling-761a7-default-rtdb.firebaseio.com/car-poolingfrom.json",newRecord)
    //     // .then(res=>setImage(res.data.secure_url))
    //     // .then(res=>console.log(res.data))
    //     // .catch(err=>console.log(err))
    //     try {
    //       // Make an API request to post form data
    //       const response =  Axios.post(posts_data,  newRecord);
          
    //       if (response.status === 201) {
    //         console.log('Data submitted successfully:', response.data);
    //         // Handle success (e.g., show a success message)
    //       } else {
    //         console.error('API request failed:', response.status);
    //         // Handle error (e.g., show an error message)
    //       }
    //     } catch (error) {
    //       console.error('Error during API request:', error);
    //       // Handle error (e.g., show an error message)
    //     }
    //   };
      
      // const postimage=async(picture)=>{
      //     const tasveer =new FormData();
      //     tasveer.append("file",image);
      //     tasveer.append("upload_preset","cars-pics");
      //     // tasveer.append("cloud_name","dogabixdo");
      //     const result =await Axios.post("https://api.cloudinary.com/v1_1//dogabixdo/image/upload",tasveer)
      //     .then(res=>console.log(res))
      //     .catch(err=>console.log(err));
      //     // console.log("use tasveer" ,result.tasveer);
      //     // console.log("use tasveer" ,result.tasveer);
        
      //     // setData(result.ima);


      //   }
      //   useEffect(()=>{
        
      //     postimage();

      //   },[]);
       
      const submmit = async (e) => {
        e.preventDefault();
        
        // Validate user input (assuming you have a validate function)
        setError(validate(userRegistration));
        setIsSubmit(true);
        
      };
      const insertdata= async (e)=>{
        
        const newRecord = { ...userRegistration, date: new Date().toLocaleString(),id:id };
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
          if (!values.username) {
            errors.username = "Username is required!";
          }
          if (!values.email) {
            errors.email = "Email is required!";
          } else if (!regex.test(values.email)) {
            errors.email = "This is not a valid email format!";
          }
          if (!values.phone) {
            errors.phone = "Phone is required!";
          } else if (!no.test(values.phone)) {
            errors.phone = "Phone Number is not valid";
          }
          if (!values.password) {
            errors.password = "Password is required";
          } else if (values.password.length < 4) {
            errors.password = "Password must be more than 4 characters";
          } else if (values.password.length > 10) {
            errors.password = "Password cannot exceed more than 10 characters";
          }
          if (!values.dateofbirth) {
            errors.dateofbirth = "Date of birth is required";
          }
          if (!values.type) {
            errors.type = "type is required";
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
                        <label htmlFor="username" className="form-label">Fullname</label>
                        <input type="username" value={userRegistration.username}
                        onChange={inputvalid}
                        autoComplete='off' name="username" id="username" />
                        <p1 className="formerrors">{error.username}</p1>
                </div>
                <div className="form-group">
                        <label htmlFor="email" className="form-label">email</label>
                        <input type="email"  value={userRegistration.email}
                        onChange={inputvalid}
                        autoComplete='off'name="email" id="email" />
                        <p1 className="formerrors">{error.email}</p1>
                </div>
                <div className="form-group">
                        <label htmlFor="phone" className="form-label">Phone</label>
                        <input type="phone"  value={userRegistration.phone}
                        onChange={inputvalid}
                        autoComplete='off'name="phone" id="phone" />
                        <p1 className="formerrors">{error.phone}</p1>
                </div>
                <div className="form-group">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" value={userRegistration.password}
                        onChange={inputvalid}
                         autoComplete='off'name="password" id="password" />
                        <p1 className="formerrors">{error.password}</p1>
                </div>
                <div className="form-group">
                        <label htmlFor="dateofbirth" className="form-label">dateofbirth</label>
                        <input type="date" value={userRegistration.dateofbirth}
                        onChange={inputvalid}
                         autoComplete='off'name="dateofbirth" id="dateofbirth" />
                        <p1 className="formerrors">{error.dateofbirth}</p1>
                </div>
                <div className="form-group">
                        <label htmlFor="type" className="form-label">type</label>
                        <select name="type" value={userRegistration.type} onChange={inputvalid}>
                          <option>Please Select</option>
                          <option>Driver</option>
                          <option>Passenger</option>
                          <option>Owner</option>
                        </select>
                        <p1 className="formerrors">{error.type}</p1>
                </div>
                {/* <div>
                        <label htmlFor="file">image</label>
                        <input type="file" value={userRegistration.Image}
                        onChange={inputvalid}
                         autoComplete='off'name="image" id="image" />
                        <p1 className="formerrors">{error.Image}</p1>
                </div> */}
              <p>user {exit.message}</p>
                <button class="btn btn-primary" >submmit</button>
            </form>
            </div> 
            <div>
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
  
export default Signup;