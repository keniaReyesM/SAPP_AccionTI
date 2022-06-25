'use strict';
angular.module('SAPP', [
	'ngAnimate', 'ngCookies', 'cfp.loadingBar', 'mwl.calendar', 'ngResource', 'ngSanitize', 'ngTouch', 'ngMessages', 'ui.bootstrap', 'ui.router', 'ui.utils', 'angular-loading-bar', 'angularMoment', 'ui.select', 'ui.tree', 'angularFileUpload', 'ngImgCrop', 'ui.calendar', 'ngTagsInput', 'LocalStorageModule', 'cfp.hotkeys', 'xeditable', 'ngIdle', 'angular-web-notification', 'ui.bootstrap.datetimepicker', 'satellizer', 'ngAudio', 'angular.filter', 'pdf', 'ngToast', 'ngPluralizeHtml', 'textAngular', 'mwl.calendar'
])
	.constant('CONFIG_URL', {
		url: window.location.origin + "/sapp/",
		encabezado: {
			'Per-Res': 'permres'
		},
		notAuthenticated: 'auth-not-authenticated'
	})
	.constant('angularMomentConfig', {
		timezone: 'America/Mexico_City' // e.g. 'Europe/London'
	})
	.constant(
		'uiDatetimePickerConfig', {
		dateFormat: 'yyyy-MM-ddTHH:mm:ss.sssZ',
		defaultTime: '00:00:00',
		html5Types: {
			date: 'yyyy-MM-dd',
			'datetime-local': 'yyyy-MM-ddTHH:mm:ss.sss',
			'month': 'yyyy-MM'
		},
		initialPicker: 'date',
		reOpenDefault: false,
		enableDate: true,
		enableTime: true,
		buttonBar: {
			show: true,
			now: {
				show: true,
				text: 'Ahora',
				cls: 'btn-sm btn-primary'
			},
			today: {
				show: true,
				text: 'Hoy',
				cls: 'btn-sm btn-blue'
			},
			clear: {
				show: true,
				text: 'Limpiar',
				cls: 'btn-sm btn-default'
			},
			date: {
				show: true,
				text: 'Fecha',
				cls: 'btn-sm btn-default'
			},
			time: {
				show: true,
				text: 'Hora',
				cls: 'btn-sm btn-default'
			},
			close: {
				show: true,
				text: 'Cerrar',
				cls: 'btn-sm btn-success'
			}
		},
		closeOnDateSelection: true,
		closeOnTimeNow: true,
		appendToBody: false,
		altInputFormats: [],
		ngModelOptions: {},
		saveAs: 'json',
		readAs: true
	}).config(['IdleProvider', 'KeepaliveProvider', '$httpProvider', function (IdleProvider, KeepaliveProvider, $httpProvider) {
		$httpProvider.interceptors.push('AuthInterceptor');
		IdleProvider.idle(1770); //1800 -> 30 minutos
		IdleProvider.timeout(30); //10 segundos antes para renovar antes de cerrar sesion
		KeepaliveProvider.interval(900); //900 -> 15 minutos comprueba sesion
	}]).config(['uiSelectConfig', function (uiSelectConfig) {
		uiSelectConfig.theme = 'bootstrap';
	}]).config(['localStorageServiceProvider', function (localStorageServiceProvider) {
		localStorageServiceProvider.setPrefix('sapp').setNotify(true, true);
	}]).config(['hotkeysProvider', function (hotkeysProvider) {
		hotkeysProvider.cheatSheetDescription = "Mostrar / ocultar ayuda";
		hotkeysProvider.templateTitle = "Atajos de teclado";
	}]).config(['ngToastProvider', function (ngToastProvider) {
		ngToastProvider.configure({
			animation: 'slide',
			maxNumber: 5,
			combineDuplications: true,
			verticalPosition: 'bottom'
		});
	}]).config(['$provide', function ($provide) {
		$provide.decorator('taOptions', ['taRegisterTool', '$delegate', function (taRegisterTool, taOptions) {
			taOptions.toolbar = [
				['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'pre', 'quote'],
				['bold', 'italics', 'underline', 'strikeThrough', 'ul', 'ol', 'redo', 'undo'],
				['justifyLeft', 'justifyCenter', 'justifyRight', 'indent', 'outdent']
			];
			return taOptions;
		}]);
	}]).config(['$provide', function ($provide) {
		$provide.decorator('taTranslations', ['taRegisterTool', '$delegate', function (taRegisterTool, taTranslations) {
			taTranslations.heading.tooltip = "Título ";
			taTranslations.p.tooltip = "Párrafo";
			taTranslations.pre.tooltip = "Texto preformateado";
			taTranslations.quote.tooltip = "Cita";
			taTranslations.bold.tooltip = "Negritas";
			taTranslations.italic.tooltip = "Cursivas";
			taTranslations.underline.tooltip = "Subrayado";
			taTranslations.strikeThrough.tooltip = "Tachado";
			taTranslations.ul.tooltip = "Viñetas";
			taTranslations.ol.tooltip = "Viñetas numeradas";
			taTranslations.redo.tooltip = "Rehacer";
			taTranslations.undo.tooltip = "Deshacer";
			// taTranslations.clear.tooltip = "Borrar formato";
			taTranslations.justifyLeft.tooltip = "Alinear a la izquierda";
			taTranslations.justifyCenter.tooltip = "Alinear al centro";
			taTranslations.justifyRight.tooltip = "Alinear a la derecha";
			taTranslations.indent.tooltip = "Agregar sangría";
			taTranslations.outdent.tooltip = "Quitar sangría";
			return taTranslations;
		}]);
	}]).config(['$stateProvider', '$urlRouterProvider', '$authProvider', 'CONFIG_URL',
		function ($stateProvider, $urlRouterProvider, $authProvider, CONFIG_URL) {
			$authProvider.httpInterceptor = function () {
				return true;
			};
			$authProvider.withCredentials = true;
			$authProvider.baseUrl = CONFIG_URL.url;
			$authProvider.loginUrl = '/api/login';
			$authProvider.tokenName = 'access_token';
			$authProvider.tokenPrefix = 'sappsec';
			$authProvider.authHeader = 'X-Auth-Token';
			$authProvider.authToken = 'Bearer';
			$authProvider.storageType = 'localStorage';
			$urlRouterProvider.otherwise('/login');
			$stateProvider.state('app', {
				abstract: true,
				url: '/app',
				templateUrl: 'app/views/principales/app.html',
				controller: 'SecundarioCtrl',
				controllerAs: "secCtr"
			})
				.state('app.base', {
					url: '/base',
					template: '<div ui-view></div>'
				})
				.state('login', {
					url: '/login',
					templateUrl: 'app/views/principales/login.html'
				});
		}
	]).run(['$window', '$rootScope', '$state', '$stateParams', 'editableOptions', 'amMoment', '$auth', 'ngAudio', '$uibModalStack', 'localStorageService', 'ngToast',
		function ($window, $rootScope, $state, $stateParams, editableOptions, amMoment, $auth, ngAudio, $uibModalStack, localStorageService, ngToast) {
			$rootScope.online = navigator.onLine;
			$rootScope.objetoPerfil = {};
			$window.addEventListener("offline", function () {
				$rootScope.$apply(function () {
					$rootScope.online = false;
				});
			}, false);
			$window.addEventListener("online", function () {
				$rootScope.$apply(function () {
					$rootScope.online = true;
				});
			}, false);
			$rootScope.infoUsuario = {};
			amMoment.changeLocale('es');

			editableOptions.theme = 'bs3';
			$rootScope.$state = $state;
			$rootScope.$stateParams = $stateParams;
			$rootScope.notificaciones = [];
			$rootScope.$on('$stateChangeStart', function (event, next, nextParams, fromState) {
				if (!$auth.isAuthenticated()) {
					if (next.name !== 'login') {
						event.preventDefault();
						$state.go('login');
					}
				}
			});
			$rootScope.$on('$stateChangeSuccess', function (event, toState) {
				if (toState.name === 'login') {
					$uibModalStack.dismissAll("-");
					localStorageService.clearAll()
				}
				event.targetScope.$watch('$viewContentLoaded', function () {
					angular.element('html, body, #content').animate({
						scrollTop: 0
					}, 200);
					setTimeout(function () {
						angular.element('#wrap').css('visibility', 'visible');
						if (!angular.element('.dropdown').hasClass('open')) {
							angular.element('.dropdown').find('>ul').slideUp();
						}
					}, 200);
					setTimeout(function () {
						angular.element("#pageloader").addClass('hide animate');
					}, 300);
				});
				$rootScope.containerClass = toState.containerClass;
			});
			$rootScope.generarCadena = function (dig) {
				var az = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'V', 'W', 'X', 'Y', 'Z'];
				var res = "";
				for (var i = 0; i < dig; i++) {
					res += az[Math.floor(Math.random() * az.length) + 0];
				}
				return res;
			};
			$rootScope.expCurp = /^(([a-zA-Z]{4}\d{6}[a-zA-Z]{6}\d{2})|([X-Z]{1})([-]?)(\d{7})([-]?)([A-Z]{1}))|((\d{8})([-]?)([A-Z]{1}))$/;
			$rootScope.expRfc = /^[A-ZÑ&]{3,4}[0-9]{2}[0-1][0-9][0-3][0-9]([A-Z0-9]{3})$/;
			$rootScope.expCorreo = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/;
			$rootScope.expNumero = /^\d+$/;
			$rootScope.notificacion = function (tipo, mensaje) {
				var icon = tipo === 'success' ? 'fa-check-circle-o' : tipo === 'warning' ? 'fa-exclamation-triangle' : tipo === 'danger' ? 'fa-times-circle-o' : tipo === 'info' ? 'fa-info-circle' : "";
				ngToast.create({
					className: tipo || "warning",
					content: "<i class='fa " + icon + "'></i> " + (mensaje || " "),
					dismissButton: true,
					dismissOnTimeout: true,
					timeout: 5000
				});
			};
			$rootScope.fechaActualSistema = new Date();
			$rootScope.errorhttp = function (respuesta) {

				switch (Number(respuesta.status)) {
					case 401:
						$rootScope.notificacion("danger", "No estas autorizado para ver el recurso solicitado.");
						break;
					case 403:
						$rootScope.notificacion("warning", "No tienes permisos para realizar la tarea.");
						break;
					case 404:
						$rootScope.notificacion("warning", "No se encontró el recurso que solicitó.");
						break;
					default:
						$rootScope.notificacion("danger", "Problemas en el servidor, notifique al administrador (" + (respuesta.status || "SW") + ").");
				}
			};
		}
	]).filter('titulo', function () {
		return function (titulo) {
			titulo = titulo || 'Sin título';
			var tituloConvertido = titulo.charAt(0).toUpperCase() + titulo.substring(1).toLowerCase();
			return tituloConvertido;
		};
	});
