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