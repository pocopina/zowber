'use strict';

/**
 * @ngdoc service
 * @name zowberApp.wordCountService
 * @param {string} words - A string of 'words'
 * @returns {int} Number of 'words' in the string
 */

angular.module('zowberApp')
  .service('wordCountService', function () {
  	this.getWordCount = function (words) {
  		var arrayOfWords = words.split(" ");
  		var wordCount = arrayOfWords.length;
  		return wordCount;
  	};
  	
  });