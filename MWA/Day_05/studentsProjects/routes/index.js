const express = require('express');
const router = express.Router();
const controllerGames = require('../api/controllers/games.controller.js');
const controllerReviews = require('../api/controllers/reviews.controller.js');
const contollerPublisher=require('../api/controllers/publisher.controller')


router.route('/games')
    .get(controllerGames.gamesGetAll)
    .post(controllerGames.addOneGame);

router.route('/games/:gameId')
    .get(controllerGames.getOneGame);

router.route('/games/:gameId/publisher')
    .get(contollerPublisher.getAllPublisher);

router.route('/games/:gameId/reviews')
    .get(controllerReviews.getAllReviews)
    .post(controllerReviews.addRreview);
router.route('/games/:gameId/reviews/:reviewId')
    .put(controllerReviews.updateRreview);






module.exports = router;