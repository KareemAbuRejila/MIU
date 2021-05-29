const express = require('express');
const router = express.Router();
const lureastesController=require('../controllers/lureastes.controller');


router.route('/laureates')
    .get(lureastesController.getAllLaur)
    .post(lureastesController.addOne);

    router.route('/laureates/search')
    .get(lureastesController.search);

    router.route('/laureates/:perId')
    .get(lureastesController.getOne)
    .delete(lureastesController.deleteOne);

module.exports = router;