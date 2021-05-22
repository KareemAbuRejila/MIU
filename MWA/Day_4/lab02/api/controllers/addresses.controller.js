const { response } = require('express');
const mongoose=require('mongoose');
const Student=mongoose.model("Student")

module.exports.studentGetAddresses=(req,resp)=>{
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
module.exports.studentGetOneAdddress=(req,resp)=>{
    const studentId=req.params.studentId;
    const addressId=req.params.addressId;
    const response={
        status:200,
        message:""
    }
    Student.findById(studentId).select("addresses").exec((err,addresses)=>{
        if(err){
            response.status=500;
        response.message=err
        }  else{
            
        }  
        resp.status(response.status).json(response.message)
    })

}