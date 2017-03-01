var tipCalculator= angular.module('tipCalculator', []);

tipCalculator.controller('mainController',['$scope', function($scope) {
  $scope.cost;
  $scope.percentage= 0;
  $scope.tip = function() {
    return $scope.cost * ($scope.percentage / 100);
    };
  
  $scope.total = function() {
    return $scope.cost + $scope.tip();
    };
  
  $scope.isVisible= false;
  $scope.showHide= function() {
    $scope.isVisible= $scope.isVisible ? false : true;
  };
  
}]);