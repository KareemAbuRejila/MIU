const mongoose = require('mongoose');
const ratingSchema=require('./rating-model');

const jobSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    salary: {
        type: Number,
        required: true
    },
    location: {
        lat: Number,
        lng: Number
    },
    description: String,
    experience: Number,
    skills: [String],
    postData: {
        type: Date,
        default: Date.now
    },
    ratings:[ratingSchema]
});


mongoose.model('Job', jobSchema, 'jobs');