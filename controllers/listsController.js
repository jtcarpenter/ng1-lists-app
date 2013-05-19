listsApp.controller('ListsController', function(Lists, $scope, $location) {
  $scope.lists = Lists.query();
  console.log($location);

  $scope.addList = function() {
    $scope.lists.push({title: $scope.listTitle, items: []});
    $scope.todoTitle = '';
  };

  $scope.removeList = function(index, list) {
    if (list === $scope.currentList) $scope.currentList = null;
    $scope.lists.splice(index, 1);
  };

  $scope.showItems = function(list) {
    console.log(list);
    $scope.currentList = list;
  };

  // TEMPSTART:
  $scope.$watch('currentList', currentListWatchHandler);

  function currentListWatchHandler(newValue, oldValue, scope) {
    var oldTitle = (typeof oldValue !== 'undefined' && oldValue !== null)? oldValue.title : undefined;
    var newTitle = (typeof newValue !== 'undefined' && newValue !== null)? newValue.title : undefined;
    console.log('Watching currentList, changed from \'' + oldTitle + '\' to \'' + newTitle + '\'');
  }
  // TEMPEND:
});