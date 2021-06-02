
angular.module('homePerfect').controller('ServiceController',ServiceController);


function ServiceController(ServicesFactory,$routeParams,AuthFactory){
    const vm=this;
    const serviceId=$routeParams.id;
    ServicesFactory.getOneService(serviceId).then((service)=>{
        console.log(serviceId);
        // service.providers.map(prov=>JSON.parse(prov));
        vm.service=service;
        vm.rating=_starsRating(vm.service.rate);
        vm.replaceServiceRating=service.rate;
        vm.replaceServiceUserImageUrl=service.imageUrl;
    }).catch((err)=>{
        vm.err="Not Founded: Error: "+err
    })

    vm.replaceService=()=>{
        const service={
            name:vm.service.name,
            rate:vm.replaceServiceRating,
            imageUrl:vm.replaceServiceUserImageUrl
        }
        ServicesFactory.partialUpdateService(serviceId,service).then((service=>{
            console.log('Uploaded: ',service);

        })).catch((err)=>{
            console.log(err);
        })
    }
    vm.deleteService=()=>{
        ServicesFactory.deleteService(serviceId).then((service=>{
            console.log('Deleted: ',service);
            window.history.back();

        })).catch((err)=>{
            console.log(err);
        })
    }
    vm.isLoggedIn=()=>AuthFactory.auth.isLoggedIn;


}

const _starsRating=(stars)=>{
    return new Array(stars);
}