const mongoose=require('mongoose');

const ratingSchema=new mongoose.Schema({
   owner:String,
   stars:{
       type:Number,
       min:0,
       max:5
   },
   review:String,
   date:{
       type:Date,
       default:Date.now
   }
});

module.exports=ratingSchema;