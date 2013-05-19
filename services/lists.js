listsApp.factory('Lists', function() {
  var lists = {};
  lists.query = function() {
    return [
      {id: 0, title: 'Films', items: [{text: 'Jaws', done: false}, {text: 'Tron', done: false}]},
      {id: 1, title: 'Games', items: [{text: 'GTA4', done: false}]}
    ];
  };
  // TODO: listsController and itemsController not sharing same date
  // TODO: should be able to return single list by id
  // TODO: should update when a list is removed
  return lists;
});