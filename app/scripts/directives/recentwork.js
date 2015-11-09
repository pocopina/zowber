'use strict';

/**
 * @ngdoc directive
 * @name zowberApp.directive:recentWork
 * @description
 * # recentWork
 */
angular.module('zowberApp')
  .directive('recentWork', function () {
    return {
      templateUrl: 'views/partials/recentwork.html',
      restrict: 'E'
    };
  });
