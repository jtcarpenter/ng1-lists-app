var express = require('express'),
  app = express(),
  port = parseInt(process.env.PORT, 10) || 8080,
  mongodb = require('mongodb'),
  dbName = 'lists-app';

app.configure(function() {
  app.use(express.methodOverride());
  app.use(express.bodyParser());
  app.use(express.static(__dirname + '/app'));
  app.use(app.router);
});

var listsMap;
// listsMap = [
//   {
//     id: 0, 
//     title: 'Films', 
//     items: [
//       {
//         text: 'Jaws', 
//         done: false
//       }, 
//       {
//         text: 'Tron', 
//         done: false
//       }
//     ]
//   },
//   {
//     id: 1, 
//     title: 'Games', 
//     items: [
//       {
//         text: 'GTA4', 
//         done: false
//       }
//     ]
//   }
// ];

var server = new mongodb.Server("127.0.0.1", 27017, {});
new mongodb.Db(dbName, server, {safe:false}).open(function (error, client) {
  if (error) throw error;
  console.log('connected to mongodb');
  var lists = new mongodb.Collection(client, 'lists');
  lists.find({}, {limit:10}).toArray(function(err, docs) {
    listsMap = docs;
  });
});

var nextId = 2;
function indexById(arr, id) {
  for (var i = 0, l = arr.length; i < l; i++) {
    var arrId = typeof arr[i].id === 'number'? arr[i].id : parseInt(arr[i].id, 10);
    if (arrId === parseInt(id, 10)) {
      return i;
    }
  }
}

/*
 * Actions
 */

app.get('/lists', function(req, res) {
  // Simulate delay in server
  // TODO: Implement loading... bar
  setTimeout(function() {
    res.send(listsMap);
  }, 500);
});

app.get('/lists/:id', function(req, res) {
  console.log('Requesting list with id', req.params.id);

  var index = indexById(listsMap, req.params.id);

  res.send(listsMap[index]);
});

app.post('/lists', function(req, res) {
  console.log('posted to /lists ' + req.body.title + ' nextId: ' + nextId);
  var list = {};
  list.id = nextId++;
  list.title = req.body.title;
  list.items = [];
  listsMap.push(list);

  res.send(list);
});

app.post('/lists/:id', function(req, res) {
  console.log('posted to /lists/:id ' + req.body.title);
  var list = {};
  list.id = req.params.id;
  list.title = req.body.title;
  list.items = req.body.items;

  var index = indexById(listsMap, req.params.id);
  listsMap[index] = list;

  res.send(list);
});

app.del('/lists/:id', function(req, res) {
  console.log('delete list with id ' + req.params.id);

  var index = indexById(listsMap, req.params.id);

  listsMap.splice(index, 1);

  res.send('ok');
});

app.listen(port);
console.log('Now serving the app at http://localhost' + port + '/app');