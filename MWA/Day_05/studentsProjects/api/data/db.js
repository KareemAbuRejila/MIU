const mongoose=require('mongoose');
const dbName='meanGames';
const dbUrl="mongodb://localhost:27017/"+dbName;
require("./games-model.js")
//for Connection
mongoose.connect(dbUrl,{useNewUrlParser:true,useUnifiedTopology:true});
mongoose.connection.on("connected",()=>{console.log("Mongoose connected to "+dbUrl);});
mongoose.connection.on("disconnected",()=>{console.log("Mongoose disconnected");});
mongoose.connection.on("error",(err)=>{console.log("Mongoose Connection Error:",err);});

//to Disconnect
process.on("SIGINT",()=>{

    mongoose.connection.close(()=>{console.log("Mongoose closed by termination");
    process.exit(0);
});

})

//to Terminate
process.on("SIGTERM",()=>{
    mongoose.connection.close(()=>{console.log("Mongoose closed by termination");
    process.exit(0);
});

})

//to Restart
process.once("SIGUSR2",()=>{

    mongoose.connection.close(()=>{console.log("Mongoose closed by termination");
    process.kill(process.pid,"SIGUSR2");
});

})