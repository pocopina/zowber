'use strict';

/**
 * @ngdoc directive
 * @name zowberApp.directive:blogHeader
 * @description
 * # blogHeader
 */
angular.module('zowberApp')
  .directive('blogHeader', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element) {
        element.text('this is the blogHeader directive');
      }
    };
  });
