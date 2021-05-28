const express = require('express');
const router = express.Router();
const controllerGames = require('../controllers/games.controller.js');
const controllerReviews = require('../controllers/reviews.controller.js');
const contollerPublisher = require('../controllers/publisher.controller');
const controllerUsers = require('../controllers/user.controller');


router.route('/games')
    .get(controllerGames.gamesGetAll)
    .post(controllerGames.addOneGame);

router.route('/games/:gameId')
    .get(controllerGames.getOneGame)
    .delete(controllerGames.deleteGame)
    .put(controllerGames.replaceGame)
    .patch(controllerGames.partialUpdateGame);

router.route('/games/:gameId/publisher')
    .get(contollerPublisher.getAllPublisher)
    .post(contollerPublisher.addPublisher);

router.route('/games/:gameId/reviews')
    .get(controllerReviews.getAllReviews)
    .post(controllerReviews.addRreview);
router.route('/games/:gameId/reviews/:reviewId')
    .put(controllerReviews.updateRreview);


router.route('/users')
    .post(controllerUsers.registerUser);

router.route('/auth')
    .post(controllerUsers.autheticateUser);





module.exports = router;