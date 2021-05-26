
angular.module('meanGames').controller('GameController',GameController);


function GameController(GameDataFactory,$routeParams){
    const vm=this;
    const gameId=$routeParams.id;
    vm.title="One Game";
    // $http.get('/api/games/'+gameId).then((response)=>{
    //     vm.game=response.data;
    // })
    GameDataFactory.getOneGame(gameId).then((response)=>{
        vm.game=response;
    })
}