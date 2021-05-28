require('./models/job-model');

const mongoose=require('mongoose');
const dbName='jobsDb';
const dbUrl='mongodb://localhost:27017/'+dbName;



mongoose.connect(dbUrl,{useNewUrlParser:true,useUnifiedTopology:true},(err)=>{
    if(err){
        console.log('Connection Faild:',err);
        return;
    }
    console.log('connecting');
});

mongoose.connection.on('connected',()=>{
    console.log('Connected');
    console.log('Mogoose Listening on:',dbUrl);
});
mongoose.connection.on('disconnected',()=>{
    console.log('DisConnected');
});
mongoose.connection.on('err',(err)=>{
    console.log('Err:',err);
});

process.on('SIGINR',()=>{
    mongoose.connection.close(()=>{
        console.log("Mongose Close by Inti");
    });
    process.exit(0);
});
process.on('SIGTEM',()=>{
    mongoose.connection.close(()=>{
        console.log("Mongose Close by TEM");
    });
    process.exit(0);
});
process.on('SIGUSR2',()=>{
    mongoose.connection.close(()=>{
        console.log("Mongose Close by Restart");
    });
    process.kill(process.pid,"SIGUSR2");
});