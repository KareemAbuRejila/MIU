const mongoose=require('mongoose');


const reviewSchema= new mongoose.Schema({
    name: {
    type: String,
    required: true
    },
    rating: {
    type: Number,
    min: 0,
    max: 5,
    required: true
    },
    review: {
    type: String,
    required: true
    },
    createdOn: {
    type: Date,
    "default": Date.Now
    }
    });
    const locationSchema=new mongoose.Schema({
        name:String,
        coordinates:[Number]
    })
const publisherSchema= new mongoose.Schema({
    name: {
    type: String,
    required: true
    },
    location: locationSchema
});


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