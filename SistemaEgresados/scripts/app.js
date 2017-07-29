'use strict';

/**
 * @ngdoc overview
 * @name angularAppApp
 * @description
 * # angularAppApp
 *
 * Main module of the application.
 */
angular
  .module('siceg', [
    'ngRoute',
    'firebase'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/inicio.html',
        controller: 'controller_inicio',
        controllerAs: 'inicio'
      })
      .when('/reportes', {
        templateUrl: 'views/reportes.html',
        controller: 'controller_reportes',
        controllerAs: 'reportes'
      })
      .when('/busquedas', {
        templateUrl: 'views/busquedas.html',
        controller: 'controller_busquedas',
        controllerAs: 'busquedas'
      })
      .when('/nuevoalumno', {
        templateUrl: 'views/nuevoalumno.html',
        controller: 'controller_nuevoalumno',
        controllerAs: 'nuevoalumno'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .constant('FBURL',
    'https://practicaempresa-c2916.firebaseio.com/empleados/'
  );
