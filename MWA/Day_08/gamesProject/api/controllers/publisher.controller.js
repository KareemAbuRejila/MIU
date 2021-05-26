const mongoose=require('mongoose');
const Game=mongoose.model("Game");


module.exports.getAllPublisher=(req,resp)=>{
    const gameId=req.params.gameId;
    Game.findById(gameId).select('publisher').exec((err,game)=>{
        if(err){
            resp.status(500).json(err)

        }
        resp.status(200).json(game.publisher)
    })
}

module.exports.addPublisher=(req,resp)=>{
        const gameId=req.params.gameId;
        const response={
            status:200,
            message:""
        }
        Game.findById(gameId).exec((err,game)=>{
            if(err){
                response.status=500;
            response.message=err
            }  else if(!game){
                console.log("Game Id not found in database!",gameId);
                response.status=500;
                response.message={"message":"Game Id not found"+gameId}
            }
            if(game){
                _addPublisher(req,resp,game);
            }else{
                resp.status(response.status).json(response.message);
            }
        })
}
const _addPublisher=(req,resp,game)=>{

    const publisher={}
    if(req.body.name)
    publisher.name=req.body.name
    if(req.body.lng&&req.body.lat)
    publisher.location=[parseFloat(req.body.lng),parseFloat(req.body.lat)]

    game.publisher=publisher;

    game.save((err,UpdatedGame)=>{
        const response={
            status:200,
            message:''
        }
        if(err){
            response.status=500;
            response.message=err;
        }else{
            response.message=UpdatedGame;
        }
        resp.status(response.status).json(response.message);
    })
}