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
    'ui.router',
    'angulartics',
    'angulartics.piwik'
  ])
  .config(function ($stateProvider, $urlRouterProvider, $analyticsProvider) {

    $analyticsProvider.firstPageview(true); /* Records pages that don't use $state or $route */
    $analyticsProvider.withAutoBase(true);  /* Records full path */
    $analyticsProvider.virtualPageviews(false);

    //$urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'views/portfolio.html',
        controller: 'PortfolioCtrl'
      })
      .state('portfolioDetail', {
        url: '/portfolio/:itemId',
        templateUrl: 'views/portfolio-detail.html',
        controller: 'PortfolioDetailCtrl'
      });
  });