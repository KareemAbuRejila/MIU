angular.module('jobSearch').controller('OneJobController',OneJobController);

const _getOneGame=(JobsFactory,vm,jobId)=>{
    JobsFactory.getOneJob(jobId).then((job)=>{
        vm.job=job;

        vm.ejobDescription=job.description;
        vm.ejobExperience=job.experience;
        vm.ejobSalary=job.salary;




    }).catch((err)=>{
        vm.err='Not Existed! Error:'+err;
    });
}

function OneJobController(JobsFactory,$routeParams){
    const vm=this;
    const jobId=$routeParams.jobId;
    _getOneGame(JobsFactory,vm,jobId);

    vm.deleteJob=()=>{
        JobsFactory.deleteOneJob(jobId).then((deleted)=>{
            if(deleted){
                vm.sucess="Deleted"
                window.history.back();
            }
        }).catch((err)=>{
            if(err)vm.err="Faild, Error:"+err;
        });
    }

    vm.partialUpdateJob=()=>{
        const repJob={
            title:vm.job.title,
            salary:vm.ejobSalary,
            location:vm.job.location,
            description:vm.ejobDescription,
            experience:vm.ejobExperience
        }
        JobsFactory.replaceOneJob(jobId,repJob).then((updated)=>{
            if(updated){
                vm.message="Updated"
                _getOneGame(JobsFactory,vm,jobId);
            }
        }).catch((err)=>{
            vm.err="Failed Update, Error: "+err;
        })
        
    }

}