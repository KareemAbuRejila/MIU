angular.module('meanGames').factory("GameDataFactory",GameDataFactory)

function GameDataFactory($http){
    return{
        getOneGame: getOneGame,
        getAllGames: getAllGames,
        addGame:addGame,
        deleteGame:deleteGame,
        replaceGame:replaceGame,
        partialUpdateGame:partialUpdateGame
        
    };
    function getOneGame(id){
        return $http.get('/api/games/'+id).then(complete).catch(failed);
    
    };
    function getAllGames(){
        return $http.get('/api/games').then(complete).catch(failed);
    };
    function addGame(game){
        return $http.post('/api/games/',game).then(complete).catch(failed);

    }
    function deleteGame(id){
        return $http.delete('/api/games/'+id).then(complete).catch(failed);

    }
    function replaceGame(id,game){
        return $http.put('/api/games/'+id,game).then(complete).catch(failed);

    }
    function partialUpdateGame(id,game){
        return $http.patch('/api/games/'+id,game).then(complete).catch(failed);

    }
    
    
    function complete(response){
        return response.data;
    };
    
    function failed(err){
        return err.status.statusText;
    };
}

