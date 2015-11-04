"use strict";

function wordCount (words) {
	var arrayOfWords = words.split(" ");

	var numberOfWords = arrayOfWords.length;

	return numberOfWords; //int
}

	angular.module("zowberApp")
		.service("wordCountService", wordCount);