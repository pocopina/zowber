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
