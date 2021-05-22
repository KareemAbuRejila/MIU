const express = require('express');
const router = express.Router();
const controllerGames = require('../api/controller/games.controller.js');

router.route('/games')
    .get(controllerGames.gamesGetAll)
    .post(controllerGames.gamesAddOne);

router.route('/games/:gameId').get(controllerGames.gamesGetGame);




module.exports = router;