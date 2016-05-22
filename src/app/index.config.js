(function() {
  'use strict';

  angular
    .module('loginAngular')
    .config(config);

  /** @ngInject */
  function config(RestangularProvider) {
     //Asignar una url y subirle el archivo login.php que esta en la ruta app/main
     //RestangularProvider.setBaseUrl('http://yoururl.com/');
   
  }

})();
