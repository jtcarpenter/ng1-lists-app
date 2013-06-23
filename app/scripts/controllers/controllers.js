'use strict';

app.controller('ListsController', ['$scope', 'ListsLoader', 'List', '$location',
    function($scope, ListsLoader, List, $location) {
  $scope.lists = ListsLoader();

  $scope.addList = function() {
    $scope.list = new List($scope.newList);
    $scope.list.$save(function(list) {
      $scope.lists.push(list);
      $location.path('/list/' + list._id);
      $scope.newList = undefined;
    });
  };

  $scope.removeList = function(index, list) {
    var oldListId = list._id;
    list.$delete({id: oldListId}, function() {
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

  $scope.addItem = function() {
    $scope.list.items = $scope.list.items || [];
    $scope.list.items.push({text: $scope.itemText, done: false});
    var id = $scope.list._id;
    $scope.list.$save({id: id}, function(list) {
      $scope.list = ListLoader();
      $location.path('/list/' + id);
      $scope.itemText = undefined;
    });
  };

  $scope.checkItem = function(index) {
    console.log($scope.list.items[index].done);
    var id = $scope.list._id;
    $scope.list.$save({id: id}, function(list) {
      console.log('saved update to item');
    });
  };

  $scope.removeItem = function(index) {
    $scope.list.items.splice(index, 1);
    var id = $scope.list._id;
    $scope.list.$save({id: id}, function() {
      $scope.list = ListLoader();
      $location.path('/list/' + id);
    });
  }
}]);