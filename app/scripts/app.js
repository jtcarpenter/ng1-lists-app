'use strict';

var app = angular.module('listsApp', ['listsApp.services', 'listsApp.directives']);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
    when('/', {
      controller: 'ListsController'
    }).
    when('/list/:id', {
      controller: 'ItemsController',
      resolve: {
        list: function(ListLoader) {
          return ListLoader();
        }
      },
      templateUrl: 'views/items.html'
    }).
    otherwise({
      redirectTo: '/'
    });
}]);
