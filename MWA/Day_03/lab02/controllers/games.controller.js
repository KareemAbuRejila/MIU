
const { ObjectID } = require('bson');
const dbConnection=require('../data/dbConnection.js')

module.exports.gamesGetAll=(req,resp)=>{
    console.log('JSON request received. ');
    console.log('The Query is ',req.query);

    let count=0;
    if(req.query&&req.query.offset){
        offset=parseInt(req.query.offset);
    }
    if(req.query&&req.query.count){
        count=parseInt(req.query.count);
    }

    const db=dbConnection.get();
    const collection=db.collection("games");
    getGames(count,collection,resp);
}

const getGames=(count,collection,resp)=>{
    if(count!==0){
        if(count<7){
            collection.find().limit(count).toArray((err,games)=>{
                console.log("This Is Games (docs)",games);
                resp.status(200).json(games);
            })
        }else{
            collection.find().limit(7).toArray((err,games)=>{
                console.log("This Is Games (docs)",games);
                resp.status(200).json(games);
            })
        }
    }else{
        collection.find().toArray((err,games)=>{
            console.log("This Is Games (docs)",games);
            resp.status(200).json(games);
    
        })
    }
}