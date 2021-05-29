angular.module('laureates',['ngRoute']).config(Config);

function Config($routeProvider,$locationProvider){
    console.log("Reached App");
    $locationProvider.hashPrefix('');
    
    $routeProvider.when('/',{
        templateUrl:"angular-app/laureates/laureates-list/laureates.html",
        controller:"JobsController",
        controllerAs:'vm'
    }).when('/:perId',{
        templateUrl:"angular-app/laureates/one-person/person.html",
        controller:"OneJobController",
        controllerAs:'vm'
    });
}