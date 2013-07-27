'use strict';

var directives = angular.module('listsApp.directives', []);

directives.directive('flash', ['$rootScope', function($rootScope) {
  return {
    link: function(scope, element, attrs) {
      scope.$watch('flash', function(message) { 
        if (typeof message !== 'undefined' && message !== '') {
          element.addClass('in');
          element.removeClass('out');
          setTimeout(function() {
            element.addClass('out');
          }, 2000);
        }
      });
    }
  };
}]);
