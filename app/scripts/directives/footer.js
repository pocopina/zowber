'use strict';

/**
 * @ngdoc directive
 * @name zowberApp.directive:footer
 * @description
 * # footer
 */
angular.module('zowberApp')
  .directive('footer', function () {
    return {
      templateUrl: 'views/footer.html',
      restrict: 'E'
    };
  });
