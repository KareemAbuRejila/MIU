angular.module('meanGames', ['ngRoute']).config(config);

function config($routeProvider,$locationProvider) {
    console.log('Reached App');

    $locationProvider.hashPrefix("");
    $routeProvider.when('/', {
        templateUrl: 'angular-app/games-list/games-list.html',
        controller: 'GamesController',
        controllerAs: 'vm'
    }).when('/game/:id', {
        templateUrl: 'angular-app/game/game.html',
        controller: 'GameController',
        controllerAs: 'vm'
    })
}