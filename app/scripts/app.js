'use strict';

/**
 * @ngdoc overview
 * @name angularJsSampleApp
 * @description
 * # angularJsSampleApp
 *
 * Main module of the application.
 */
var app = angular
  .module('angularJsSampleApp', [
    'ngAnimate',
    'ngAria',
    'ngResource',
    'ngSanitize',
    'ngTouch',
    'ui.router'
  ]);

  app.config(function($stateProvider, $urlRouterProvider) {
    //
    // For any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise('/');
    //
    // Now set up the states
    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      });
  });
