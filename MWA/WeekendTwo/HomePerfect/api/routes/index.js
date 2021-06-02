const express = require('express');
const router = express.Router();
const aboutContoller = require('../controllers/about.controller');
const servicesContoller = require('../controllers/services.controller');
const providersContoller = require('../controllers/providers.controller');
const usersController = require("../controllers/user.controller")

router.route('/abouts')
    .post(aboutContoller.addAbout)
    .get(aboutContoller.getAllAbout);

router.route('/abouts/:lang')
    .get(aboutContoller.getAbout)
    .patch(aboutContoller.editAbout);


router.route('/services')
    .post(servicesContoller.addService)
    .get(servicesContoller.getServices);

router.route('/services/:serviceId/')
    .get(servicesContoller.getOneService)
    .patch(servicesContoller.editService)
    .delete(servicesContoller.deleteService);


router.route('/providers')
    .post(providersContoller.addProvider)
    .get(providersContoller.getProviders);

router.route('/providers/:providerId/')
    .get(providersContoller.getOneProvider)
    .patch(providersContoller.editProvider)
    .delete(providersContoller.deleteProvider);

router.route('/users')
    .post(usersController.registerUser)

router.route('/auth')
    .post(usersController.authanticateUser);




module.exports = router;