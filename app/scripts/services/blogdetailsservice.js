'use strict';

/**
 * @ngdoc service
 * @name zowberApp.blogDetailsService
 * @description
 * # blogDetailsService
 * Service in the zowberApp.
 */
angular.module('zowberApp')
  .service('blogDetailsService', function ($http) {

    this.getBlogDetails = function () {
      return $http.get('http://zowber.com/wordpress/wp-json/');
    };

  });
