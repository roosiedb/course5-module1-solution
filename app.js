(function() {
  'use strict';

  angular.module('LunchCheck', [])
  .controller('Controller1', function ($scope) {
    $scope.userInput = "";
    $scope.countItems = 0;
    $scope.message = "please enter data first";

    $scope.keyUp = function() {
      var totalItems = countItems($scope.userInput);
      $scope.countItems = totalItems;
    };
  });

  function countItems(string) {
    var itemsArray = string.split(',');
    var tmpCount = 0;
    for (var i=0; i<itemsArray.length; i++) {
      if (itemsArray[i].trim().length>0) {
        tmpCount++;
      }
    }
    return tmpCount;
  }

}) ();
