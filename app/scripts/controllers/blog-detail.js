'use strict';

/**
 * @ngdoc function
 * @name zowberApp.controller:BlogDetailCtrl
 * @description
 * # BlogDetailCtrl
 * Controller of the zowberApp
 */
angular.module('zowberApp')
  .controller('BlogDetailCtrl', function ($scope, $http, $routeParams, blogPostsService, wordCountService, readingTimeService) {

    $scope.headerIsVisible = true;
    $scope.pageColumnClass = 'col-xs-12 col-sm-8 col-sm-offset-2';
    $scope.pageClass = 'page_blog_detail';

    blogPostsService.getPost($routeParams.ID)
      .then(function (response) {
        // get the post object
        $scope.post = response.data;

        // this.wordCount gets number of words in $scope.post.content as int
        $scope.wordCount = wordCountService.getWordCount($scope.post.content);

        // this.readingTime gets a rough reading time for $scope.post.content as string
        $scope.readingTime = readingTimeService.getReadingTime($scope.wordCount);
      });

  });
