
angular.module('meanGames').controller('GameController',GameController);


function GameController(GameDataFactory,$routeParams){
    const vm=this;
    const gameId=$routeParams.id;
    vm.title="One Game";
    vm.isSubmitted=false;
    GameDataFactory.getOneGame(gameId).then((game)=>{
        vm.game=game;
        vm.rating=_starsRating(vm.game.rate);

        //For Replacing
        vm.replaceGamePrice=game.price;
        vm.replaceGameMinPlayers=game.minPlayers;
        vm.replaceGameMaxPlayers=game.maxPlayers;
        vm.replaceGameMinAge=game.minAge;


    });

    vm.deleteGame=()=>{
        console.log('On Delete Game');
        GameDataFactory.deleteGame(gameId).then((response)=>{
            console.log("Deleted");
            window.history.back();
        })
    }

    vm.replaceGame = () => {
        const newGame = {
            title: vm.game.title,
            price: vm.replaceGamePrice,
            rate: vm.game.rate,
            year: vm.game.year,
            minPlayers: vm.replaceGameMinPlayers,
            maxPlayers: vm.replaceGameMaxPlayers,
            minAge: vm.replaceGameMinAge,
            designers: vm.game.designers

        };
            GameDataFactory.replaceGame(gameId,newGame).then((response) => {
                console.log('GameUpdated');
                // $route.reload()
            }).catch((err) => {
                console.log(err);
            });
       



    }

}

const _starsRating=(stars)=>{
    return new Array(stars);
}