'use strict';

var app = angular.module('listsApp', ['listsApp.services', 'listsApp.directives']);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
    when('/', {
      controller: 'ListsCtrl'
    }).
    when('/list/:id', {
      controller: 'ItemsCtrl',
      templateUrl: 'views/items.html'
    }).
    otherwise({
      redirectTo: '/'
    });
}]);
