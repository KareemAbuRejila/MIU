angular.module('homePerfect', ['ngRoute']).config(config);


function config($routeProvider,$locationProvider) {
    console.log('Reached App');
    $locationProvider.hashPrefix("");
    $routeProvider.when('/', {
        templateUrl: 'angular-app/welcome/welcome.html',
    }).when('/services/:id',{
        templateUrl: 'angular-app/services/one-service/one-service-tem.html',
        controller: 'ServiceController',
        controllerAs: 'vm'
    }).when('/services',{
        templateUrl: 'angular-app/services/services-data/services-temp.html',
        controller: 'ServicesController',
        controllerAs: 'vm'
    }).when('/profile', {
        templateUrl: 'angular-app/profile/profile.html',
        controllerAs: "vm",
    }).when('/register', {
        templateUrl: 'angular-app/register/register.html',
        controller: 'RegisterController',
        controllerAs: 'vm',
    }).otherwise({
        redirectTo: '/'
    })
}