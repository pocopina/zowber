'use strict';

/**
 * @ngdoc overview
 * @name zowberApp
 * @description
 * # zowberApp
 *
 * Main module of the application.
 */
angular
  .module('zowberApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/portfolio.html',
        controller: 'PortfolioCtrl'
      })
      .when('/portfolio/:itemId', {
        templateUrl: 'views/portfolio-detail.html',
        controller: 'PortfolioDetailCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
