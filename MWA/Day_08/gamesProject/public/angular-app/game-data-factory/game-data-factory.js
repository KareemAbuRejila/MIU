angular.module('meanGames').factory("GameDataFactory",GameDataFactory)

function GameDataFactory($http){
    return{
        getOneGame: getOneGame,
        getAllGames: getAllGames,
        
    };
    function getOneGame(id){
        return $http.get('/api/games/'+id).then(complete).catch(failed);
    
    };
    function getAllGames(){
        return $http.get('/api/games').then(complete).catch(failed);
    };
    
    
    function complete(response){
        return response.data;
    };
    
    function failed(err){
        return err.status.statusText;
    };
}

