angular.module('jobSearch',['ngRoute']).config(Config);

function Config($routeProvider,$locationProvider){
    console.log("Reached App");
    $locationProvider.hashPrefix('');
    $routeProvider.when('/',{
        templateUrl:"angular-app/jobs/jobs-list/jobs.html",
        controller:"JobsController",
        controllerAs:'vm'
    }).when('/:jobId',{
        templateUrl:"angular-app/jobs/one-job/one-job.html",
        controller:"OneJobController",
        controllerAs:'vm'
    });
}