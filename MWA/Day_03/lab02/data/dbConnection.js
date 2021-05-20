const mongoClient=require('mongodb').MongoClient;
const dbName="meanGames";
const dburl="mongodb://localhost:27017/"+dbName;
let _connection=null;

const open=()=>{
    mongoClient.connect(dburl,{useUnifiedTopology:true}
        ,(err,client)=>{
            if(err){
                console.log("DB connection failed!");
                return;
            }
            _connection=client.db(dbName);
            console.log('Db connection open ',_connection);
    })
}

const get=()=>{
    return _connection;
}

module.exports={
    open:open,
    get:get
}