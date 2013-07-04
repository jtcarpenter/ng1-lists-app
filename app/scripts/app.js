'use strict';

var app = angular.module('listsApp', ['listsApp.services', 'listsApp.directives']);

app.config(['$routeProvider', '$httpProvider', function($routeProvider, $httpProvider) {
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

  var spinner;
  $httpProvider.defaults.headers.common['X-Blog-Version'] = '1.0'; // first thing we do when sending a request: pop a spinner 
  $httpProvider.defaults.transformRequest.unshift(function (req) {
    //spinner = angular.element('<h1>spinning...</h1>'); 
    //console.log(document.body);
    spinner = true;
    console.log('spin');
    return req; // return request unspoiled
  });
  // last thing we do when retrieving a response (before success() and the like): // hide the spinner.
  $httpProvider.defaults.transformResponse.push(function (res) {
    if (spinner) {
      //spinner.remove();
      spinner = false;
      console.log('spin remove');
    }
    return res; // return response unspoiled 
  });
}]);
