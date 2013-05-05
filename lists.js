function ListsCtrl($scope, $location) {
  $scope.lists = [
      {title: 'Films', items: [{text: 'Jaws', done: false}, {text: 'Tron', done: false}]},
      {title: 'Games', items: [{text: 'GTA4', done: false}]}
    ];

  console.log($location);

  $scope.addList = function() {
    $scope.lists.push({title: $scope.listTitle});
    $scope.todoTitle = '';
  };

  $scope.showItems = function(list) {
    console.log(list);
    $scope.currentList = list;
  };

  $scope.addItem = function() {
    $scope.currentList.items.push({text: $scope.itemText, done: false});
  };

  // $scope.remaining = function() {
  //   var count = 0;
  //   angular.forEach($scope.todos, function(todo) {
  //     count += todo.done ? 0 : 1;
  //   });
  //   return count;
  // };

  // $scope.archive = function() {
  //   var oldTodos = $scope.todos;
  //   $scope.todos = [];
  //   angular.forEach(oldTodos, function(todo) {
  //     if (!todo.done) $scope.todos.push(todo);
  //   });
  // };
}