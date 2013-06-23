var express = require('express'),
  app = express(),
  port = parseInt(process.env.PORT, 10) || 8080,
  mongodb = require('mongodb'),
  ObjectId = require('mongodb').ObjectID,
  dbName = 'lists-app';

app.configure(function() {
  app.use(express.methodOverride());
  app.use(express.bodyParser());
  app.use(express.static(__dirname + '/app'));
  app.use(app.router);
});

var lists;
var server = new mongodb.Server("127.0.0.1", 27017, {});
new mongodb.Db(dbName, server, {safe:false}).open(function (error, client) {
  if (error) throw error;
  console.log('connected to mongodb');
  lists = new mongodb.Collection(client, 'lists');
});

/*
 * Actions
 */

app.get('/lists', function(req, res) {
  console.log('/lists GET:');
  var params = {};
  setTimeout(function(){
  lists.find(params).toArray(function(err, docs) {
    res.send(docs);
  });
},2000);
});

app.get('/lists/:id', function(req, res) {
  console.log('/lists/' + req.params.id) + ' GET:';
  var params = {};
  params._id = ObjectId(req.params.id);
  lists.findOne(params, function(err, doc) {
    res.send(doc);
  });
});

app.post('/lists', function(req, res) {
  console.log('/lists/ POST: title->' + req.body.title);
  var list = {};
  list.title = req.body.title || '';
  list.items = [];

  lists.insert(list);

  res.send(list);
});

app.post('/lists/:id', function(req, res) {
  console.log('/lists/' + req.params.id +' POST: title->' + req.body.title + ' items->' + req.body.items);
  var params = {},
    list = {};
  params._id = ObjectId(req.params.id);
  list.title = req.body.title || '';
  list.items = req.body.items || [];

  lists.findOne(params, function(err, doc) {
    lists.update(params, {$set: {items: list.items}});
    res.send(list);
  });
});

app.del('/lists/:id', function(req, res) {
  console.log('/lists/' + req.params.id + ' DEL:');
  var params = {};
  params.id = ObjectId(req.params.id);

  lists.remove(params, function(err, doc) {
    res.send('{"status":"200"}');
  });
});

app.listen(port);
console.log('Now serving the app at http://localhost' + port + '/app');