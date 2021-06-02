angular.module("homePerfect").directive('HomePerfectNavigation',HomePerfectNavigation)

function HomePerfectNavigation(){
    return{
        restrict:"E",
        templateUrl:"angular-app/navigation-directive/navigation-directive.htmla",
    }
}