'use strict';
angular.module('SAPP').factory('PeriodoService', ['CONFIG_URL',
  '$http',
  function(CONFIG_URL, $http) {
    return {

      listarFiltro: function(busqueda, actual) {
        let configuracion = {  headers:  CONFIG_URL.encabezado };
        let parametros = {pagina: actual, busqueda: busqueda};
        return $http.post(CONFIG_URL.url +"api/periodo/listarPaginado", parametros, configuracion);
      },

      listarTodos: function() {
        let configuracion = {  headers:  CONFIG_URL.encabezado };
        let parametros = {};
        return $http.post(CONFIG_URL.url +"api/periodo/listarTodos", parametros, configuracion);
      },

      obtener: function(id) {
        let configuracion = {  headers:  CONFIG_URL.encabezado };
        let parametros = {idPeriodo: id};
        return $http.post(CONFIG_URL.url +"api/periodo/obtener", parametros, configuracion);
      },

      registrar: function(parametros) {
        let configuracion = {  headers:  CONFIG_URL.encabezado };
        return $http.post(CONFIG_URL.url +"api/periodo/registrar", parametros, configuracion);
      },

      modificar: function(parametros) {
        let configuracion = {  headers:  CONFIG_URL.encabezado };
        return $http.post(CONFIG_URL.url +"api/periodo/actualizar", parametros, configuracion);
      },

      eliminar: function(id) {
        let configuracion = {  headers:  CONFIG_URL.encabezado };
        let parametros = {idPeriodo: id};
        return $http.post(CONFIG_URL.url +"api/periodo/eliminar", parametros, configuracion);
      }
      
    };
  }
]);
