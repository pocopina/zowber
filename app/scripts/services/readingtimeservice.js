'use strict';

/**
 * @ngdoc service
 * @name zowberApp.readingTimeService
 * @description
 * Gives a very rough approximation of reading time. Assumes a lotta stuff. Like readers actually reading to end at a steady pace of 0.24 words per second :)
 * @returns {string} reading time
 */
angular.module('zowberApp')
  .service('readingTimeService', function () {
    this.getReadingTime = function(numberOfWords) {

    	if (numberOfWords === parseInt(numberOfWords, 10)) { // if numberOfWords is an int

    		var readingTimeFloat = 0.0, readingTimeInSeconds = 0, readingTime = "Less than one minute";

    		for (var i = 0; i < numberOfWords; i++) {
    			readingTimeFloat += 0.24; // surely most adults can read around 250 wpm?
    		}

    		if (readingTimeInSeconds > 60) {
    			var fullMinutesOfReading = Math.round(readingTimeInSeconds / 60);
    			readingTime = "Less than " + (fullMinutesOfReading + 1) + " minutes";
    		}

    		return readingTime;

    	}
    
    };
  });
