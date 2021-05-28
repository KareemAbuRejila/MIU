angular.module('homePerfect').directive('rating',Rating)


function Rating(){
    // 'A' for attrubute
    // 'E' for Value
    return{
        restrict: 'E',
        templateUrl: 'angular-app/rating-directive/rating-temp.html',
        // bindToController:true,
        // controller:"ServiceController",
        // controllerAs:'vm',
        transclude:true,
        scope:{
            stars:'=rating'
            // '@' expext Object Added
            // '&' expect array Added
        }
    }
};