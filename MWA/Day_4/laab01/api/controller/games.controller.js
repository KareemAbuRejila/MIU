const { response } = require('express');
const mongoose=require('mongoose');
const Game=mongoose.model("Game");


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

    getGames(count,resp);
}
const getGames=(count,resp)=>{
    if(count!==0){
        if(count<7){
            Game.find().limit(count).exec((err,games)=>{
                console.log("This Is Games (docs)",games);
                resp.status(200).json(games);
            })
        }else{
            Game.find().limit(7).exec((err,games)=>{
                console.log("This Is Games (docs)",games);
                resp.status(200).json(games);
            })
        }
    }else{
        Game.find().exec((err,games)=>{
            console.log("This Is Games (docs)",games);
            resp.status(200).json(games);
    
        })
    }
}

module.exports.gamesAddOne=(req,resp)=>{    
}

module.exports.gamesGetGame=(req,resp)=>{
    console.log('JSON request received To Get One Gane. ');
    const gameId=req.params.gameId;
    const response={
        status:200,
        message:""
    }
    Game.findById(gameId,(err,game)=>{
        if(err){
            response.status=500;
        response.message=err
        }  else{
            response.status=200;
            response.message=game
        }      
        
        resp.status(response.status).json(response.message)
    })

}