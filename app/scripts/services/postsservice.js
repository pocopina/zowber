'use strict';

/**
 * @ngdoc service
 * @name zowberApp.blogPostsService
 * @description
 * # blogPostsService
 */
angular.module('zowberApp')
  .service('blogPostsService', function ($http) {

    this.getPosts = function (postsPerPage) {
      if (postsPerPage === parseInt(postsPerPage, 10)) { // if numberOfPosts is an int
        return $http.get('http://zowber.com/wordpress/wp-json/posts?filter[posts_per_page]=' + postsPerPage);
      }
    };

    this.getPost = function (ID) {
      return $http.get('http://zowber.com/wordpress/wp-json/posts/' + ID);
    };

  });
