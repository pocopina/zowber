'use strict';

/**
 * @ngdoc directive
 * @name zowberApp.directive:casestudies
 * @description
 * # casestudies
 */
angular.module('zowberApp')
  .directive('caseStudies', function () {
    return {
      templateUrl: 'views/casestudies.html',
      restrict: 'E'
    };
  });
