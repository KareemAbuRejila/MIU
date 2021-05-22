const { response } = require('express');
const mongoose=require('mongoose');
const Student=mongoose.model("Student")
module.exports.studetnsGetAll=(req,resp)=>{
    let count=0;
    if(req.query&&req.query.offset){
        offset=parseInt(req.query.offset);
    }
    if(req.query&&req.query.count){
        count=parseInt(req.query.count);
    }

    getStudents(count,resp);
}
const getStudents=(count,resp)=>{
    const response={
        status:200,
        message:""
    }
    if(count!==0){
        if(count<7){
            Student.find().limit(count).exec((err,students)=>{
                if(err){
                    response.status=500;
                    response.message=err;
                }else
                response.message=students;
                resp.status(response.status).json(response.message);

            })
        }else{
            Student.find().limit(7).exec((err,students)=>{
                if(err){
                    response.status=500;
                    response.message=err;
                }else
                response.message=students;
                resp.status(response.status).json(response.message);

            })
        }
    }else{
        Student.find().exec((err,students)=>{
            if(err){
                response.status=500;
                response.message=err;
            }else
            response.message=students;
            resp.status(response.status).json(response.message);

        })
    }
}
module.exports.studentsGetStudent=(req,resp)=>{
    const studentId=req.params.studentId;
    const response={
        status:200,
        message:""
    }
    Student.findById(studentId,(err,student)=>{
        if(err){
            response.status=500;
        response.message=err
        }  else{
            response.status=200;
            response.message=student
        }  
        resp.status(response.status).json(response.message)
    })
}
