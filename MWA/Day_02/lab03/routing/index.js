const express=require('express');
const router=express.Router();
const calculatorController=require('../controller/calculater.controller.js');




router.route('/').post(calculatorController.getResult);