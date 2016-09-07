// this is called a getter

var MainController = function MainController($scope) {

    var person ={
        firstName:"Abdulla",
        lastName:"chowdhury",
        imageSrc : "./img/1.jpg"
    };


    $scope.message = 'hello anguler';
    $scope.person = person;

};

angular
    .module('macPro')
    .controller('MainController', MainController);






