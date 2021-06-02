angular.module("homePerfect").directive('homePerfectNavigation',HomePerfectNavigation)

function HomePerfectNavigation(){
    return{
        restrict:"E",
        templateUrl:"angular-app/navigation-directive/navigation-directive.html",
    }
}