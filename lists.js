function ListsCtrl($scope, $location) {
  $scope.lists = [
      {title: 'Films', items: [{text: 'Jaws', done: false}, {text: 'Tron', done: false}]},
      {title: 'Games', items: [{text: 'GTA4', done: false}]}
    ];

  console.log($location);

  $scope.addList = function() {
    $scope.lists.push({title: $scope.listTitle, items: []});
    $scope.todoTitle = '';
  };

  $scope.removeList = function(index) {
    $scope.lists.splice(index, 1);
  };

  $scope.showItems = function(list) {
    console.log(list);
    $scope.currentList = list;
  };

  $scope.addItem = function() {
    $scope.currentList.items.push({text: $scope.itemText, done: false});
  };

  $scope.removeItem = function(index) {
    $scope.currentList.items.splice(index, 1);
  };
}