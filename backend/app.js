const express = require("express");
const cors = require('cors');
const Schema = require('./models/user_master_models.js');
//const nodemailer =require("nodemailer");
require('./databases/connection.js');
const app = express();
const port = process.env.PORT || 8080;
app.use(express.json());
app.use(cors());


// const transporter = nodemailer.createTransport({
//   service:"gmail",
//   auth:{
//     user:"seemakumari11845@gmail.com",
//     pass:"Seemakumari@1272000"
//   }
// })

app.post('/addshipment', async (req, resp) => {
  let addShipment = new Schema.addShipment_modal(req.body)
  let result = await addShipment.save();
  result = result.toObject();
  resp.send(result);
})

app.post('/register', async (req, res) => {
  let user = new Schema.user_model(req.body)
  let data = await user.save()
  data = data.toObject()
  res.send(data)
})
app.get('/shipments', async (req, resp) => {
  let result = await Schema.shipment_record.find();
  resp.send(result);

})



app.get('/search/:key', async (req, res) => {
  let result = await Schema.addShipment_modal.find({
    $or: [
      { TrackingNo: { $regex: req.params.key } },
      { Awb: { $regex: req.params.key } },
      { CurrentStatus: { $regex: req.params.key } }
    ]

  })
  res.send(result)
})

app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  let user = await Schema.user_model.findOne({ email: email }).select("-password")
  // console.log(user.password)
  if (user) {
    if (user.email == email) {
      res.send({
        message: 'login successful',
        status: 200
      });
      // res.redirect('/dashboard')
    } else {
      res.send({
        message: 'invalid email and password',
        status: 400
      });
    }
  } else {
    res.send({
      message: "Please register",
      status: 204
    })
  }
})



//send email link for reset password

app.post("/sendpasswordlink",async(req,res)=>{
  console.log(req.body)

  const{email}= req.body;

  if(!email){
    res.status(401).json({status:401,message:"Enter Your Email"})
  }
  try{
const user = await Schema.user_model.findOne({email:email});
console.log()
  }catch(error){

  }
})


app.listen(port, () => {
  console.log("Server is running on port " + port);
});