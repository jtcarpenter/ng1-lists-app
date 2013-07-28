'use strict';

var directives = angular.module('listsApp.directives', []);

directives.directive('myDir', ['$rootScope', function($rootScope) {
  return {
    link: function(scope, element, attrs) {
      // Directive code here
    }
  };
}]);
