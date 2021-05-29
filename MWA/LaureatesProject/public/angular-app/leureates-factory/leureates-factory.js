angular.module('laureates').factory('LaureatesFactory',LaureatesFactory);

function LaureatesFactory($http){
    return{
        getAllLaureates:getAllLaureates,
        getOne:getOne,
        addOne:addOne,
        deleteOne:deleteOne,
        search:search
    }

    function getAllLaureates(count){
        return $http.get('/api/laureates/?count'+count).then(complete).catch(failed);
    }
    function addOne(winner){
        return $http.post('/api/laureates',winner).then(complete).catch(failed);
    }

    function getOne(id){
        return $http.get('/api/laureates/'+id).then(complete).catch(failed);
    }
    function deleteOne(id){
        return $http.delete('/api/laureates/'+id).then(complete).catch(failed);
    }
    function search(cat){
        return $http.delete('/api/laureates/?cat='+cat).then(complete).catch(failed);
    }





    function complete(respons){
        return respons.data;
    }
    function failed(err){
        return err.status.statusText;
    }

}