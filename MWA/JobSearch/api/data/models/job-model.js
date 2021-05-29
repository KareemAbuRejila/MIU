const mongoose = require('mongoose');

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
    }
});


mongoose.model('Job', jobSchema, 'jobs');