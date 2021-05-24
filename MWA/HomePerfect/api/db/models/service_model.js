const mongoose=require('mongoose');

const serviceSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    imageUrl:{
        type:String,
        required:true
    },
    providers:[String],
});

mongoose.model('Service',serviceSchema,"services");