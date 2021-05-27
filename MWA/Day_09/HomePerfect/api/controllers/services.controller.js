const mongoose=require('mongoose');
const Service=mongoose.model('Service');


module.exports.addService=(req,resp)=>{
console.log('onAddService');
const service={};
if(req.body.name)
service.name=req.body.name;
if(req.body.imageUrl)
service.imageUrl=req.body.imageUrl;

Service.create(service,(err,createdService)=>{
     _out(resp,err,createdService);
})
}

module.exports.getServices=(req,resp)=>{
    console.log('onGetServices');
    Service.find().exec((err,services)=>{
        _out(resp,err,services);
    })

}

module.exports.getOneService=(req,resp)=>{
    console.log('onGetOnceService Need Impelent');

}

module.exports.editService=(req,resp)=>{
    console.log('oneEditService Need Impelent');

}
module.exports.deleteService=(req,resp)=>{
    console.log('oneEditService Need Impelent');

}

const _out=(resp,err,out)=>{
    const response={
        status:200,
        message:''
    }
    if(err){
        response.status=500;
        response.message=err
    }else{
        response.message=out;
    }

    resp.status(response.status).json(response.message);
}