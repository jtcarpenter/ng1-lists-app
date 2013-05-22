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
    console.log(Lists.all);
  };
});

listsApp.controller('ItemsController', function(Lists, $scope, $routeParams) {
  $scope.$parent.list = Lists.all[$routeParams.id];
  console.log($scope.$parent.list);

  $scope.addItem = function() {
    Lists.all[$scope.list.id].items.push({text: $scope.itemText, done: false});
    $scope.itemsMessage = '\'' + $scope.itemText + '\' added to list';
    $scope.itemText = '';
  };

  $scope.removeItem = function(index) {
    Lists.all[$scope.list.id].items.splice(index, 1);
  };
});