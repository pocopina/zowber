'use strict';

/**
 * @ngdoc service
 * @name zowberApp.blogPostsService
 * @description
 * # blogPostsService
 */
angular.module('zowberApp')
  .service('blogPostsService', function ($http) {

    this.getPosts = function () {
      return $http.get('http://zowber.com/wordpress/wp-json/posts');

    };

    this.getPost = function (ID) {
      return $http.get('http://zowber.com/wordpress/wp-json/posts/' + ID);
    };

  });
