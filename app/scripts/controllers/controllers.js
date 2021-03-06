(function () {
  'use strict';

  app.controller('MainCtrl', ['$scope', function($scope) {
    $scope.title = 'Lists';
    // 'state' is used to declare when list items are open
    $scope.state = '';

    $scope.open = function() {
      $scope.state = 'open';
    };

    $scope.close = function() {
      $scope.state = 'closed';
    };
  }]);

  app.controller('ListsCtrl', ['$scope', '$rootScope', 'ListsLoader', 'List', '$location', '$route',
      function($scope, $rootScope, ListsLoader, List, $location, $route) {
    $scope.lists = new ListsLoader();
    $scope.listPredicate = 'title';
    $scope.listReverse = false;
    $scope.$route = $route;
    $scope.$parent.state = 'closed';

    $scope.reload = function() {
      $scope.lists = new ListsLoader();
      $route.reload();
    };

    $scope.addList = function() {
      $scope.list = new List($scope.newList);
      $scope.list.$save(function(data) {
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
        $scope.lists.splice(index, 1);
        if ($location.path() === '/list/' + oldListId) {
          $location.path('/');
        }
      });
    };
  }]);

  app.controller('ItemsCtrl', ['$scope', '$rootScope', 'ListLoader', 'List', '$routeParams', 'ItemModel',
     function($scope, $rootScope, ListLoader, List, $routeParams, ItemModel) {
    $scope.list = new ListLoader();
    $scope.itemPredicate = 'text';
    $scope.itemReverse = false;
    $scope.$parent.$parent.state = 'open';

    $scope.addItem = function() {
      $scope.list.items = $scope.list.items || [];
      var itemModel = new ItemModel($scope.itemText);
      $scope.list.items.push(itemModel);
      var id = $scope.list._id;
      
      List.save({id: id}, $scope.list, function(data){
        $scope.itemText = undefined;
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
        $scope.list.modified = data.modified;
        $scope.list.items = data.items;
      }, function(data) {
        console.log(data);
      });
    };
  }]);
}());
