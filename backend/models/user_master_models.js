const mongoose = require('mongoose');

const user_schema = new mongoose.Schema({
    name:{
        type:String
    },
  password:{
        type:Number
    },

    email:{
        type:String,
        required:true
    },
    phone:{
        type:Number
    },
    country:{
        type:String
    },
    address:{
        type:String
    },
    gender:{
        type:String
    }
});
const shipment_schema = new mongoose.Schema({})
const addShipment_schema = new mongoose.Schema({
    awb : String,
    name : String,
    email : String,
    orderId : String,
    stype : String,
    couriers : String,
    mobile : Number,
    country : String,
    companyname : String,
    currentDate : String
})

const addShipment_modal= mongoose.model('addShipments',addShipment_schema);
const user_model = mongoose.model('user_datas',user_schema);

const shipment_record = mongoose.model('shipment_records',shipment_schema);

module.exports = {addShipment_modal, user_model,shipment_record,user_model}
