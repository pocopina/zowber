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
      templateUrl: 'views/partials/casestudies.html',
      restrict: 'E',
      link: function (scope, element, attrs) {
        console.log(scope, element, attrs);
      }
    };
  });
