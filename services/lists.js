listsApp.factory('Lists', function() {
  var lists = {};
  lists.query = function() {
    return [
      {title: 'Films', items: [{text: 'Jaws', done: false}, {text: 'Tron', done: false}]},
      {title: 'Games', items: [{text: 'GTA4', done: false}]}
    ];
  };
  return lists;
});