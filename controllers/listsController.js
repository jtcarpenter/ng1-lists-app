listsApp.controller('ListsController', function(Lists, $scope) {
  $scope.lists = Lists.all;

  $scope.addList = function() {
    Lists.all.push({title: $scope.listTitle, items: []});
    $scope.todoTitle = '';
  };

  $scope.removeList = function(index, list) {
    // TODO:  if list is currently showing, items should be removed
    Lists.all.splice(index, 1);
  };
});