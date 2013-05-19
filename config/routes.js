listsApp.config(function($routeProvider) {
  $routeProvider.
    when('/', {
      controller: 'ListsController'
    }).
    when('/list/:id', {
      controller: 'ItemsController',
      templateUrl: 'views/items.html'
    }).
    otherwise({
      redirectTo: '/'
    });
});