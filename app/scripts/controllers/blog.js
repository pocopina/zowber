'use strict';

/**
 * @ngdoc function
 * @name zowberApp.controller:BlogCtrl
 * @description
 * # BlogCtrl
 * Controller of the zowberApp
 */
angular.module('zowberApp')
  .controller('BlogCtrl', function ($routeParams, postsService) {

    this.getBlogDetails = function() {
    	this.name = "Zowber Blog";
    	this.strapline = "Blog strapline text";
    };

    this.getBlogDetails();
    this.posts = postsService.getPosts(5);
    console.log(this.posts);
    
  });
