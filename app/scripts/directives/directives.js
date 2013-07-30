'use strict';

var directives = angular.module('listsApp.directives', []);

directives.directive('dir', function () {
  return {
    link: function (scope, elem, attrs) {
      // dir code
    }
  }
});
