'use strict';

/**
 * @ngdoc function
 * @name zowberApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the zowberApp
 */
angular.module('zowberApp')
  .controller('HomeCtrl', function ($scope) {
    $scope.pageClass = 'page_home'
    $scope.pageColumnClass = 'col-xs-12 col-sm-10 col-sm-offset-1';
    $scope.animate = true;
  });
