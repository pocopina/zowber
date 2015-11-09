'use strict';

/**
 * @ngdoc directive
 * @name zowberApp.directive:portfolioDetailSection
 * @description
 * # portfolioDetailSection
 */
angular.module('zowberApp')
  .directive('portfolioDetailSection', function () {
    return {
      templateUrl: 'views/portfoliodetailsection.html',
      restrict: 'E'
    };
  });
