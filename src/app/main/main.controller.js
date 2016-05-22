(function() {
  'use strict';

  angular
    .module('loginAngular')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($scope,Restangular,$q) {
    $scope.paramsUser = {};

    $scope.login = function(){

      $scope.loginUser($scope.paramsUser).then($scope.doneLogin, $scope.failLogin);

    }

    $scope.loginUser = function(params){
      console.log("entro login");

           
        var deferred = $q.defer();
        Restangular.all('login.php').customPOST($scope.paramsUser).then(
        function(result){
          deferred.resolve(result);
          //console.log(result);
          var userData = {
            user: result.user,
            token: result.token
          }

          console.log(userData);

          /*localstoragecore.saveUserData(userData);*/
          /*AuthToken.saveAuthToken(result.token);*/
          localStorage.setItem("tokenUser", result.token);
          
        }, function (err) {
          deferred.reject(error);
         /*AuthToken.saveAuthToken();*/
        }
      );
      return deferred.promise;

        
    }

    $scope.doneLogin = function() {
      var t = localStorage.getItem("tokenUser");
      console.log("Token Guardado: " + t);
      $scope.tokenGuardado = "Token Guardado: " + t;
    }


  }
})();
