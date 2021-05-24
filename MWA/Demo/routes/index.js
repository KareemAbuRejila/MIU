const express=require('express');
const router=express.Router();
const carsController=require('../api/controllers/cars.contoller');

router.route('/cars')
        .get(carsController.getAllCars)
        .post();

        router.route('/cars/:carId')
        .get(carsController.getAllCars)
        .post();

module.exports={
    router:router
};