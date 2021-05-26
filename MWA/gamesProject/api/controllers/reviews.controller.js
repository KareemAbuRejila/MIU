const ObjectId=require('mongodb').ObjectId;
const mongoose=require('mongoose');
const Game=mongoose.model("Game");

module.exports.getAllReviews=(req,resp)=>{
    const gameId=req.params.gameId;
    Game.findById(gameId).select('reviews').exec((err,game)=>{
        if(err){
            resp.status(500).json(err)
        }
        resp.status(200).json(game.reviews)
    })
}

module.exports.addRreview=(req,resp)=>{
    const gameId=req.params.gameId;

    const response={
        status:200,
        message:""
    }
    Game.findById(gameId).select('reviews')
    .exec((err,game)=>{
        if(err){
            response.status=500;
        response.message=err
        }  else if(!game){
            console.log("Game Id not found in database!",gameId);
            response.status=500;
            response.message={"message":"Game Id not found"+gameId}
        }
        if(game){
            _addReview(req,resp,game);
        }else{
            resp.status(response.status).json(response.message);
        }
    })
}

const _addReview=(req,resp,game)=>{
    const review={};
    if(req.body.name)
    review.name=req.body.name;
    if(req.body.ratting)
    review.ratting=parseFloat(req.body.ratting);
    if(req.body.review)
    review.review=req.body.review;

    game.reviews.push(review);
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

module.exports.updateRreview=(req,resp)=>{
    const gameId=req.params.gameId;
    const reviewId=req.params.reviewId;

    const response={
        status:200,
        message:""
    }
    Game.findById(gameId).select('reviews')
    .exec((err,game)=>{
        if(err){
            response.status=500;
        response.message=err
        }  else if(!std){
            console.log("Game Id not found in database!",gameId);
            response.status=500;
            response.message={"message":"Game Id not found"+gameId}
        }
        if(game){
            _editRreview(req,resp,game,reviewId)
        }else{
            resp.status(response.status).json(response.message);
        }
    })
}
const _editRreview=(req,resp,game,reviewId)=>{   
    const review=game.reviews.find(rev=>rev._id==reviewId)
    if(req.body.name)
    review.name=req.body.name;
    if(req.body.ratting)
    review.ratting=parseFloat(req.body.ratting);
    if(req.body.review)
    review.review=req.body.review;

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