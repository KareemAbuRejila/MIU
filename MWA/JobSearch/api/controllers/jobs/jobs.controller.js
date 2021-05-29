const mongoose=require('mongoose');
const Job=mongoose.model('Job');

module.exports.getAllJobs=(req,resp)=>{
    console.log("OnGetAllJobs");
    Job.find().exec((err,jobs)=>{
        const response={
            status:201,
            message:''
        };
        if(err){
            response.status=404;
            response.message=err
        }else{
            response.message=jobs;
        }
        resp.status(response.status).json(response.message);
    })
    // resp.status(200).json({"message":"Welcome to Get All Jobs"})
}
module.exports.addJob=(req,resp)=>{
    console.log("OneAddJob");
    const newJob={};
    if(req.body.title)
    newJob.title=req.body.title;
    if(req.body.salary)
    newJob.salary=parseFloat(req.body.salary);
    if(req.body.description)
    newJob.description=req.body.description;
    if(req.body.experience)
    newJob.experience=parseInt(req.body.experience);
    if(req.body.postData)
    newJob.postData=req.body.postData;
    if(req.body.lng&&req.body.lat)
    newJob.location={lng:parseFloat(req.body.lng),lat:parseFloat(req.body.lat)}
    Job.create(newJob,(err,created)=>{
        const response={
            status:201,
            message:''
        };
        if(err){
            response.status=404;
            response.message=err
        }else{
            response.message=created;
        }
        resp.status(response.status).json(response.message);
    })

    // resp.status(200).json({"message":"Welcome to Post Job"})
}