angular.module('homePerfect').factory("ServicesFactory",ServicesFactory);


function ServicesFactory($http){
    return{
        getOneService: getOneService,
        getAllServices: getAllServices,
        
    };
    function getOneService(id){
        return $http.get('/api/services/'+id).then(complete).catch(failed);
    
    };
    function getAllServices(){
        return $http.get('/api/services').then(complete).catch(failed);
    };
    
    
    function complete(response){
        return response.data;
    };
    
    function failed(err){
        return err.status.statusText;
    };
}
