var listsAppModule = listsAppModule || angular.module('listsApp', []);

listsAppModule.controller('ItemsController', function($scope, $location) {

  $scope.addItem = function() {
    $scope.currentList.items.push({text: $scope.itemText, done: false});
  };

  $scope.removeItem = function(index) {
    $scope.currentList.items.splice(index, 1);
  };
});