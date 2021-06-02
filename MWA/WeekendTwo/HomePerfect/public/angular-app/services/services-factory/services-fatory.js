angular.module('homePerfect').factory("ServicesFactory",ServicesFactory);


function ServicesFactory($http){
    return{
        getOneService: getOneService,
        getAllServices: getAllServices,
        addService:addService,
        deleteService:deleteService,
        replaceService:replaceService,
        partialUpdateService:partialUpdateService 
    };
    function getAllServices(){
        return $http.get('/api/services').then(complete).catch(failed);
    };
    function getOneService(id){
        return $http.get('/api/services/'+id).then(complete).catch(failed);
    
    };
    function addService(service){
        return $http.post('/api/services/',service).then(complete).catch(failed);
    
    };
    function deleteService(id){
        return $http.delete('/api/services/'+id).then(complete).catch(failed);
    
    };
    function replaceService(id,service){
        return $http.put('/api/services/'+id,service).then(complete).catch(failed);
    
    };
    function partialUpdateService(id,service){
        return $http.patch('/api/services/'+id,service).then(complete).catch(failed);
    
    };
    
    
    
    function complete(response){
        return response.data;
    };
    
    function failed(err){
        return err.status.statusText;
    };
}
