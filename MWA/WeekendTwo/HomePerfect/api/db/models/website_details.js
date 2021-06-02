const mongoose=require('mongoose');


const aboutSchema=new mongoose.Schema({
    lang:{
        type:String,
        required:true
    },
    about:{
        type:String,
        required:true
    }
});


mongoose.model('About',aboutSchema,'website_details');