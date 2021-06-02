angular.module('homePerfect').controller('RegisterController',RegisterController);

function RegisterController(UserDataFactory){
    const vm=this;
    vm.register=()=>{
        const user={
            name:vm.name,
            username:vm.username,
            password:vm.password
        };
        if(!vm.username || !vm.password){
            vm.err="Please add a username and password"
        }else{
            if(vm.password !== vm.rpassword){
                vm.err="Please make sure the pawsswords mathed!"
            }else{
                UserDataFactory.createUser(user).then((result)=>{
                    if(result){
                        console.log(result);
                    vm.message="Successful registeration, plaese match!"
                    vm.err="";
                    }else{
                        vm.err="Something Wrong!";
                    }
                }).catch((err)=>{
                    console.log(err);
                    vm.err=err;
                });
            }
        }
    }
}