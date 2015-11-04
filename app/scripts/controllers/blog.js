'use strict';

/**
 * @ngdoc function
 * @name zowberApp.controller:BlogCtrl
 * @description
 * # BlogCtrl
 * Controller of the zowberApp
 */
angular.module('zowberApp')
  .controller('BlogCtrl', function (postsService, blogDetailsService) {

    this.blogDetails = blogDetailsService.getBlogDetails();
    this.posts = postsService.getPosts(5);
    
  });
