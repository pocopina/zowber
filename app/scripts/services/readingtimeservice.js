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

        var readingTime = "Less than one minute";
        var readingTimeFloat = 0.0;

    		for (var i = 0; i < numberOfWords; i++) {
    			readingTimeFloat += 0.24; // surely most adults can read around 250 wpm?
    		}

        var readingTimeInSeconds = parseInt(readingTimeFloat);

    		if (readingTimeInSeconds > 120) {
    			var fullMinutesOfReading = Math.round(readingTimeInSeconds / 60);
          readingTime = "About " + fullMinutesOfReading + " minutes";
    		} else if (readingTimeInSeconds > 60 && readingTimeInSeconds < 120){
          readingTime = "About one minute";
        }

    		return readingTime;

    	}

    };
  });
