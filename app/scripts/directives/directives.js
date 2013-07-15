'use strict';

var directives = angular.module('listsApp.directives', []);

directives.directive('flash', ['$rootScope', function($rootScope) {
  return {
    link: function(scope, element, attrs) {
      scope.$watch('flash', function(message) { 
        if (typeof message !== 'undefined' && message !== '') {
          // TODO: fade out animation and reset
          setTimeout(function() {
            element.text('');
          }, 2000);
        }
      }); 
    }
  };
}]);