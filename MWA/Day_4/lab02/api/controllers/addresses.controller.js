const { response } = require('express');
const mongoose=require('mongoose');
const Student=mongoose.model("Student")

module.exports.getAllAddresses=(req,resp)=>{
    const studentId=req.params.studentId;
    const response={
        status:200,
        message:""
    }
    Student.findById(studentId).select("addresses").exec((err,student)=>{
        if(err){
            response.status=500;
        response.message=err
        }  else{
            response.status=200;
            response.message=student.addresses
        }  
        resp.status(response.status).json(response.message)
    })

}

module.exports.getOneAdddress=(req,resp)=>{
    const studentId=req.params.studentId;
    const addressId=req.params.addressId;
    const response={
        status:200,
        message:""
    }
    Student.findById(studentId).select("addresses").exec((err,std)=>{
        if(err){
            response.status=500;
        response.message=err
        }  else if(!std){
            console.log("Student Id not found in database!",studentId);
            response.status=500;
            response.message={"message":"Student Id not found"+studentId}
        }else{
            response.message=std.addresses.find(address=>address._id==addressId);
        }  
        resp.status(response.status).json(response.message)
    })

}

module.exports.addOneAddress=(req,resp)=>{
    const studentId=req.params.studentId;
    const response={
        status:200,
        message:""
    }
    Student.findById(studentId).select('addresses')
    .exec((err,std)=>{
        if(err){
            response.status=500;
        response.message=err
        }  else if(!std){
            console.log("Student Id not found in database!",studentId);
            response.status=500;
            response.message={"message":"Student Id not found"+studentId}
        }
        if(std){
            _addAddress(req,resp,std)
        }else{
            resp.status(response.status).json(response.message);
        }
    })
}
const _addAddress=(req,resp,std)=>{

    const address={};
    address.country=req.body.country;
    address.city=req.body.city;
    address.street=req.body.street;
    address.zipCode=parseInt(req.body.zipCode);

    std.addresses.push(address);
    const response={
        status:200,
        message:""
    }
    std.save((err,UpdatedStudent)=>{
        if(err){
            response.status=500;
            response.message=err;
        }else{
            response.message=UpdatedStudent;
        }
        resp.status(response.status).json(response.message);
    })
     

}

module.exports.deleteAddress=(req,resp)=>{
    const studentId=req.params.studentId;
    const addressId=req.params.addressId;

    const response={
        status:200,
        message:""
    }
    Student.findById(studentId).select('addresses')
    .exec((err,std)=>{
        if(err){
            response.status=500;
        response.message=err
        }  else if(!std){
            console.log("Student Id not found in database!",studentId);
            response.status=500;
            response.message={"message":"Student Id not found"+studentId}
        }
        if(std){
            _deleteAddress(req,resp,std,addressId)
        }else{
            resp.status(response.status).json(response.message);
        }
    })
}
const _deleteAddress=(req,resp,std,addressId)=>{   
     
    std.addresses.remove(std.addresses.find(address=>address._id==addressId))
    // console.log("Address Id",std.addresses);
    // resp.status(200).json(std.addresses);
    std.save((err,UpdatedStudent)=>{
        const response={
            status:200,
            message:''
        }
        if(err){
            response.status=500;
            response.message=err;
        }else{
            response.message=UpdatedStudent;
        }
        resp.status(response.status).json(response.message);
    })
     

}

module.exports.updateAddress=(req,resp)=>{
    const studentId=req.params.studentId;
    const addressId=req.params.addressId;

    const response={
        status:200,
        message:""
    }
    Student.findById(studentId).select('addresses')
    .exec((err,std)=>{
        if(err){
            response.status=500;
        response.message=err
        }  else if(!std){
            console.log("Student Id not found in database!",studentId);
            response.status=500;
            response.message={"message":"Student Id not found"+studentId}
        }
        if(std){
            _upadteAddress(req,resp,std,addressId)
        }else{
            resp.status(response.status).json(response.message);
        }
    })
}
const _upadteAddress=(req,resp,std,addressId)=>{   
     
    const address=std.addresses.find(address=>address._id==addressId)
    if(req.body.country)
    address.country=req.body.country;
    if(req.body.city)
    address.city=req.body.city;
    if(req.body.Street)
    address.Street=req.body.Street;
    if(req.body.zipCode)
    address.zipCode=req.body.zipCode;

//    std.addresses.map(add=>add=add._id==addressId?address:add);
    // std.addresses.map(add=>add= address);
 

    std.save((err,UpdatedStudent)=>{
        const response={
            status:200,
            message:''
        }
        if(err){
            response.status=500;
            response.message=err;
        }else{
            response.message=UpdatedStudent;
        }
        resp.status(response.status).json(response.message);
    })
     

}