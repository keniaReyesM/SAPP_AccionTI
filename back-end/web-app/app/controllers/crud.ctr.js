'use strict';
angular.module('SAPP').controller('CrudCtrl', ['$rootScope', '$scope',
	'$http', 'hotkeys', 'obj', '$state', '$timeout',
	function ($rootScope, $scope, $http, hotkeys, obj, $state, $timeout) {
		var ctr = this;
		$scope.orden = "asc";
		$scope.status = 0;
		this.objeto = $.extend(true, {
			mostrarTitulo: true,
			iniciarFuncion: 'si'
		}, obj);
		$scope.page = {
			title: this.objeto.titulo,
			subtitle: 'SAPP'
		};
		$scope.options = {
			done: 'Listo',
			twelvehour: true,
			nativeOnMobile: true,
			placement: 'top',
			align: 'left',
			autoclose: 'true'
		};
		$scope.dateOptions = {
			formatYear: 'yy',
			startingDay: 1
		};
		hotkeys.add({
			combo: 'ctrl+a',
			description: 'Nuevo',
			callback: function (event, hotkey) {
				event.preventDefault();
				ctr.cambiarAccion(1);
			}
		});
		hotkeys.add({
			combo: 'ctrl+r',
			description: 'Cancelar acciones',
			callback: function (event, hotkey) {
				event.preventDefault();
				ctr.cambiarAccion(0);
			}
		});
		$scope.objetos = [];
		var eliminados = []
		$scope.objetoModel = $.extend(true, {
			id: $rootScope.generarCadena(5)
		}, (this.objeto.inicial || {}));
		this.accion = 0;
		$scope.indice = 0;
		/*Inicio Variables paginación*/
		$scope.total = 0;
		$scope.busqueda = "";
		$scope.actual = 1;
		this.cambiarPagina = function () {
			this.cargaObjetos();
		};
		/*Fin Variables paginación*/
		this.verAccion = function (accion) {
			return this.accion === accion;
		};
		this.cambiarAccion = function (accion) {
			this.accion = accion;
			if (this.accion === 0) {
				eliminados = [];
				$scope.objetoModel = $.extend(true, {
					id: $rootScope.generarCadena(5)
				}, (this.objeto.inicial || {}));
				$scope.formulario.$setPristine();
			} else if (this.accion === 1 || this.accion === 2) {
				$timeout(function () {
					if (angular.isDefined(ctr.objeto.elementoFoco)) {
						document.getElementById(ctr.objeto.elementoFoco).focus();
					}
				}, 100);
			}
		};
		this.hacerAccion = function () {
			switch (this.accion) {
				case 1:
					this.agregarObjeto();
					break;
				case 2:
					this.modificarObjeto();
					break;
				default:
					break;
			}
			this.cambiarAccion(0);
		};
		this.atrasoBusqueda;
		$scope.$watch("busqueda", function (nuevo) {
			ctr.borrarAtrasoBusqueda();
			ctr.atrasoBusqueda = $timeout(function () {
				if (ctr.objeto.iniciarFuncion === 'si') {
					ctr.cargaObjetos();
				} else {
					ctr.objeto.iniciarFuncion = 'si';
				}
			}, 400);
		});

		this.borrarAtrasoBusqueda = function () {
			if (angular.isDefined(ctr.atrasoBusqueda)) {
				$timeout.cancel(ctr.atrasoBusqueda);
				ctr.atrasoBusqueda = undefined;
			}
		};
		this.cargaObjetos = function () {
			//	angular.element('.tile').addClass('refreshing');
			this.objeto.servicio.listarFiltro($scope.busqueda, $scope.actual, $scope.orden, $scope.status).then(
				function (respuesta) {

					$scope.objetos = respuesta.data.elementos;
					$scope.total = respuesta.data.total;
				}, $rootScope.errorhttp).finally(function (e) {
				});
		};

		this.agregarObjeto = function () {
			angular.element('.tile').addClass('refreshing');
			this.objeto.servicio.registrar($scope.objetoModel).then(function (respuesta) {
				if (respuesta.data.respuesta) {
					var indice = $scope.objetos.findIndex(function (it) {
						return it.descripcion == respuesta.data[ctr.objeto.nombreObjetoJson].descripcion;
					});
					if (indice > -1) {
						$scope.objetos[indice] = (respuesta.data[ctr.objeto.nombreObjetoJson]);
						$scope.total++;
						$rootScope.notificacion("success", "Se han agregado los subtipos de red social al tipo de red social " + $scope.objetos[indice].descripcion + " .");
					} else {
						$scope.objetos.unshift(respuesta.data[ctr.objeto.nombreObjetoJson]);
						$scope.total++;
						$rootScope.notificacion("success", "Se ha registrado correctamente.");
					}
					if ($scope.total > 10) {
						$scope.objetos.pop();
					}
				} else if (!respuesta.data.respuesta && respuesta.data.mensajeError !== "Ha ocurrido un error...") {
					$rootScope.notificacion("danger", respuesta.data.mensajeError);
				} else if (!respuesta.data.respuesta && respuesta.data.mensajeError === "Ha ocurrido un error...") {
					$rootScope.notificacion("danger", " No se logró registrar  debido a un error interno. Favor de revisar la información proporcionada e intentarlo más tarde.");
				}

			}, $rootScope.errorhttp).finally(function (e) {
				angular.element('.tile.refreshing').removeClass('refreshing');
			});
		};

		this.modificarObjeto = function () {
			angular.element('.tile').addClass('refreshing');
			this.objeto.servicio.modificar($scope.objetoModel).then(function (respuesta) {
				if (respuesta.data.respuesta) {
					$scope.objetos[$scope.indice] = respuesta.data[ctr.objeto.nombreObjetoJson];
					$rootScope.notificacion("success", "Se ha modificado correctamente.");
				} else if (!respuesta.data.respuesta && respuesta.data.mensajeError !== "Ha ocurrido un error...") {
					$rootScope.notificacion("danger", respuesta.data.mensajeError);
				} else if (!respuesta.data.respuesta && respuesta.data.mensajeError === "Ha ocurrido un error...") {
					$rootScope.notificacion("danger", " No se logró registrar  debido a un error interno. Favor de revisar la información proporcionada e intentarlo más tarde.");
				}
				$scope.indice = 0;
			}, $rootScope.errorhttp).finally(function (e) {
				angular.element('.tile.refreshing').removeClass('refreshing');
			});
		};
		this.prepararObjeto = function (id, i) {
			angular.element('.tile').addClass('refreshing');
			this.objeto.servicio.obtener(id).then(function (respuesta) {
				if (respuesta.data.respuesta) {
					$scope.objetoModel = respuesta.data[ctr.objeto.nombreObjetoJson];
				}
			}, $rootScope.errorhttp).finally(function (e) {
				angular.element('.tile.refreshing').removeClass('refreshing');
			});
			this.cambiarAccion(2);
			$scope.indice = Number(i);
		};
		this.eliminarObjeto = function (id, i) {
			angular.element('.tile').addClass('refreshing');
			this.objeto.servicio.eliminar(id).then(function (respuesta) {
				if (respuesta.data.respuesta) {
					$scope.objetos.splice(i, 1);
					$scope.total--;
					$rootScope.notificacion("success", "Se ha eliminado correctamente.");
				} else {
					$rootScope.notificacion("warning", respuesta.data.mensaje);
				}
			}, $rootScope.errorhttp).finally(function (e) {
				angular.element('.tile.refreshing').removeClass('refreshing');
			});

		};

		this.eliminarObjetoSub = function (id, i) {
			if (angular.isNumber(id)) {
				eliminados.push(id)
			}
			$scope.objetoModel.subtiposRedSocial.splice(i, 1)
			$scope.objetoModel.eliminarRedes = eliminados;
		};

		this.cambiarEstadoObjeto = function (id, index, estado) {
			angular.element('.tile').addClass('refreshing');
			this.objeto.servicio.cambiarEstado(id, estado).then(function (respuesta) {
				if (respuesta.data.respuesta) {
					$scope.objetos[index] = respuesta.data[ctr.objeto.nombreObjetoJson];
					$rootScope.notificacion("success", "Se ha cambiado el estado correctamente.");
				} else {
					$rootScope.notificacion("danger", "No se logró cambiar el estado debido a un error interno. Favor de revisar la información proporcionada e intentarlo más tarde.");
				}
			}, $rootScope.errorhttp).finally(function (e) {
				angular.element('.tile.refreshing').removeClass('refreshing');
			});
		};


		//MARK: cambio de estado  
		this.cambiarOrden = function (status) {
			$scope.status = status;
			$scope.orden = ($scope.orden === 'asc') ? 'desc' : 'asc';
			this.cargaObjetos();
		}
	}
]);
