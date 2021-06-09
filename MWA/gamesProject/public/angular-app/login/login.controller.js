angular.module('meanGames').controller("LoginController",LoginController);

            
function LoginController($location,AuthFactory,UserDataFactory,$window,jwtHelper,$scope){
    const vm=this;

    vm.isActiveTab=(url)=>{
        const currentPath=$location.path().split("/")[1];
        if(url===currentPath?"active":""){

        }
    }

    vm.isLoggedIn=()=>AuthFactory.auth.isLoggedIn;


    vm.login=()=>{
        if(vm.username&&vm.password){
            const user={
                username:vm.username,
                password:vm.password
            };

            UserDataFactory.login(user).then((resp)=>{
                console.log(resp);
                if(resp&&resp.success){
                    $window.sessionStorage.token=resp.token;
                    AuthFactory.auth.isLoggedIn=true;
                    vm.username="";
                    vm.password="";
                    $location.path('/');
                    const token=$window.sessionStorage.token;
                    const decodedToken=jwtHelper.decodeToken(token);
                    vm.loggedinUser=decodedToken.username;

                }
            }).catch((err)=>{
                console.log("Login Faile Error:",err);
            })

        }

    }
    vm.logout=()=>{
        AuthFactory.auth.isLoggedIn=false;
        delete $window.sessionStorage.token;
        $location.path('/');
    }

    $scope.checkUserValidationFromSession=()=>{
        console.log("OnCheck");
        if($window.sessionStorage.token){
            const token=$window.sessionStorage.token;
            AuthFactory.auth.isLoggedIn=true;
        }
    }
}