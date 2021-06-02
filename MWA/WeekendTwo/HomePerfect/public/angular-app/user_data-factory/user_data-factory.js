angular.module('homePerfect').factory("UserDataFactory",UserDataFactory)

function UserDataFactory($http){
    return{
        login:login,
        createUser:createUser
        
    };
    function login(user){
        return $http.post('/api/auth/',user).then(complete).catch(failed);
    }
    function createUser(user){
        return $http.post('/api/users/',user).then(complete).catch(failed);
    }
    
    
    function complete(response){
        return response.data;
    };
    
    function failed(err){
        return err.status.statusText;
    };
}

