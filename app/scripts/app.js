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
    'ngSanitize',
    //'ui.router',
    'angulartics',
    'angulartics.piwik'
  ])
  .config(function ($routeProvider, $analyticsProvider) {

    $analyticsProvider.firstPageview(true); /* Records pages that don't use $state or $route */
    $analyticsProvider.withAutoBase(true);  /* Records full path */
    $analyticsProvider.virtualPageviews(true);

    $routeProvider
      .when('/', {
        templateUrl: 'views/portfolio.html',
        controller: 'PortfolioCtrl',
        controllerAs: 'portfolio'
      })
      .when('/portfolio/:itemId', {
        templateUrl: 'views/portfolio.detail.html',
        controller: 'PortfolioDetailCtrl'
      })
      .when('/blog', {
        templateUrl: 'views/blog.html',
        controller: 'BlogCtrl',
        controllerAs: 'blog'
      })
      .when('/blog/:title', {
        templateUrl: 'views/blog.detail.html',
        controller: 'BlogDetailCtrl',
        controllerAs: 'postDetail'
      })
      .otherwise( {redirectTo: '/'} );

  })
  .run(function($rootScope) {
    $rootScope.$on('$routeChangeSuccess', function(e, next, cur) { 
        $rootScope.referredFromHome = false;
        if (cur && cur.loadedTemplateUrl === 'views/portfolio.html') {
          $rootScope.referredFromHome = true;
        }
      });
    });
