const mongoose = require('mongoose');
const User = mongoose.model('User');
const bcrypt = require('bcrypt-nodejs');
const jwt = require('jsonwebtoken');


module.exports.registerUser = (req, resp) => {
    console.log('OnRegisterUser');
    const newUser = {};
    if (req.body.name)
        newUser.name = req.body.name
    if (req.body.username)
        newUser.username = req.body.username
    if (req.body.password)
        newUser.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10))

    User.create(newUser, _OnCreateFuncation)
}
const _OnCreateFuncation=(err, createdUser) => {
    const response = {
        status: 201,
        message: ''
    }
    if (err) {
        console.log(err);
        response.status = 400;
        response.message = err
    } else {
        response.message = createdUser
        console.log('Created');
    }
    resp.status(response.status).json(response.message);
}

module.exports.autheticateUser = (req, resp) => {
    console.log('OnAuthrUser');

    const authUser = {};
    if (req.body.username)
        authUser.username = req.body.username
    User.findOne(authUser).exec((err,authedUser)=>_OnFindOneFuncation(err,authedUser,req,resp))
}
const _OnFindOneFuncation=(err, authedUser,req,resp) => {
    const response = {
        status: 200,
        message: ''
    }
    if (err) {
        console.log(err);
        response.status = 400;
        response.message = err
    } else {
        if (!authedUser) {
            response.message = { "message": "We don't have this User" };
            console.log("We don't have this User");
            response.status = 404;

        } else {
            if (bcrypt.compareSync(req.body.password, authedUser.password)) {
                console.log('Authenticated');
                const token = jwt.sign({ username: authedUser.username, userId: authedUser._id }, "cs572", { expiresIn: 3600 });//token axpires after an hour
                response.message = {
                    success: true,
                    token: token
                }

            } else {
                console.log("UnAuthorized");
                response.status = 401;
                response.message = { "message": "Faild Password" };
            }

        }

    }
    resp.status(response.status).json(response.message);
}

//Not usese
module.exports.authenticate = (req, res, next) => {
    const headExists = req.headers.authorization;
    if (headExists) {
        const token = req.headers.authorization.split(' ')[1];
        jwt.verify(token, 'cs572', (err, decoded) => {
            if (err) {
                console.log(err);
                res.status(401).json({ message: "Unautherized" });
            }
            else {
                // resp.status(403).json({message:"No Token provided"})
                req.user = decoded.user;
                next();
            }
        });
    } else {
        resp.status(403).json({ message: "No Token provided" })
    }
}
// module.exports.authanticateUser=(req,resp)=>{
//     console.log('OnAuthrUser');

//     const authUser={};
//     if(req.body.username)
//     authUser.username=req.body.username
//     // if(req.body.password)
//     // authUser.password=bcrypt.hashSync(req.body.password,bcrypt.genSaltSync(10))

//    User.findOne(authUser).exec((err,authedUser)=>{
//     const response={
//         status:200,
//         message:''
//     }
//     if(err){
//         console.log(err);
//         response.status=400;
//         response.message=err
//     }else{
//         if(!authedUser){
//             response.message={"message":"We don't have this User"};
//             console.log('Authenticated');
//             response.status=404;

//         }else{
//             if(bcrypt.compareSync(req.body.password,authedUser.password)){
//                 response.message=authedUser
//                 console.log('Authenticated');

//             }else{
//                 console.log("UnAuthorized");
//                 response.status=401;
//                 response.message={"message":"Faild Password"};
//             }

//         }

//     }
//     resp.status(response.status).json(response.message);
//    })


// }