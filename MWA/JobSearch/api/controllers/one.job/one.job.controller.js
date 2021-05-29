const mongoose=require('mongoose');
const Job=mongoose.model('Job');

module.exports.getOneJobs=(req,resp)=>{
    // resp.status(200).json({"message":"Welcome to Get One Job"})
    console.log('OnGetOneJob');
    const jobId=req.params.jobId;

    Job.findById(jobId,(err,job)=>{
        const response={
            status:201,
            message:''
        };
        if(err){
            response.status=404;
            response.message=err
        }else{
            response.message=job;
        }
        resp.status(response.status).json(response.message);
    })
}
module.exports.deleteJob=(req,resp)=>{
    // resp.status(200).json({"message":"Welcome to Delete Job"})
    console.log('OnDeleteOneJob');
    const jobId=req.params.jobId;

    Job.findByIdAndDelete(jobId,(err,job)=>{
        const response={
            status:201,
            message:''
        };
        if(err){
            response.status=404;
            response.message=err
        }else{
            response.message=job;
        }
        resp.status(response.status).json(response.message);
    })
}
module.exports.replaceJob=(req,resp)=>{
    // resp.status(200).json({"message":"Welcome to Replace Job"})
    console.log("OnAReplaceJob");
    const jobId=req.params.jobId;

    const newJob={};
    if(req.body.title)
    newJob.title=req.body.title;
    if(req.body.salary)
    newJob.salary=parseFloat(req.body.salary);
    if(req.body.description)
    newJob.description=req.body.description;
    if(req.body.experience)
    newJob.experience=parseInt(req.body.experience);
    if(req.body.postDate)
    newJob.postDate=req.body.postDate;
    if(req.body.lng&&req.body.lat)
    newJob.location={lng:parseFloat(req.body.lng),lat:parseFloat(req.body.lat)}
    Job.findByIdAndUpdate(jobId,newJob,(err,created)=>{
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
}
module.exports.partialUpdateJob=(req,resp)=>{
    // resp.status(200).json({"message":"Welcome to Partial Update Job"})
    console.log("OnPartialUpdateJob");
    const jobId=req.params.jobId;

    const newJob={};
    if(req.body.salary)
    newJob.salary=parseFloat(req.body.salary);
    if(req.body.description)
    newJob.description=req.body.description;
    if(req.body.experience)
    newJob.experience=parseInt(req.body.experience);
    if(req.body.lng&&req.body.lat)
    newJob.location={lng:parseFloat(req.body.lng),lat:parseFloat(req.body.lat)}
    Job.findByIdAndUpdate(jobId,newJob,(err,updated)=>{
        const response={
            status:201,
            message:''
        };
        if(err){
            response.status=404;
            response.message=err
        }else{
            response.message=updated;
        }
        resp.status(response.status).json(response.message);
    })
}