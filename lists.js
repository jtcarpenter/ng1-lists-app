var listsAppModule = listsAppModule || angular.module('listsApp', []);

listsAppModule.controller('ListsController', function($scope, $location) {
  $scope.lists = [
      {title: 'Films', items: [{text: 'Jaws', done: false}, {text: 'Tron', done: false}]},
      {title: 'Games', items: [{text: 'GTA4', done: false}]}
    ];

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
    var oldTitle = (typeof oldValue !== 'undefined')? oldValue.title : undefined;
    var newTitle = (typeof newValue !== 'undefined')? newValue.title : undefined;
    console.log('Watching currentList, changed from \'' + oldTitle + '\' to \'' + newTitle + '\'');
  }
  // TEMPEND:
});