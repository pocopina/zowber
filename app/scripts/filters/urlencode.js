'use strict';

/**
 * @ngdoc filter
 * @name zowberApp.filter:urlEncode
 * @function
 * @description
 * # urlEncode
 * Filter in the zowberApp.
 */
angular.module('zowberApp')
  .filter('urlEncode', function () {
    return function (input) {
    	return window.encodeURIComponent(input);
    };
  });
