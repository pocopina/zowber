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

    $scope.pageClass = 'page_blog';
    $scope.pageColumnClass = 'col-xs-12 col-sm-10 col-sm-offset-1';
    $scope.headerIsVisible = true;


    blogDetailsService.getBlogDetails()
      .then(function (response) {
        $scope.blogDetails = response.data;
      });

    blogPostsService.getPosts()
      .then(function (response) {
        $scope.posts = response.data;
      });

  });
