angular.module("homePerfect").factory("AuthFactory",AuthFactory);

function AuthFactory(){
    let auth={isLoggedIn:false};
    return{
        auth:auth
    };

}