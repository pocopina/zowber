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
      templateUrl: 'views/portfoliodetailintro.html',
      restrict: 'E'
    };
  });
