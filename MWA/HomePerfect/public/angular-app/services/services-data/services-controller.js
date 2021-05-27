angular.module('homePerfect').controller('ServicesController',ServicesController);


function ServicesController(ServicesFactory){
    const vm=this;
    vm.title="homePerfect App";
    vm.isSubmitted=false;
    ServicesFactory.getAllServices().then((response)=>{
        vm.services=response;
    })
    vm.addService=()=>{
        const service={
            name:vm.newServiceUserName,
            rate:vm.newServiceRating,
            imageUrl:vm.newServiceUserImageUrl

        }

        if(vm.serviceForm.$valid)
        ServicesFactory.addService(service).then((response)=>{
            console.log(response);
            window.location.reload()
        }).catch((err)=>{
            console.log(err);
        })
        else vm.isSubmitted=true;

        }
}