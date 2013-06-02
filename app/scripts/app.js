'use strict';

var app = angular.module('listsApp', ['listsApp.services']);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
    when('/', {
      controller: 'ListsController',
      // resolve: {
      //   lists: function(ListsLoader) {
      //     return ListsLoader();
      //   }
      // }
    }).
    when('/list/:id', {
      controller: 'ItemsController',
      // resolve: {
      //   lists: function(ListsLoader) {
      //     return ListsLoader();
      //   }
      // },
      templateUrl: 'views/items.html'
    }).
    otherwise({
      redirectTo: '/'
    });
}]);
