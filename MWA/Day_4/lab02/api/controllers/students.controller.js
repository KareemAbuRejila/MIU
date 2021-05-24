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
module.exports.getOneStudent=(req,resp)=>{
    const studentId=req.params.studentId;
    const response={
        status:200,
        message:""
    }
    Student.findById(studentId,(err,student)=>{
        if(err){
            response.status=500;
        response.message=err
        } else if(!student){
            response.status=200;
            response.message=({"message":"You Don't have this student"})
        }  
        else{
            response.status=200;
            response.message=student
        }  
        resp.status(response.status).json(response.message)
    })
}

module.exports.addStudent=(req,resp)=>{
    console.log('Add Student');
    const newStudent={}
    if(req.body.name)
    newStudent.name=req.body.name;
    if(req.body.gpa)
    newStudent.pga=req.body.gpa;
    const response={
        status:200,
        message:""
    }
    Student.create(newStudent,(err,createdStudent)=>{
        console.log('Add Student on Create');
        if(err){
            response.status=400;
            response.message=err
        }else{
            response.status=201;
            response.message=createdStudent
        }
        resp.status(response.status).json(response.message);

    })

}
module.exports.deleteStudent=(req,resp)=>{
    console.log('Delete Student');
    const stdId=req.params.studentId;
    const response={
        status:200,
        message:""
    }
    Student.findByIdAndRemove(stdId,(err,deletedStd)=>{
        console.log('Delete Student on Create');
        if(err){
            response.status=400;
            response.message=err
        }else{
            response.status=201;
            response.message=deletedStd;
        }
        resp.status(response.status).json(response.message);
    })

}
module.exports.updateStudent=(req,resp)=>{
    console.log('Full Update Student');
    const updatedStudent={}
    updatedStudent.name=req.body.name;
    updatedStudent.pga=req.body.gpa;
    const stdId=req.params.studentId;
    const response={
        status:200,
        message:""
    }
    Student.findByIdAndUpdate(stdId,updatedStudent,{ useFindAndModify:true,upsert: true },(err,updated)=>{
        console.log('Full Update Student on Create');
        if(err){
            response.status=400;
            response.message=err
        }else{
            response.status=201;
            response.message=updatedStudent;
        }
        resp.status(response.status).json(response.message);
    })
}
