'use strict';

/**
 * @ngdoc service
 * @name zowberApp.blogDetailsService
 * @description
 * # blogDetailsService
 * Service in the zowberApp.
 * @returns {obj} Blog details object
 */
angular.module('zowberApp')
  .service('blogDetailsService', function () {

        this.getBlogDetails = function() {
          return {
          name : "Zowber Blog",
          strapline : "Blog strapline text"
        };
    };
  });