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
    function ($rootScope, $scope, $routeParams, $http, $location) {

      $scope.pageClass = 'page_portfolio-detail';

      $http.get('portfolioItems/' + $routeParams.itemId + '.json').success(function(data) {
        $scope.item = data;
      });

      $scope.goBack = function () {
          if ($rootScope.backToHome) {
            history.back();
          }
          else {
            $location.path("/");
          }
      };

  });