(function () {
'use strict';

angular.module('myFirstApp', [])

.controller('MyFirstController', function ($scope) {
  $scope.data= "";
  $scope.output = "";
  $scope.get_string = function () {
    var string = process($scope.data);
    $scope.output = string;
  };
  var string = "";

  function process(data) {
    

    var array = data.split(" ")
    console.log("data: ",data)
    console.log("array: ",array)
    if (data==""){
      string = "Please enter data first"
    } else if (array.length > 3) {
      string = "Too much!"
    }    else {
      string = "Enjoy"
    };
    
    return string;
  };
});

})();
