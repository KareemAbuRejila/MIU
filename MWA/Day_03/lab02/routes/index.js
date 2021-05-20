const express=require('express');
const router=express.Router();
const controllerGames=require('../controllers/games.controller.js');

router.route('/games').get(controllerGames.gamesGetAll).post();


module.exports=router;