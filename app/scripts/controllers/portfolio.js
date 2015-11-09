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
    function ($scope, $http, portfolioService) {

      $scope.pageClass = 'page_portfolio';
      $scope.pageColumnClass = 'col-xs-12 col-sm-10 col-sm-offset-1';
      $scope.headerIsVisible = false;
      $scope.assetUrlPrefix = 'http://zowber-portfolio-assets.s3.amazonaws.com/portfolio-items';
      $scope.animate = true;

      portfolioService.getPortfolioItems()
        .then( function (response) {
          $scope.portfolioItems = response.data;
        });

    });
