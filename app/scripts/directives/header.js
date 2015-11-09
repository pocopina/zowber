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
      templateUrl: 'views/header.html',
      restrict: 'E'
    };
  });
