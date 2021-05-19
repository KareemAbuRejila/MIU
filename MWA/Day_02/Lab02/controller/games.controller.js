const gamesData=require('../data/games.json');


module.exports.getAllGames=(req,resp)=>{
    console.log('Get All Games From Controller');
    resp.status(200).json(gamesData);
}

module.exports.getSomeGames=(req,resp)=>{
    console.log('Get All Games From Controller');
    resp.status(200).send('Page to Get Some Games');
}
module.exports.getOneGame=(req,resp)=>{
    resp.status(200).json(gamesData[req.params.gameId]);
}
module.exports.addGame=(req,resp)=>{
    console.log('POST All Games From Controller');
    console.log(`Game Pamas ${req.params}`);
}