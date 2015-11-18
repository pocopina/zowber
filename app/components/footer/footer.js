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
      templateUrl: 'components/footer/footer.html',
      restrict: 'E'
    };
  });
