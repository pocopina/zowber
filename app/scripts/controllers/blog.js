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

    blogDetailsService.getBlogDetails()
      .then(function (response) {
        $scope.blogDetails = response.data;
      });

    blogPostsService.getPosts()
      .then(function (response) {
        $scope.posts = response.data;
      });

  });
