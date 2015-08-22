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
    //'ngRoute',
    'ngSanitize',
    'ui.router'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {
    // $routeProvider
    //   .when('/', {
    //     templateUrl: 'views/portfolio.html',
    //     controller: 'PortfolioCtrl'
    //   })
    //   .when('/portfolio/:itemId', {
    //     templateUrl: 'views/portfolio-detail.html',
    //     controller: 'PortfolioDetailCtrl'
    //   })
    //   .otherwise({
    //     redirectTo: '/'
    //   });

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('/', {
        url: '/',
        templateUrl: 'views/portfolio.html',
        controller: 'PortfolioCtrl'
      })
      .state('/portfolio/:itemId', {
        url: '/portfolio/:itemId',
        templateUrl: 'views/portfolio-detail.html',
        controller: 'PortfolioDetailCtrl'
      })
  });
