var express = require('express'),
  app = express(),
  port = parseInt(process.env.PORT, 10) || 8080;

app.configure(function() {
  app.use(express.methodOverride());
  app.use(express.bodyParser());
  app.use(express.static(__dirname + '/app'));
  app.use(app.router);
});

var listsMap = {
  '1': {
    'id': 1,
    'title': 'Films',
    'items': [
      {
        'text': 'Jaws',
        'done': false
      },
      {
        'text': 'Tron',
        'done': false
      }
    ]
  },
  '2': {
    'id': 2,
    'title': 'Games',
    'items': [
      {
        'text': 'GTA4',
        'done': false
      }
    ]
  }
}

app.get('/lists', function(req, res) {
  var lists = [];

  for (var key in listsMap) {
    lists.push(listsMap[key]);
  }

  // Simulate delay in server
  setTimeout(function() {
    res.send(lists);
  }, 500);
});

app.get('/lists/:id', function(req, res) {
  console.log('Requesting list with id', req.params.id);
  res.send(listsMap[req.params.id]);
});

app.post('/lists', function(req, res) {
  var list = {};
  list.id = next_id++;
  list.title = req.body.title;
  list.description = req.body.description;
  list.ingredients = req.body.ingredients;
  list.instructions = req.body.instructions;

  listsMap[list.id] = list;

  res.send(list);
});

app.post('/lists/:id', function(req, res) {
  var list = {};
  list.id = req.params.id;
  list.title = req.body.title;
  list.description = req.body.description;
  list.ingredients = req.body.ingredients;
  list.instructions = req.body.instructions;

  listsMap[list.id] = list;

  res.send(list);
});

app.listen(port);
console.log('Now serving the app at http://localhost' + port + '/app');