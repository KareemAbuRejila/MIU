angular.module('homePerfect', ['ngRoute']).config(config);


function config($routeProvider,$locationProvider) {
    console.log('Reached App');
    $locationProvider.hashPrefix("");
    $routeProvider.when('/', {
        templateUrl: 'angular-app/services/services-data/services-temp.html',
        controller: 'ServicesController',
        controllerAs: 'vm'
    }).when('/:id',{
        templateUrl: 'angular-app/services/one-service/one-service-tem.html',
        controller: 'ServiceController',
        controllerAs: 'vm'
    })
}