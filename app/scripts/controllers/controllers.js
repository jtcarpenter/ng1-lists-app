'use strict';

app.controller('ListsController', ['$scope', 'ListsLoader', 'List', '$location',
    function($scope, ListsLoader, List, $location) {
  $scope.lists = ListsLoader();

  $scope.addList = function() {
    $scope.list = new List($scope.newList);
    $scope.list.$save(function(list) {
      $scope.lists.push(list);
      $location.path('/list/' + list.id);
      $scope.newList = undefined;
    });
  };

  $scope.removeList = function(index, list) {
    var oldListId = list.id;
    list.$delete(function() {
      $scope.lists.splice(index, 1);
      if ($location.path() === '/list/' + oldListId) {
        $location.path('/');
      }
    });
  };
}]);

app.controller('ItemsController', ['ListLoader', '$scope', 'List', '$routeParams',
    '$location', function(ListLoader, $scope, List, $routeParams, $location) {
  $scope.list = ListLoader();

  $scope.addItem = function(list) {
    list.items = list.items || [];
    list.items.push({text: $scope.itemText, done: false});
    list.$save(function(list) {
      $scope.list = list;
      $location.path('/list/' + list.id);
      $scope.itemText = undefined;
    });
  };

  $scope.removeItem = function(index, list) {
    list.items.splice(index, 1);
    list.$save(function() {
      $location.path('/list/' + list.id);
    });
  }
}]);