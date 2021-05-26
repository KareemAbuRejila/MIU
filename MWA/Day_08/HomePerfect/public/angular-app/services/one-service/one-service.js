
angular.module('homePerfect').controller('ServiceController',ServiceController);


function ServiceController(ServicesFactory,$routeParams){
    const vm=this;
    const serviceId=$routeParams.id;
    ServicesFactory.getOneService(serviceId).then((response)=>{
        console.log(serviceId);
        vm.service=response;
    })

}