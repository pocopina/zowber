'use strict';

/**
 * @ngdoc service
 * @name zowberApp.blogDetailsService
 * @description
 * # blogDetailsService
 */
angular.module('zowberApp')
  .service('blogDetailsService', function ($http) {

    this.getBlogDetails = function () {
      return $http.get('http://zowber.com/wordpress/wp-json/');
    };

  });
