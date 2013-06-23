'use strict';

var services = angular.module('listsApp.services', ['ngResource']);

services.factory('List', ['$resource', function($resource) {
  return $resource('/lists/:id');
}]);

services.factory('ListsLoader', ['List', function(List) {
  return function() {
    return List.query();
  };
}]);

services.factory('ListLoader', ['List', '$route', function(List, $route) {
  return function() {
    return List.get({id: $route.current.params.id});
  };
}]);
