'use strict';

/**
 * @ngdoc function
 * @name zowberApp.controller:PortfolioDetailCtrl'
 * @description
 * # PortfolioDetailCtrl'
 * Controller of the zowberApp
 */
angular.module('zowberApp')
  .controller('PortfolioDetailCtrl',
    function ($rootScope, $scope, $routeParams, $http, $location, portfolioService) {

      $scope.pageClass = 'page_portfolio-detail';
      $scope.headerIsVisible = false;
      $scope.assetUrlPrefix = "http://zowber-portfolio-assets.s3.amazonaws.com/portfolio-items";
      $scope.animate = true;

      portfolioService.getPortfolioItem($routeParams.itemId)
        .then(function (response) {
          $scope.item = response.data;
        });

      $scope.goBack = function () {
          if ($rootScope.referredFromHome) {
            history.back();
          }
          else {
            $location.path("/");
          }
      };

  });
