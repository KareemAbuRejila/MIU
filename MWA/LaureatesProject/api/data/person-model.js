const mongoose=require('mongoose');

const personSchema=new mongoose.Schema({
    id:String,
    firstname:String,
    surmname:String,
    born:{
        type:Date,
        default:Date.now
    },
    bornCountry:String,
    bornCity:String,
    year:Number,
    category:String,
    gender:String,
    affiliation:String
})

mongoose.model('person',personSchema,'laureates');