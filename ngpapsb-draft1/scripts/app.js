'use strict';

angular.module('papsbApp', [])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'mainCtrl'
      })
      .otherwise({ 
        redirectTo: '/' 
      });
  });
