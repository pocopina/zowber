'use strict';

/**
 * @ngdoc function
 * @name zowberApp.controller:PortfolioCtrl
 * @description
 * # PortfolioCtrl
 * Controller of the zowberApp
 */
angular.module('zowberApp')
  .controller('PortfolioCtrl',
    function ($scope, $http, $stateParams, $location, $anchorScroll) {

      $scope.pageClass = 'page_portfolio';

      $http.get('portfolioItems/portfolioItems.json').success(function(data) {
        $scope.portfolioItems = data;
      });

      $scope.lastItem = $stateParams.lastItem;
	  if ( $scope.lastItem ) {
	    $location.hash("item_" + $scope.lastItem);
	    $anchorScroll();
	  }

  });