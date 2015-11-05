'use strict';

/**
 * @ngdoc function
 * @name zowberApp.controller:BlogCtrl
 * @description
 * # BlogCtrl
 * Controller of the zowberApp
 */
angular.module('zowberApp')
  .controller('BlogCtrl', function ($scope, $http, blogDetailsService, blogPostsService) {

    var postsPerPage = 10;

    blogDetailsService.getBlogDetails()
      .then(function (response) {
        $scope.blogDetails = response.data;
      });

    blogPostsService.getPosts(postsPerPage)
      .then(function (response) {
        $scope.posts = response.data;
      });

  });
