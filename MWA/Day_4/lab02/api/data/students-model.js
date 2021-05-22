const mongoose=require('mongoose');

const addressSchema=new mongoose.Schema({

    country:{
        type:String,
        requied:true
    },
    city:{
        type:String,
        requied:true
    },
    Street:{
        type:String,
        requied:true
    },
    zipCode:{
        type:Number,
        requied:true
    }
})

const studentSchema=new mongoose.Schema({
    name:{
        type:String,
        requied:true
    },
    gpa:{
        type:Number,
        requied:true
    },
    addresses:[addressSchema]
})

mongoose.model("Student",studentSchema,"Studetns");