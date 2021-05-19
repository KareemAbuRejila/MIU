const express=require('express');
const router=express.Router();
const gamesController=require('../controller/games.controller.js');

router.route('/') 
        .get(gamesController.getSomeGames)
        .post(gamesController.addGame);

        router.route('/:gameId') 
        .get(gamesController.getOneGame);
router.route('/all')
        .get(gamesController.getAllGames)
        .post(gamesController.addGame);

        module.exports=router;