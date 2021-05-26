angular.module('homePerfect').controller('ServicesController',ServicesController);


function ServicesController(ServicesFactory){
    const vm=this;
    vm.title="homePerfect App";
    ServicesFactory.getAllServices().then((response)=>{
        vm.services=response;
    })
}