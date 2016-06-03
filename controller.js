function TestController() {
    this.donnees = [
        {donnee1: "donnee1", donnee2: "donnee2"},
        {donnee1: "donnee3", donnee2: "donnee4"},
        {donnee1: "donnee5", donnee2: "donnee6"},
        {donnee1: "donnee7", donnee2: "donnee8"}
    ];
    this.donnee = {valeur: "test1234"};
}

angular
    .module('app')
    .controller('TestController', TestController);