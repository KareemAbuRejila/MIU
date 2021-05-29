const express=require('express');
const router=express.Router();
const jobsController=require('../controllers/jobs/jobs.controller');
const oneJobController=require('../controllers/one.job/one.job.controller');



router.route('/jobs')
    .get(jobsController.getAllJobs)
    .post(jobsController.addJob);
    

router.route('/jobs/:jobId')
    .get(oneJobController.getOneJobs)
    .delete(oneJobController.deleteJob)
    .put(oneJobController.replaceJob)
    .patch(oneJobController.partialUpdateJob);

module.exports=router;