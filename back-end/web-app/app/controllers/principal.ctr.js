'use strict';
angular.module('SAPP').controller('MainCtrl', ['$rootScope', '$scope', 'localStorageService', 'CONFIG_URL', '$auth', '$state', '$injector', '$uibModal', '$http', function ($rootScope, $scope, localStorageService, CONFIG_URL, $auth, $state, $injector, $uibModal, $http) {
	$rootScope.validar = '';

	this.login = function () {
		$auth.login($scope.usuario).then(function (res) {

			if ($auth.isAuthenticated()) {

				if(res.data.roles.length > 0){
					localStorageService.set("usuario", JSON.stringify(res.data));
					localStorageService.set("rolPrincipal", res.data.roles[0]);
					$rootScope.obtenerInformacionUsuario();
				}else{
					$rootScope.notificacion("warning", "Usuario o contraseña incorrecto.");
					$state.go('login');
				}
				
				switch (res.data.roles[0]) {
					case "ROLE_SA":
						$state.go("app.periodos", {}, {reload: true});
						break;
					default:
						$state.go("app.periodos", {}, {reload: true});
						break;
				}
				$scope.usuario.password = "";
			}
		}).catch(function (res) {
			$rootScope.notificacion("warning", "Usuario o contraseña incorrecto.");
		});
	};

	this.logout = function () {
		$auth.logout();
		$state.go('login');
	};
	
	


	$rootScope.obtenerInformacionUsuario = function () {

		$rootScope.infoUsuario = JSON.parse(localStorageService.get("usuario")) || {};
		$http.post(CONFIG_URL.url + "api/usuario/obtenerInformacionUsuarioLogin",$scope.usuario).then((respuesta)=>{
			$.extend(true, $rootScope.infoUsuario, respuesta.data);
			localStorageService.set("usuario", JSON.stringify($rootScope.infoUsuario));
			$rootScope.nombreRol = respuesta.data.rol.nombre;
		}).catch($rootScope.errorhttp);

	};


	if (localStorage.getItem('sapp.rolPrincipal') != null) {
		angular.forEach((localStorage.getItem('sapp.rolPrincipal').split('\"')), function (llave, valor) {
			if (llave != "") {
				$rootScope.nombreRol = llave
			}
		});
	}

	$scope.main = {
		title: 'SAPP',
		settings: {
			navbarHeaderColor: 'scheme-cyan',
			sidebarColor: 'scheme-cyan',
			brandingColor: 'scheme-cyan',
			activeColor: 'light-scheme-color',
			headerFixed: true,
			asideFixed: true,
			rightbarShow: false
		}
	};

	$rootScope.forzar = false;


}]);
