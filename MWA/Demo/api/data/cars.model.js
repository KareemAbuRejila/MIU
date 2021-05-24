const mongoose=require('mongoose');

const ownerSchema=new mongoose.Schema({
    name:String,
    state:String
})
const CarSchema=new mongoose.Schema({
    name:String,
    model:String,
    year:Number,
    owners:[ownerSchema]
})

mongoose.model("Car",CarSchema,"cars");