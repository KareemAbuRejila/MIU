angular.module('meanGames', ['ngRoute']).config(config);

function config($routeProvider,$locationProvider) {
    console.log('Reached App');

    $locationProvider.hashPrefix("");
    $routeProvider.when('/home', {
        templateUrl: 'angular-app/games-list/games-list.html',
        controller: 'GamesController',
        controllerAs: 'vm'
    }).when('/game/:id', {
        templateUrl: 'angular-app/game/game.html',
        controller: 'GameController',
        controllerAs: 'vm'
    }).when('/',{
        templateUrl:'angular-app/welcome/welcome.html'
    }).when('/register',{
        templateUrl:'angular-app/register/register.html',
        controller: 'RegisterController',
        controllerAs: 'vm'
    })
}
// templateUrl:'angular-app/welcome/welcome.html'
