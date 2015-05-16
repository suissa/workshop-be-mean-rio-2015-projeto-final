(function() {

  'use strict';

  /* Services */


  // Demonstrate how to register services
  // In this case it is a simple value service.
  angular.module('myApp.beers.Service', [])
    .service('BeerService', BeerService);

  function BeerService($http) {
    var urlBase = 'http://localhost:3000/api/beers';

    this.find = function() {
      return $http.get(urlBase);
    };

    this.findOne = function(id) {
        return $http.get(urlBase + '/' + id);
    };

    this.create = function(data) {
        return $http.post(urlBase, data);
    };

    this.update = function(data) {
        return $http.put(urlBase + '/' + data._id, data);
    };

    this.remove = function(data) {
        return $http.delete(urlBase + '/' + data._id, data);
    };
  }

  BeerService.$inject = ['$http'];
})();

