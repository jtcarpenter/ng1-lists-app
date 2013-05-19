listsApp.controller('ListsController', function(Lists, $scope) {
  $scope.lists = Lists.query();

  $scope.addList = function() {
    $scope.lists.push({title: $scope.listTitle, items: []});
    $scope.todoTitle = '';
  };

  $scope.removeList = function(index, list) {
    $scope.lists.splice(index, 1);
  };
});