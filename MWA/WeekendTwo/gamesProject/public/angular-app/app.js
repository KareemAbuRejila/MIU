angular.module('meanGames', ['ngRoute','angular-jwt']).config(config).run(run);

function config($routeProvider, $locationProvider) {
    console.log('Reached App');

    $locationProvider.hashPrefix("");
    $routeProvider.when('/games', {
        templateUrl: 'angular-app/games-list/games-list.html',
        controller: 'GamesController',
        controllerAs: 'vm',
        access: {restricted: false}
    }).when('/game/:id', {
        templateUrl: 'angular-app/game/game.html',
        controller: 'GameController',
        controllerAs: 'vm',
        access: {restricted: false}
    }).when('/', {
        templateUrl: 'angular-app/welcome/welcome.html',
        access: {restricted: false}
    }).when('/register', {
        templateUrl: 'angular-app/register/register.html',
        controller: 'RegisterController',
        controllerAs: 'vm',
        access: {restricted: false}
    }).when('/profile', {
        templateUrl: 'angular-app/profile/profile.html',
        access: {restricted: true},
        controllerAs: "vm",
    }).otherwise({
        redirectTo: '/'
    })
}
// templateUrl:'angular-app/welcome/welcome.html'


function run($rootScope, $location, $window, AuthFactory) {
    $rootScope.$on("$routeCh angeStart", function (event, nextRoute, currentRoute) {
        if (nextRoute.access !== undefined && nextRoute.access.restricted && !$window.sessionStorage.token &&
            !AuthFactory.isLoggedIn) {
            event.preventDefault();
            $location.path("/");
        }
    });
}
