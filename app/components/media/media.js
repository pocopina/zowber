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
      templateUrl: 'components/media/media.html',
      restrict: 'E'
    };
  });
