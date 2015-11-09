'use strict';

/**
 * @ngdoc service
 * @name zowberApp.portfolioService
 * @description
 * # portfolioService
 */
angular.module('zowberApp')
  .service('portfolioService', function($http) {

    this.getPortfolioItems = function() {
      return $http.get('portfolioItems/portfolioItems.json');
    };

    this.getPortfolioItem = function(itemId) {
      return $http.get('portfolioItems/' + itemId + '.json');
    };
  });
