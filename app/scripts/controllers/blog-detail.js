'use strict';

/**
 * @ngdoc function
 * @name zowberApp.controller:BlogDetailCtrl
 * @description
 * # BlogDetailCtrl
 * Controller of the zowberApp
 */
angular.module('zowberApp')
  .controller('BlogDetailCtrl', function ($routeParams, postsService, wordCountService, readingTimeService) {
  	this.post = postsService.getPost($routeParams.title);

  	// this.wordCount gets number of words in this.post.content as int
    this.wordCount = wordCountService.getWordCount(this.post.content);
    
    // this.readingTime gets a rough reading time for this.post.content as string
    this.readingTime = readingTimeService.getReadingTime(this.wordCount);

  });
