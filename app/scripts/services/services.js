listsApp.factory('Lists', function() {
  var lists = {};
  lists.query = function() {
    return [
      {id: 0, title: 'Films', items: [{text: 'Jaws', done: false}, {text: 'Tron', done: false}]},
      {id: 1, title: 'Games', items: [{text: 'GTA4', done: false}]}
    ];
  };

  lists.all = lists.query();

  return lists;
});
