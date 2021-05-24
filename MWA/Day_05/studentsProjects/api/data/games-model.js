const mongoose=require('mongoose');


const reviewSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    ratting:{
        type:Number,
        required:true,
        min:1,
        max:5
    },
    review:{
        type:String,
        required:true
    },
    createdDate:{
        type:Date,
        "default":Date.Now
    }
})

const publisherSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    location:{
        // type:"Point",
        coordinates:{
            type:[Number],
        }
    },
})

const gameSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    price:Number,
    designers:[String],
    players:{
        type:Number,
        min:1,
        max:10
    },
    rate:{
        type:Number,
        min:1,
        max:5,
        "default":1
    },
    minAge:{
        type:Number
    },
    year:{
        type:Number
    },
    price:{
        type:Number
    },
    minPlayers:{
        type:Number
    },
    maxPlayers:{
        type:Number
    },
    reviews:[reviewSchema],
    publisher:publisherSchema
})

mongoose.model("Game",gameSchema,"games");