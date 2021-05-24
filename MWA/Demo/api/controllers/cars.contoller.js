const mongoose=require('mongoose');

const Car=mongoose.model('Car');


module.exports.getAllCars=(req,resp)=>{

    Car.find().exec((err,cars)=>{
        console.log('Get All Cars from DB');
        resp.status(200).json(cars);
    })
}

module.exports.getOneCar=(req,resp)=>{
    const carId=req.params.carId;

    Car.findById(carId).exec((err,car)=>{
        console.log('Get One Car from DB');
        resp.status(200).json(car);
    })
}


module.exports.addOneCar=(req,resp)=>{

        console.log("Add One Car Onterroler");
        const newCar={};
        newCar.make=req.body.make;
        newCar.make=req.body.make;
        newCar.make=req.body.make;
        newCar.make=req.body.make;

}