'use server'
const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const cors = require('cors')
const usercontrol = require('./control/usercontrol')
const  createpoolcontrol  = require('./control/createpoolcontrol');
<<<<<<< HEAD
=======
const  userview  = require('./view/userview');
const poolview= require('./view/poolview')
>>>>>>> ec4ba55 (first commit)
const port = process.env.PORT || 5000; 
const app = express()


app.use(cors(

<<<<<<< HEAD
  {
    origin:[""],
    methods:["POST","GET"],
    credential:true
  }
))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
mongoose.connect('mongodb://localhost:27017/Car_pooling', {
=======
  // {
  //   origin:[""],
  //   methods:["POST","GET"],
  //   credential:true
  // }
))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
mongoose.connect("mongodb+srv://muneerzohaib698zz123:zohaib123@carpooling.nurhdzs.mongodb.net/?retryWrites=true&w=majority&appName=Carpooling", {
>>>>>>> ec4ba55 (first commit)

  useUnifiedTopology: true, // Keep this option
})
.then(() => {
  console.log('DB Connected.');
  // Your other code (routes, models, etc.) can go here
})
.catch((err) => {
  console.error('DB Connection Error:', err);
});


<<<<<<< HEAD

  

//   const userSchema = new mongoose.Schema({
//     username: String,
//     email: String,
//     phone: String,
//     password: String
// });

// const User = mongoose.model('User', userSchema);

// app.post('/user', cors(), async(req, res) => {

//   let user=new User();
//   user.username= req.body.username;
//   user.email=req.body.email;
//   user.phone=req.body.phone;
//   user.password=req.body.password;
//   const doc  =await user.save();
//   // console.log("doc",doc);
//      res.json(doc);
//   });
//   app.get('/user',async (req,res)=>{
//     const docs = await User.find({});
//     res.json(docs)
// })
app.post('/user/signup', usercontrol.adduser);
app.post('/user/login', usercontrol.loginuser);
=======
app.post('/user/signup', usercontrol.adduser);
app.post('/user/login', usercontrol.loginuser);
<<<<<<< HEAD
app.post('/user/View', userview.getuser);
=======
>>>>>>> ec4ba55 (first commit)
app.get('/user/get', usercontrol.getuser);
app.get('/', (re,res)=>{
  res.json("gamer");
});
<<<<<<< HEAD
app.post('/pool/Pool_c', createpoolcontrol.createpool);
=======
>>>>>>> 8c6dc27bc8dd738c29ec36e1334a2611c7aea688
app.post('/pool/Pool_c', createpoolcontrol.createpool);
app.post('/pool/Pool_Read', poolview.viewpool);
>>>>>>> ec4ba55 (first commit)

app.listen(port, () => { 
  console.log(`Backend Running At Port ${port}`)
})  
