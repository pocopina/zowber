'use strict';

/**
 * @ngdoc directive
 * @name zowberApp.directive:portfolioDetailHeader
 * @description
 * # portfolioDetailHeader
 */
angular.module('zowberApp')
  .directive('portfolioDetailHeader', function () {
    return {
      templateUrl: 'views/partials/portfoliodetailheader.html',
      restrict: 'E'
    };
  });
