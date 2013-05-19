listsApp.controller('ItemsController', function(Lists, $scope, $routeParams) {
  lists = Lists.query();
  $scope.list = lists[$routeParams.id];

  $scope.addItem = function() {
    $scope.list.items.push({text: $scope.itemText, done: false});
  };

  $scope.removeItem = function(index) {
    $scope.list.items.splice(index, 1);
  };
});