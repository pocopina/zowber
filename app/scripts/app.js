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
    'ngTouch',
    'ui.router'
  ])
  .config(function ($stateProvider, $routeProvider) {
    $routeProvider.otherwise({ redirectTo: '/' });

     $stateProvider
        .state('main', {
            url: '/',
            templateUrl: 'views/main.html',
            controller: 'MainCtrl'
        });
  });
