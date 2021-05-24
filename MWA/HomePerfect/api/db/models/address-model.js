const mongoose=require('mongoose');


const addressSchema=new mongoose.Schema({
    city:String,
    street:String
})

module.exports=addressSchema;