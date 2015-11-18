'use strict';

/**
 * @ngdoc directive
 * @name zowberApp.directive:header
 * @description
 * # header
 */
angular.module('zowberApp')
  .directive('header', function () {
    return {
      templateUrl: 'components/header/header.html',
      restrict: 'E'
    };
  });
