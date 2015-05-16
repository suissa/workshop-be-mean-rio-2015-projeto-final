(function() {
  'use strict';

  angular.module('myApp.beers', [
    'ngRoute',
    'myApp.beers.Controllers',
    'myApp.beers.Service'
  ])

  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/beers', {
      templateUrl: 'js/modules/beers/views/beers.html',
      controller: 'BeersCtrl'
    })
    .when('/beers/create', {
      templateUrl: 'js/modules/beers/views/create.html',
      controller: 'BeersCreateCtrl'
    })
    .when('/beers/:id', {
      templateUrl: 'js/modules/beers/views/get.html',
      controller: 'BeersGetCtrl'
    })
    .when('/beers/:id/edit', {
      templateUrl: 'js/modules/beers/views/update.html',
      controller: 'BeersEditCtrl'
    })
    .otherwise({
      redirectTo: '/beers'
    });
  }])

})();