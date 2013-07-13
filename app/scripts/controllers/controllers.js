'use strict';

app.controller('MainCtrl', ['$scope', function($scope) {
  $scope.title = 'Lists App';
}]);

app.controller('ListsCtrl', ['$scope', 'ListsLoader', 'List', '$location', '$route',
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
    if (!confirm('Are you sure you want to remove \'' + list.title + '\'?')) return false;
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

app.controller('ItemsCtrl', ['$scope', 'ListLoader', 'List', '$routeParams',
    '$location', function($scope, ListLoader, List, $routeParams, $location) {
  $scope.list = ListLoader();
  $scope.itemPredicate = 'text';
  $scope.itemReverse = false;

  $scope.addItem = function() {
    $scope.list.items = $scope.list.items || [];
    $scope.list.items.push({text: $scope.itemText, done: false, created: new Date(), modified: new Date()});
    var id = $scope.list._id;
    List.save({id: id}, $scope.list, function(data){
      $scope.itemText = undefined;
      // TODO: Update with data, if it's ahead of what's in client
      //$scope.list = data;
      //$scope.$apply();
    }, function(data) {
      console.log(data);
    });
  };

  $scope.checkItem = function(item) {
    var id = $scope.list._id;
    item.modified = new Date();
    List.save({id: id}, $scope.list, function(data){
      // TODO: Update with data, if it's ahead of what's in client
    }, function(data) {
      console.log(data);
    });
  };

  $scope.removeItem = function(item) {
    if (!confirm('Are you sure you want to remove \'' + item.text + '\'?')) return false;
    var index = $scope.list.items.indexOf(item);
    $scope.list.items.splice(index, 1);
    var id = $scope.list._id;
    List.save({id: id}, $scope.list, function(data){
      // TODO: Update with data, if it's ahead of what's in client
    }, function(data) {
      console.log(data);
    });
  }
}]);