'use strict';

/**
 * @ngdoc directive
 * @name zowberApp.directive:socialLinks
 * @description
 * # socialLinks
 */
angular.module('zowberApp')
  .directive('socialLinks', function () {
    return {
      templateUrl: 'components/sociallinks/sociallinks.html',
      restrict: 'E'
    };
  });
