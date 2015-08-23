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
    function ($scope, $stateParams, $http) {

      $scope.pageClass = 'page_portfolio-detail';

      $http.get('portfolioItems/' + $stateParams.itemId + '.json').success(function(data) {
        $scope.item = data;
      });

      $scope.goBack = function () {
        // TODO: Check if the referrer was actually the main portfolio page
        history.back();
      };

  });