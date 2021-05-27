angular.module('meanGames').controller('GamesController', GamesController);


function GamesController(GameDataFactory) {
    const vm = this;
    vm.title = "Mean Games App";
    vm.isSubmitted = false;
    GameDataFactory.getAllGames().then((response) => {
        vm.games = response;
    })

    vm.addGame = () => {
        const newGame = {
            title: vm.newGameTitle,
            price: vm.newGamePrice,
            rate: vm.newGameRating,
            year: vm.newGameYear,
            minPlayers: vm.newGameMinPlayers,
            maxPlayers: vm.newGameMaxPlayers,
            minAge: vm.newGameMinAge,
            designers: vm.newGameDesigner

        };
        if (vm.gameForm.$valid)
            GameDataFactory.addGame(newGame).then((response) => {
                console.log('GameSaved');
                $route.reload()
            }).catch((err) => {
                console.log(err);
            });
        else
            vm.isSubmitted = true;



    }
}