const mongoose = require('mongoose');
const dbName = 'homePerfectDb'
const dbUrl = 'mongodb://127.0.0.1:27017'
require('./models/website_details');
require('./models/service_model');
require('./models/provider-model');


mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true }
    , (err) => {
        if (err) console.log("Mongoose: you have Error on Connecting Task");
        else console.log('Connecting...');
    })
mongoose.connection.on('connected', () => {
    console.log('Mongoose: Connected ',dbUrl);
})
mongoose.connection.on('dosconnected', () => {
    console.log('Mongoose: Connected');
})
mongoose.connection.on('err', () => {
    console.log('Mongoose: Connected');
})


process.on('SIGINT',()=>{
    mongoose.connection.close(()=>{console.log("Mongoose closed by Init");
    process.exit(0);
})
})
process.on('SIGTER',()=>{
    mongoose.connection.close(()=>{console.log("Mongoose closed by Ter");
    process.exit(0);
})
})
process.on('SIGUSR2',()=>{
    mongoose.connection.close(()=>{console.log("Mongoose closed by Init");
    process.kill(process.pid,"SIGUSR2");
})
})
