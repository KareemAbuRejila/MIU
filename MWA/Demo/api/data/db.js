const mongoose=require('mongoose');
require('./cars.model');

const dbNAme='meanCars';
const dbUrl='mongodb://127.0.0.1:27017'+dbNAme;


mongoose.connect(dbUrl,{useUnifiedTopology:true,useNewUrlParser:true})


process.on('SIGINT',()=>{
    console.log("Application Interrupted");
    process.exit(0);
});
process.on('SIGTERM',()=>{
    console.log("Application Termination");
    process.exit(0);
});
process.once('SIGUSR2',()=>{
    console.log("Application Restarted");
    process.kill(process.pid);
});

mongoose.connection.on('connected',()=>{
    console.log('MongoDb connected');
})



mongoose.connection.on('disconnected',()=>{
    console.log('MongoDb Disconnected');
})


mongoose.connection.on('error',()=>{
    console.log('MongoDb Error');
})