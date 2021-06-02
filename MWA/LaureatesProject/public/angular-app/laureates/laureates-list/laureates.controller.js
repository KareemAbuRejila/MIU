angular.module('laureates').controller('JobsController', JobsController);


const _getAlllars = (LaureatesFactory, vm) => {
    LaureatesFactory.getAllLaureates(vm.countDb).then((lars) => {
        vm.lars = lars;
    }).catch((err) => {
        vm.err = "You Dont Have Any Laureate pulse Error:" + err
    });
}


function JobsController(LaureatesFactory, $routeParams,) {

    const vm = this;
    vm.title = "Nobel Prizes";
    vm.count = 5;
    vm.countDb = 5;
    _getAlllars(LaureatesFactory, vm);


    vm.addOne = () => {
        console.log('OnAddWinnerAngluar');
        const newWinner = {};
        newWinner.firstname = vm.newPerFirstname;
        newWinner.surmname = vm.newPerSurmname;
        newWinner.born = vm.newPerBorn;
        newWinner.gender = vm.newPerGender;
        newWinner.affiliation = vm.newPerGender;
        newWinner.bornCountry = vm.newPerAffiliation;
        newWinner.bornCity = vm.newPerBornCity;
        newWinner.year = vm.newPerYaer;
        newWinner.category = vm.newPerCategory;
        console.log("New Winner", newWinner);
        LaureatesFactory.addOne(newWinner).then((winer) => {
            if (winer) vm.message = "Success"
            _getAlllars(LaureatesFactory, vm,vm.countDb)
        }).catch((err) => {
            vm.err = "Cann't Add Error:" + err
        });
    }

    vm.nextUi = () => {
        if (vm.lars.length > vm.count)
            vm.count = vm.count + 5;
    }
    vm.prevUi = () => {
        if (vm.count >= 10)
            vm.count = vm.count - 5
    }
    vm.nextDb = () => {
        if (vm.lars.length > vm.count)
            vm.count = vm.count + 5;
    }
    vm.prevDb = () => {
        if (vm.count >= 10)
            vm.count = vm.count - 5
    }

    vm.searchDb=()=>{
        
        if(vm.searchTextDb){
            LaureatesFactory.search(vm.searchTextDb).then((resalt)=>{
                if(resalt&&resalt[0])
                vm.message=resalt[0].firstname;
            }).catch((err)=>{
                vm.err=err
            })
        }
    }
}

