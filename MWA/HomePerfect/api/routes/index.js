const express = require('express');
const router = express.Router();
const aboutContoller = require('../controllers/about.controller');
const servicesContoller=require('../controllers/services.controller');

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
    .patch(servicesContoller.editService);
module.exports = router;