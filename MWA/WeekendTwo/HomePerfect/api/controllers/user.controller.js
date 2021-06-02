const mongoose=require('mongoose');
const User=mongoose.model('User');


module.exports.registerUser=(req,resp)=>{
    console.log('OnRegisterUser');
    const newUser={};
    if(req.body.name)
    newUser.name=req.body.name
    if(req.body.username)
    newUser.username=req.body.username
    if(req.body.password)
    newUser.password=req.body.password

   User.create(newUser,(err,createdUser)=>{
    const response={
        status:201,
        message:''
    }
    if(err){
        console.log(err);
        response.status=400;
        response.message=err
    }else{
        response.message=createdUser
        console.log('Created');
    }
    resp.status(response.status).json(response.message);
   })
}

module.exports.authanticateUser=(req,resp)=>{
    console.log('OnAuthrUser');

    const authUser={};
    if(req.body.username)
    authUser.username=req.body.username
    if(req.body.password)
    authUser.password=req.body.password

   User.findOne(authUser).exec((err,authedUser)=>{
    const response={
        status:200,
        message:''
    }
    if(err){
        console.log(err);
        response.status=400;
        response.message=err
    }else{
        if(!authedUser){
            response.message="Not Valid"
            console.log('Authenticated');
            response.status=404;

        }else{
            response.message=authedUser
            console.log('Authenticated');

        }
        
    }
    resp.status(response.status).json(response.message);
   })

    
}