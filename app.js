(function ()  {
  'use strict'

angular.module('myFirstApp', [])

.controller('MyFirstController', function ($scope) {
  $scope.name = "jacob";
  $scope.totalValue = 0;
  /*$scope.sayHello = function () {
    return "Hello Coursera!";
  };*/

  $scope.displayNumeric = function(){
    var totalNameValue = calculatNumericForString($scope.name);
    $scope.totalValue = totalNameValue;
  };

  function calculatNumericForString(string){
    var totalStringValue = 0;
    for (var i = 0; i < string.length; i++){
      totalStringValue += string.charCodeAt(i);
      //totalStringValue += i+1;
    }

    return totalStringValue;
  };
});

})();
