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
    function ($scope, $http) {

      $scope.pageClass = 'page_portfolio';
      $scope.assetUrlPrefix = "http://zowber-portfolio-assets.s3.amazonaws.com/portfolio-items";

      $http.get('/portfolioItems/portfolioItems.json').success(function (data) {
        $scope.portfolioItems = data;
      });

    });
