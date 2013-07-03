'use strict';

app.controller('ListsController', ['$scope', 'ListsLoader', 'List', '$location', '$route',
    function($scope, ListsLoader, List, $location, $route) {
  $scope.lists = ListsLoader();
  $scope.listPredicate = 'title';
  $scope.listReverse = false;
  $scope.$route = $route;

  $scope.addList = function() {
    $scope.list = new List($scope.newList);
    $scope.list.$save(function(list) {
      $scope.lists.push(list);
      $location.path('/list/' + list._id);
      $scope.newList = undefined;
    });
  };

  $scope.removeList = function(list) {
    var oldListId = list._id;
    var index = $scope.lists.indexOf(list);
    list.$delete({id: oldListId}, function() {
      $scope.lists.splice(index, 1);
      if ($location.path() === '/list/' + oldListId) {
        $location.path('/');
      }
    });
  };
}]);

app.controller('ItemsController', ['$scope', 'ListLoader', 'List', '$routeParams',
    '$location', function($scope, ListLoader, List, $routeParams, $location) {
  $scope.list = ListLoader();
  $scope.itemPredicate = 'text';
  $scope.itemReverse = false;

  $scope.addItem = function() {
    $scope.list.items = $scope.list.items || [];
    $scope.list.items.push({text: $scope.itemText, done: false, created: new Date()});
    var id = $scope.list._id;
    List.save({id: id}, $scope.list, function(data){
      $scope.itemText = undefined;
    }, function(data) {
      console.log(data);
    });
  };

  $scope.checkItem = function(index) {
    var id = $scope.list._id;
    List.save({id: id}, $scope.list, function(data){
      // success
    }, function(data) {
      console.log(data);
    });
  };

  $scope.removeItem = function(item) {
    var index = $scope.list.items.indexOf(item);
    $scope.list.items.splice(index, 1);
    var id = $scope.list._id;
    List.save({id: id}, $scope.list, function(data){
      // success
    }, function(data) {
      console.log(data);
    });
  }
}]);