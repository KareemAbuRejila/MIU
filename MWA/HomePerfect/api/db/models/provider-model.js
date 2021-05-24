const mongoose=require('mongoose');
const addressModel=require('./address-model');

const addressSchema=new mongoose.Schema({
    city:String,
    street:String
})
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
    address:addressSchema
});




mongoose.model('Provider',providerSchema,"providers");