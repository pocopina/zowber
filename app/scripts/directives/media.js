'use strict';

/**
 * @ngdoc directive
 * @name zowberApp.directive:media
 * @description
 * # media
 */
angular.module('zowberApp')
  .directive('media', function () {
    return {
      templateUrl: 'views/media.html',
      restrict: 'E'
    };
  });
