angular.module('SAPP').config(['$stateProvider', function ($stateProvider, $rootScope) {
	$stateProvider
		.state('app.periodos', {
			url: '/periodos',
			controller: 'CrudCtrl',
			controllerAs: 'ctr',
			templateUrl: 'app/views/principales/ruta.crud.html',
			resolve: {
				obj: ['PeriodoService', function (PeriodoService) {
					return {
						servicio: PeriodoService,
						titulo: "Periodos",
						elementoFoco: 'descripcion',
						contenido: "app/views/periodo/periodo.tabla.html",
						formulario: "app/views/periodo/periodo.form.html",
						inicial: {
							descripcion: "",
							max: 45
						},
						nombreObjetoJson: 'objeto',
						nombreListaJson: 'objetos',
						iniciarFuncion: 'si',
						catalogo: "EmpresaEnvio",
						conEstado: true,
						subDependencia: 'clientesEnvios',
						dependencia: '',
						conDependencia: false
					};
				}]
			}
		})
		
}])
