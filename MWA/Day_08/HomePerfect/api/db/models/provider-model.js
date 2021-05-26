const mongoose=require('mongoose');
const addressModel=require('./address-model');


const providerSchema=new mongoose.Schema({
    userName:String,
    serviceId:String,
    serviceType:String,
    likes:Number,
    age:Number,
    dob:Number,
    personalImageUrl:String,
    requests:[String],
    email:String,
    address:addressModel
});




mongoose.model('Provider',providerSchema,"providers");