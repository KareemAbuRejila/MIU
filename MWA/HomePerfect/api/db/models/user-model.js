const mongoose=require('mongoose');

const userSchema=new mongoose.Schema({
    bod:String,
    email:String,
    gender:String,
    personalImageUrl:String,
    phone:String,
    requests:[String],
    wishList:[String]
})

mongoose.model('User',userSchema,'users');