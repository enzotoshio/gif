'use strict';

/**
 * @ngdoc overview
 * @name gifApp
 * @description
 * # gifApp
 *
 * Main module of the application.
 */
angular
  .module('gifApp', [
    'ngAnimate',
    'ngMessages',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
