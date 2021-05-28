const mongoose=require('mongoose');

const usersSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    name:{
        type:String
    },
    password:{
        type:String,
        required:true
    }
});

mongoose.model('User',usersSchema,'users')//Compile to model