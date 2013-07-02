var express = require('express'),
  app = express(),
  port = parseInt(process.env.PORT, 10) || 8080,
  mongodb = require('mongodb'),
  ObjectId = require('mongodb').ObjectID,
  dbName = 'lists-app',
  http = require('http'),
  auth = require('http-auth'),
  config = require('./config.json'),
  basicAuth = auth({
    authRealm: config.authRealm,
    authFile: __dirname + '/htpasswd',
    authType: 'digest'
  });

function authorise(req, res, next) {
    basicAuth.apply(req, res, function(username) {
      console.log("user authenticated");
      next();
    });
}

app.configure(function() {
  app.use(authorise);
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
  lists.find(params).toArray(function(err, docs) {
    // TODO: Remove Timeout
    setTimeout(function(){
      res.send(docs);
    }, 500);
  });
});

app.get('/lists/:id', function(req, res) {
  console.log('/lists/' + req.params.id) + ' GET:';
  var params = {};
  params._id = ObjectId(req.params.id);
  lists.findOne(params, function(err, doc) {
    // TODO: Remove Timeout
    setTimeout(function(){
      res.send(doc);
    }, 500);
  });
});

app.post('/lists', function(req, res) {
  console.log('/lists/ POST: title->' + req.body.title);
  var list = {};
  list.title = req.body.title || '';
  list.items = [];
  list.created = new Date();
  list.modified = new Date();

  lists.insert(list);

  res.send(list);
});

app.post('/lists/:id', function(req, res) {
  console.log('/lists/' + req.params.id +' POST: title->' + req.body.title + ' items->' + req.body.items);
  var params = {},
    list = {};
  params._id = ObjectId(req.params.id);
  items = req.body.items || [];
  modified = new Date();

  lists.findOne(params, function(err, doc) {
    lists.update(params, {$set: {items: items, modified: modified}});
    res.send(list);
  });
});

app.del('/lists/:id', function(req, res) {
  console.log('/lists/' + req.params.id + ' DEL:');
  var params = {};
  params._id = ObjectId(req.params.id);

  lists.remove(params, function(err, doc) {
    res.send('{"status":"200"}');
  });
});

app.listen(port);
console.log('Now serving the app at http://localhost' + port + '/app');