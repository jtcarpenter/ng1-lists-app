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

var lists, nextId;
var server = new mongodb.Server("127.0.0.1", 27017, {});
new mongodb.Db(dbName, server, {safe:false}).open(function (error, client) {
  if (error) throw error;
  console.log('connected to mongodb');
  lists = new mongodb.Collection(client, 'lists');
  lists.find().toArray(function(err, docs) {
    nextId = docs.length;
  });
});

/*
 * Actions
 */

app.get('/lists', function(req, res) {
  lists.find().toArray(function(err, docs) {
    res.send(docs);
  });
});

app.get('/lists/:id', function(req, res) {
  var id = parseInt(req.params.id, 10);
  console.log('Requesting list with id', id);
  lists.findOne({id: id}, function(err, doc) {
    res.send(doc);
  });
});

app.post('/lists', function(req, res) {
  console.log('posted to /lists ' + req.body.title + ' nextId: ' + nextId);
  var list = {};
  list.id = nextId++;
  list.title = req.body.title;
  list.items = [];

  lists.insert(list);

  res.send(list);
});

app.post('/lists/:id', function(req, res) {
  var id = parseInt(req.params.id, 10);
  console.log('posted to /lists/:id ' + req.body.title);
  var list = {};
  list.id = req.params.id;
  list.title = req.body.title;
  list.items = req.body.items;

  lists.findOne({id: id}, function(err, doc) {
    lists.update({id: id}, {$set: {items: list.items}});
    res.send(list);
  });
});

app.del('/lists/:id', function(req, res) {
  var id = parseInt(req.params.id, 10);
  console.log('delete list with id ' + req.params.id);

  lists.remove({id: id}, function(err, doc) {
    console.log(doc);
    res.send('ok');
  });
});

app.listen(port);
console.log('Now serving the app at http://localhost' + port + '/app');