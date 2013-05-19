listsApp.controller('ListsController', function(Lists, $scope) {
  $scope.lists = Lists.all;

  $scope.addList = function() {
    Lists.all.push({title: $scope.listTitle, items: []});
    $scope.todoTitle = '';
  };

  $scope.removeList = function(index, list) {
    if ($scope.list === Lists.all[index]) $scope.list = undefined;
    Lists.all.splice(index, 1);
  };
});