'use strict';

var services = angular.module('listsApp.services', ['ngResource']);

// services.factory('List', ['$resource', function($resource) {
//   return $resource('/lists/:id', {id: '@id'});
// }]);

services.factory('Lists', function() {
//listsApp.factory('Lists', function() {
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
