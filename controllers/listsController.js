listsApp.controller('ListsController', function(Lists, $scope) {
  $scope.lists = Lists.all;

  $scope.addList = function() {
    var id = Lists.all.length;
    Lists.all.push({id: id, title: $scope.listTitle, items: []});
    $scope.listsMessage = 'New list \'' + $scope.listTitle + '\' added';
    $scope.listTitle = '';
  };

  $scope.removeList = function(index, list) {
    if ($scope.list === Lists.all[index]) $scope.list = undefined;
    Lists.all.splice(index, 1);
  };
});