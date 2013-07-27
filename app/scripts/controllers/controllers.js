'use strict';

app.controller('MainCtrl', ['$scope',function($scope) {
  $scope.title = 'Lists App';
}]);

app.controller('ListsCtrl', ['$scope', '$rootScope', 'ListsLoader', 'List', '$location', '$route',
    function($scope, $rootScope, ListsLoader, List, $location, $route) {
  $scope.lists = ListsLoader();
  $scope.listPredicate = 'title';
  $scope.listReverse = false;
  $scope.$route = $route;

  $scope.reload = function() {
    $scope.lists = ListsLoader();
    $route.reload();
  }

  $scope.addList = function() {
    $scope.list = new List($scope.newList);
    $scope.list.$save(function(data) {
      if (data.error) {
        // TODO: Handle case that list couldn't be added (return false)
      }
      $scope.lists.push(data);
      $location.path('/list/' + data._id);
      $scope.newList = undefined;
    });
  };

  $scope.removeList = function(list) {
    if (!confirm('Are you sure you want to remove \'' + list.title + '\'?')) return false;
    var oldListId = list._id;
    var index = $scope.lists.indexOf(list);
    list.$delete({id: oldListId}, function(data) {
      if (data.error) {
        // TODO: Handle case that list couldn't be removed (return false)
      }
      $scope.lists.splice(index, 1);
      if ($location.path() === '/list/' + oldListId) {
        $location.path('/');
      }
    });
  };
}]);

app.controller('ItemsCtrl', ['$scope', '$rootScope', 'ListLoader', 'List', '$routeParams',
    '$location', function($scope, $rootScope, ListLoader, List, $routeParams, $location) {
  $scope.list = ListLoader();
  $scope.itemPredicate = 'text';
  $scope.itemReverse = false;

  $scope.addItem = function() {
    $scope.list.items = $scope.list.items || [];
    $scope.list.items.push({text: $scope.itemText, done: false, created: new Date(), modified: new Date()});
    var id = $scope.list._id;
    
    List.save({id: id}, $scope.list, function(data){
      $scope.itemText = undefined;
      if (data.error) {
        // TODO: Handle case that list couldn't be edited (remove list?)
      }
      $scope.list.modified = data.modified;
      $scope.list.items = data.items;
    }, function(data) {
      console.log(data);
    });
  };

  $scope.checkItem = function(item) {
    var id = $scope.list._id;
    item.modified = new Date();
    List.save({id: id}, $scope.list, function(data){
      if (data.error) {
        // TODO: Handle case that list couldn't be checked (toggle back item?, return false)
      }
      $scope.list.modified = data.modified;
      $scope.list.items = data.items;
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
      if (data.error) {
        // TODO: Handle case that list couldn't be edited (remove list?)
      }
      $scope.list.modified = data.modified;
      $scope.list.items = data.items;
    }, function(data) {
      console.log(data);
    });
  }
}]);