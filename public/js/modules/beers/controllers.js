(function() {
  'use strict';

  angular.module('myApp.beers.Controllers', [])
  .controller('BeersCtrl', BeersCtrl)
  .controller('BeersGetCtrl', BeersGetCtrl)
  .controller('BeersCreateCtrl', BeersCreateCtrl)
  .controller('BeersEditCtrl', BeersEditCtrl);

  function BeersCreateCtrl($scope, $http, BeerService) {

    $scope.create = function(cerveja) {

      BeerService
      .create(cerveja)
      .success(function(data) {
        console.log('Sucesso: ', data);
        $scope.msg = 'Cerveja ' + cerveja.name + ' cadastrada com sucesso!';
      })
      .error(function(data) {
        console.log('Erro: ', data);
        $scope.msg = 'Cerveja ' + cerveja.name + ' não pode ser cadastrada!';
      });

    }
  }

  function BeersCtrl($scope, $http, BeerService) {
    $scope.msg = 'Listagem das cervejas';
    $scope.reverse = false;
    $scope.predicate = 'name';

    $scope.ordenar = function(predicate) {
      $scope.predicate = predicate;
      $scope.reverse = !$scope.reverse
    }

    var url = 'http://localhost:3000/api/beers'
      , method = 'GET'
      ;

    BeerService
    .find()
    .success(function(data) {
      $scope.cervejas = data;
      console.log('Sucesso', data);
    })
    .error(function(data) {
      console.log('Erro: ', data);
    });

    $scope.remove = function(cerveja) {
      if(confirm("Deseja remover a cerveja " + cerveja.name + "?")) {
        var _url = url + '/' + cerveja._id
          , method = 'DELETE'
          ;

        BeerService
        .remove(cerveja)
        .success(function(data) {
          console.log('Sucesso: ', data);
          var index = $scope.cervejas.indexOf(cerveja);
          $scope.cervejas.splice(index, 1);
        })
        .error(function(data) {
          console.log('Erro: ', data);
        })
      }
    }
  }

  function BeersGetCtrl($scope, $http, $routeParams, BeerService) {

    var id = $routeParams.id
      , url = 'http://localhost:3000/api/beers/'+id
      , method = 'GET'
      ;

    BeerService
    .findOne(id)
    .success(function(data) {
      $scope.cerveja = data;
      console.log('Sucesso', data);
    })
    .error(function(data) {
      console.log('Erro: ', data);
    });
  }

  function BeersEditCtrl($scope, $http, $routeParams, BeerService) {

    var id = $routeParams.id
      , url = 'http://localhost:3000/api/beers/'+id
      , method = 'GET'
      ;

    BeerService
    .findOne(id)
    .success(function(data) {
      $scope.cerveja = data;
      console.log('Sucesso', data);
    })
    .error(function(data) {
      console.log('Erro: ', data);
    });

    $scope.update = function(cerveja) {
      var method = 'PUT';

      BeerService
      .update(cerveja)
      .success(function(data) {
        console.log('Sucesso: ', data);
        $scope.msg = 'Cerveja ' + cerveja.name + ' alterada com sucesso!';
      })
      .error(function(data) {
        console.log('Erro: ', data);
        $scope.msg = 'Cerveja ' + cerveja.name + ' não pode ser alterada!';
      });
    }
  }

  BeersCtrl.$inject = ['$scope', '$http', 'BeerService'];
  BeersCreateCtrl.$inject = ['$scope', '$http', 'BeerService']
  BeersGetCtrl.$inject = ['$scope', '$http', '$routeParams', 'BeerService']
  BeersEditCtrl.$inject = ['$scope', '$http', '$routeParams', 'BeerService'];

})();