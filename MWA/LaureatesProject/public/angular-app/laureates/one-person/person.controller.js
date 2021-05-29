angular.module('laureates').controller('OneJobController',OneJobController);

function OneJobController(LaureatesFactory,$routeParams,){
    const vm=this;
    const perId=$routeParams.perId;
    LaureatesFactory.getOne(perId).then((per)=>{
        vm.per=per;
    }).catch((err)=>{
        vm.err='Not Existed! Error:'+err;
    });

    vm.deleteOne=()=>{
        LaureatesFactory.deleteOne(perId).then((per)=>{
            if(per){
                vm.message="Deleted"
                window.history.back();
            }
        }).catch((err)=>{
            vm.err='Failed Error:'+err;
        });
    }
}
