
angular.module('jobSearch').controller('JobsController',JobsController);

const _getJobs=(JobsFactory,vm)=>{
    JobsFactory.getAllJobs().then((jobs)=>{
        vm.jobs=jobs;
    }).catch((err)=>{
        vm.err="You Dont Have Any Job pulse Error:"+err
    });
}
function JobsController(JobsFactory,$routeParams,){
    const vm=this;
    vm.title="Jobs"
    _getJobs(JobsFactory,vm);

    vm.addJob=()=>{
        console.log('OnAddJobAngluar');
        const newJob={};
        newJob.title=vm.newJobTitle;
        newJob.salary=vm.newJobSalary;
        newJob.description=vm.newJobDes;
        newJob.experience=vm.newJobExperience;
        newJob.lat=vm.newJobLocationLat;
        newJob.lng=vm.newJobLocationLng;
        console.log('New Job',newJob);
        JobsFactory.addOneJob(newJob).then((created)=>{
            if(created)vm.message="Success"
            _getJobs(JobsFactory,vm)
        }).catch((err)=>{
            vm.err="Faild ,Error:"+err;

        })

    }


}