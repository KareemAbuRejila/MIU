const mongoose=require('mongoose');
const Game=mongoose.model("Game");


module.exports.gamesGetAll=(req,resp)=>{
    // console.log('JSON request received. ');
    // console.log('The Query is ',req.query);

    let count=0;
    if(req.query&&req.query.offset){
        offset=parseInt(req.query.offset);
    }
    if(req.query&&req.query.count){
        count=parseInt(req.query.count);
    }

    _getGames(count,resp);
}
const _getGames=(count,resp)=>{
 
    if(count!==0){
        if(count<7){
            Game.find().limit(count).exec((err,games)=>{
                // console.log("This Is Games (docs)",games);
                resp.status(200).json(games);
            })
        }else{
            Game.find().limit(7).exec((err,games)=>{
                // console.log("This Is Games (docs)",games);
                resp.status(200).json(games);
            })
        }
    }else{
        Game.find().exec((err,games)=>{
            // console.log("This Is Games (docs)",games);
            resp.status(200).json(games);
    
        })
    }
}

module.exports.getOneGame=(req,resp)=>{
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
        }  else if(!game){
            response.status=200;
            response.message=({"message":"You Don't have this Game"})
        }  
        else{
            response.status=200;
            response.message=game;}
        resp.status(response.status).json(response.message)
    })

}

module.exports.addOneGame=(req,resp)=>{
    console.log('JSON request received To Add One Gane. ');
    const newGame={};
    if(req.body.title)
    newGame.title=req.body.title;
    if(req.body.rate)
    newGame.rate=req.body.rate;
    if(req.body.minAge)
    newGame.minAge=req.body.minAge;
    if(req.body.year)
    newGame.year=req.body.year;
    if(req.body.price)
    newGame.price=req.body.price;
    if(req.body.minPlayers)
    newGame.minPlayers=req.body.minPlayers;
    if(req.body.maxPlayers)
    newGame.maxPlayers=req.body.maxPlayers;
    if(req.body.publisher)
    newGame.publisher=req.body.publisher;
    if(req.body.designers){
        const designers=[];
        designers.push(req.body.designers);
        newGame.designers=designers;
    }

    const response={
        status:200,
        message:""
    }
    Game.create(newGame,(err,createdGame)=>{
        console.log('Add Game on Create');
        if(err){
            response.status=400;
            response.message=err
        }else{
            response.status=201;
            response.message=createdGame
        }
        resp.status(response.status).json(response.message);
    })
}

module.exports.replaceGame=(req,resp)=>{
    console.log('On Replace Game at Server');
    const gameId=req.params.gameId;
    const response={
        status:200,
        message:""
    }
    const newGame={};
    if(req.body.title)
    newGame.title=req.body.title;
    if(req.body.rate)
    newGame.rate=req.body.rate;
    if(req.body.minAge)
    newGame.minAge=req.body.minAge;
    if(req.body.year)
    newGame.year=req.body.year;
    if(req.body.price)
    newGame.price=req.body.price;
    if(req.body.minPlayers)
    newGame.minPlayers=req.body.minPlayers;
    if(req.body.maxPlayers)
    newGame.maxPlayers=req.body.maxPlayers;
    if(req.body.publisher)
    newGame.publisher=req.body.publisher;
    // if(req.body.designers){
    //     const designers=[];
    //     designers.push(req.body.designers);
    //     newGame.designers=designers;
    // }
    Game.findByIdAndUpdate(gameId,newGame,(err,updatedGame)=>{
        console.log('Replace Game on Update');
        if(err){
            response.status=400;
            response.message=err
        }else{
            response.status=201;
            response.message=updatedGame
        }
        resp.status(response.status).json(response.message);
    })
    

}
module.exports.partialUpdateGame=(req,resp)=>{
    console.log('On PartialUpdateGame Game at Server');
    const gameId=req.params.gameId;
    const response={
        status:200,
        message:""
    }
}
module.exports.deleteGame=(req,resp)=>{
    console.log('JSON request received To Delete One Gane. ');
    const gameId=req.params.gameId;
    const response={
        status:200,
        message:""
    }
    Game.findByIdAndRemove(gameId,(err,game)=>{
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