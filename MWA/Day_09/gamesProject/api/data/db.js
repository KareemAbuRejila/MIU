const mongoose=require('mongoose');
const dbName='meanGames';
const dbUrl="mongodb://localhost:27017/"+dbName;
require("./games-model.js")
//for Connection
mongoose.connect(dbUrl,{useNewUrlParser:true,useUnifiedTopology:true});
mongoose.connection.on("connected",()=>{console.log("Mongoose connected to "+dbUrl)});
mongoose.connection.on("disconnected",()=>{console.log("Mongoose disconnected");});
mongoose.connection.on("error",(err)=>{console.log("Mongoose Connection Error:",err);});

//to Disconnect
process.on("SIGINT",()=>{

    mongoose.connection.close(()=>{console.log("Mongoose closed by Init");
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
 
const _printSchema=()=>{
        const GenerateSchema = require('generate-schema');
        const schema = GenerateSchema.json('game', {
            "designers": [
              "Alan R. Moon"
            ],
            "rate": 4,
            "_id": "5fbed15c07a5894b456a4345",
            "title": "Ticket to Ride",
            "year": 2004,
            "price": 49.99,
            "minPlayers": 2,
            "maxPlayers": 5,
            "publisher": {
            "location": {
            "coordinates": [
              48.84248,
              2.24388
            ],
            },
            "_id": "60aaa1be1f6cd53acfe022cd",
            "name": "Days of Wonder"
            },
            "reviews": [
              ""
            ],
            "minAge": 8
            });
        console.log(JSON.stringify(schema))
}