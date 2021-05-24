const express=require('express');
const router=express.Router();
const aboutContoller=require('../controllers/about.controller');

router.route('/abouts')
    .post(aboutContoller.addAbout)
    .get(aboutContoller.getAllAbout);

router.route('/abouts/:lang')
.get(aboutContoller.getAbout)
.patch(aboutContoller.editAbout);


    module.exports=router;