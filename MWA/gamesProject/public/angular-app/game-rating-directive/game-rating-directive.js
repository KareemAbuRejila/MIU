angular.module('meanGames').directive('gameRating',GameRating)


function GameRating(){
    // 'A' for attrubute
    // 'E' for Value
    return{
        restrict: 'E',
        templateUrl: 'angular-app/game-rating-directive/game-rating-temp.html',
        bindToController:true,
        controller:"GameController",
        controllerAs:'vm',
        scrope:{
            starts:'@'
            // '@' expext Object Added
            // '&' expect array Added
        }
    }
};