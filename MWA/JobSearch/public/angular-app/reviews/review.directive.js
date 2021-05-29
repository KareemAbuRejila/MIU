angular.module('jobSearch').directive('review',Review);

function Review(){
    return{
        restrict:'E',
        templateUrl:'angular-app/reviews/review.html',
        transclide:true,
        scope:{
            review:'=review'
        }
    }
}