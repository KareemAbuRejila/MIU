angular.module('jobSearch').factory('JobsFactory',JobsFactory);

function JobsFactory($http){
    return{
        getAllJobs:getAllJobs,
        getOneJob:getOneJob,
        addOneJob:addOneJob,
        deleteOneJob:deleteOneJob,
        replaceOneJob:replaceOneJob,
        partialUpadateOneJob:partialUpadateOneJob
    }


function getAllJobs(){
    return $http.get('/api/jobs').then(complete).catch(failed);
}
function getOneJob(id){
    return $http.get('/api/jobs/'+id).then(complete).catch(failed);
}
function addOneJob(job){
    return $http.post('/api/jobs/',job).then(complete).catch(failed);
}
function deleteOneJob(id){
    return $http.delete('/api/jobs/'+id).then(complete).catch(failed);
}
function replaceOneJob(id,job){
    return $http.put('/api/jobs/'+id,job).then(complete).catch(failed);
}
function partialUpadateOneJob(id,job){
    return $http.patch('/api/jobs/'+id,job).then(complete).catch(failed);
}

function complete(respons){
    return respons.data;
}
function failed(err){
    return err.status.statusText;
}
}