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
  var spinnerFrame;
  $httpProvider.defaults.headers.common['X-Blog-Version'] = '1.0';
  $httpProvider.defaults.transformRequest.unshift(function (req) {
    // Intercept request
    spinner = angular.element(document.getElementById('spinner'));
    spinnerFrame = angular.element(document.getElementById('spinner-frame'));
    spinner.removeClass('frame').addClass('spin');
    return req;
  });

  $httpProvider.defaults.transformResponse.push(function (res) {
    // Intercept response
    if (spinner) {
      spinner.removeClass('spin').addClass('frame');
    }
    return res;
  });

  $httpProvider.responseInterceptors.push(['$q', '$window', '$rootScope', function ($q, $window, $rootScope) {
    // Intercept response
    return function (promise) {
      return promise.then(function(res){
          return res;
        }, function(res) {
        if (res.status !== 200) {
          var flash = res.status;
          if (res.data.error) flash = res.data.error;
          $rootScope.flash = flash;
        } 
        return $q.reject(res);
      });
    }; 
  }]);
}]);
