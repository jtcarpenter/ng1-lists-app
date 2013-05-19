listsApp.controller('ItemsController', function(Lists, $scope, $routeParams) {
  $scope.$parent.list = Lists.all[$routeParams.id];

  $scope.addItem = function() {
    Lists.all[$scope.list.id].items.push({text: $scope.itemText, done: false});
  };

  $scope.removeItem = function(index) {
    Lists.all[$scope.list.id].items.splice(index, 1);
    console.log(Lists.all);
  };
});