'use strict';
angular.module('SAPP').controller('SecundarioCtrl', [
	'$rootScope', '$scope', '$uibModal', 'Idle', 'Keepalive', 'Title', 'localStorageService', '$interval',
	'webNotification', 'CONFIG_URL', '$auth', '$state', '$injector', 'hotkeys', '$http', '$uibModalStack',
	'$location', '$timeout',
	function ($rootScope, $scope, $uibModal, Idle, Keepalive, Title, localStorageService, $interval,
		webNotification, CONFIG_URL, $auth, $state, $injector, hotkeys, $http, $uibModalStack,
		$location, $timeout) {
		var ctrsec = this;
		$rootScope.cargando = { valor: false, descripcion: "Cargando contenido..." };
		$rootScope.timedOutTime = 2000
		$rootScope.actualizarPerfil = false;
		$rootScope.actualizarCalendario = false;
//linea-agregada
		$rootScope.estadoCumple = 0;
		$rootScope.fechaCumple='';
		$rootScope.diferenciaCumple = 0;
//linea-agregada
		$rootScope.actualizarEvento = false;
		$rootScope.actualizarPerfilActividadSeguimiento = 0;
		$rootScope.validar = localStorageService.get("rolActual")
		Idle.watch();
		Title.idleMessage("Tienes {{minutes}} minutos y {{seconds}} segundos ({{totalSeconds}} segundos) antes de que cierre la sesión!")
		Title.timedOutMessage("Se terminó la sesión por inactividad")
		$rootScope.infoUsuario = JSON.parse(localStorageService.get("usuario")) || {};
		var estado = true
		$rootScope.operacion = moment().format("Z") + "";
		//$rootScope.obtenerInformacionUsuario();
		$rootScope.verificarRol = function (rol) {
			return (localStorageService.get("rolPrincipal") || "NA").toString().replace(/\"/, "");
		};
		$rootScope.$on(CONFIG_URL.notAuthenticated, function (event) {
			$auth.logout();
			$state.go('login');
		});
		$rootScope.$watch('online', function (estadoConexion) {
			$scope.conexionInternet = estadoConexion;

		});
		$scope.$on('IdleStart', function () { }); //Configurar déspues
		$scope.$on('IdleWarn', function (e, countdown) { }); //Configurar déspues

		$scope.$on('IdleTimeout', function () {
			$auth.logout();
			$state.go('login');
		});
		$scope.$on('Keepalive', function () {
			$http.post(CONFIG_URL.url + "oauth/access_token", {}, {
				headers: {
					'Content-Type': "application/x-www-form-urlencoded; charset=UTF-8"
				},
				params: {
					grant_type: "refresh_token",
					refresh_token: window.localStorage.getItem("sappsec_access_token")
				}
			}).then(function (respuesta) {
				window.localStorage.setItem("sappsec_access_token", respuesta.data.access_token);
			}, function (respuesta) { 
				console.log("Falló al refrescar el token: "+respuesta);
			});
		});
		/*Para todos los controladores*/
		this.fechahora = moment().add(1, 's');
		
		$scope.$on('$destroy', function () {
			$rootScope.borrarInterval();
		});

		

		
		$rootScope.notificacionVisible = false;
		

		$rootScope.$watchCollection("infoUsuario.recordatorios", function (nuevos) {
			$rootScope.infoUsuario.recordatorios = nuevos;
			localStorageService.set("usuario", JSON.stringify($rootScope.infoUsuario));
		});
		
		$rootScope.abriPdf = function (ruta) {
			window.open(CONFIG_URL.url + ruta + "&access_token=" + window.localStorage.getItem("sappsec_access_token"), '_blank')
		};

		$rootScope.abrirReporte = function (configuracion) {
			var config = $.extend(true, {
				_name: "ban.pdf",
				_file: "ban",
				_format: "PDF"
			}, configuracion);
			window.open(CONFIG_URL.url + "api/reporte/construirReporteXX?access_token=" + window.localStorage.getItem("sappsec_access_token") + "&" + $.param(config), '_blank')
		}

		this.tratarResultadosObjeto = function (respuesta) { };
		this.tratarResultadosLista = function (respuesta) {
			var lista = []
			respuesta.objetos.forEach(function (objeto, index) {
				var indice = lista.findIndex(function (it) {
					return objeto.id === it.id;
				});
				if (indice > -1) {
					lista[indice] = objeto;
				} else {
					lista.push(objeto);
				}
			});
		};


		$rootScope.verificarTiempoResta = function(fecha){
			var tiempo = moment(fecha).format("Z")=="-06:00"?6:5;
			return moment(tiempo).subtract({ minutes: tiempo }).format("DD-MM-YYYY HH:mm:ss")
		}


		this.sincronizarVistas = function (recordatorio, opcion) {
			if ($rootScope.objetoPerfil.descripcion !== undefined || $rootScope.objetoPerfil.titulo !== undefined) {
				$rootScope.objetoPerfil.seguimiento = recordatorio;
				$rootScope.actualizarPerfilActividadSeguimiento = opcion;
				if ($rootScope.objetoPerfil.titulo === 'Seguimiento' || $rootScope.objetoPerfil.titulo === 'Recordatorio') {
					$rootScope.actualizarEvento = !$rootScope.actualizarEvento;
				} else if ($rootScope.objetoPerfil.titulo === 'Calendario') {
					$rootScope.actualizarCalendario = !$rootScope.actualizarCalendario;
				} else {
					$rootScope.actualizarPerfil = !$rootScope.actualizarPerfil;
				}
			}
		}


	}
]);
