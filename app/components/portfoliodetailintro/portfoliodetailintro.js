'use strict';

/**
 * @ngdoc directive
 * @name zowberApp.directive:portfolioDetailIntro
 * @description
 * # portfolioDetailIntro
 */
angular.module('zowberApp')
  .directive('portfolioDetailIntro', function () {
    return {
      templateUrl: 'components/portfoliodetailintro/portfoliodetailintro.html',
      restrict: 'E'
    };
  });
