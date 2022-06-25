<!DOCTYPE html>
<!--[if lt IE 7 ]> <html lang="en" class="no-js ie6"> <![endif]-->
<!--[if IE 7 ]>    <html lang="en" class="no-js ie7"> <![endif]-->
<!--[if IE 8 ]>    <html lang="en" class="no-js ie8"> <![endif]-->
<!--[if IE 9 ]>    <html lang="en" class="no-js ie9"> <![endif]-->
<html ng-app="SAPP" ng-controller="MainCtrl as mCtr" class="no-js {{containerClass}}">

<head>
	<meta charset="utf-8">
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
	<title>
		<g:layoutTitle default="sapp" />
	</title>
	<meta name="description" content="sapp">
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
	<link rel="icon" href="${resource(dir: 'images', file: 'favicon.ico?v=3')}" type="image/x-icon" />
	<base href='/sapp/'>
	<g:layoutHead />
</head>

<body id="minovate" class="{{main.settings.navbarHeaderColor}} {{main.settings.activeColor}} {{containerClass}} sidebar-xs header-fixed aside-fixed rightbar-hidden appWrapper"
 ng-class="{'header-fixed': main.settings.headerFixed, 'header-static': !main.settings.headerFixed, 'aside-fixed': main.settings.asideFixed, 'aside-static': !main.settings.asideFixed, 'rightbar-show': main.settings.rightbarShow, 'rightbar-hidden': !main.settings.rightbarShow}">
	<div ng-if="cargando.valor">
		<div class="modalZona">
			<div class="contenido">
				<h2>{{cargando.descripcion}}</h2>
				<img class="mediano" src="images/cargando.gif">
			</div>
		</div>
	</div>

	<script type="text/ng-template" id="nodes_renderer1.html">
		<div ui-tree-handle class="tree-node tree-node-content">
			<a class="btn btn-success btn-xs" data-nodrag ng-click="toggle(this)">
				<span class="glyphicon" ng-class="{'glyphicon-chevron-right': collapsed, 'glyphicon-chevron-down': !collapsed}"></span>
			</a> {{node.descripcion}}
			<a class="pull-right btn btn-danger btn-xs" data-nodrag ng-click="remove(this)">
				<span class="glyphicon glyphicon-remove"></span>
			</a>
			<a class="pull-right btn btn-primary btn-xs" data-nodrag ng-click="newSubItem(this)" style="margin-right: 8px;">
				<span class="glyphicon glyphicon-plus"></span>
			</a>
		</div>
		<ol ui-tree-nodes="" ng-model="node.nodes" ng-class="{hidden: collapsed}">
			<li ng-repeat="node in node.nodes" ui-tree-node ng-include="'nodes_renderer1.html'"> </li>
		</ol>
	</script>
	<script type="text/ng-template" id="nodes_renderer2.html">
		<div class="tree-node">
			<div class="pull-left tree-handle" ui-tree-handle>
				<span class="glyphicon glyphicon-list"></span>
			</div>
			<div class="tree-node-content">
				<a class="btn btn-success btn-xs" data-nodrag ng-click="toggle(this)">
					<span class="glyphicon" ng-class="{
            'glyphicon-chevron-right': collapsed,
            'glyphicon-chevron-down': !collapsed
            }">
					</span>
				</a> {{node.descripcion}}
				<a class="pull-right btn btn-danger btn-xs" data-nodrag ng-click="remove(this)">
					<span class="glyphicon glyphicon-remove"></span>
				</a>
				<a class="pull-right btn btn-primary btn-xs" data-nodrag ng-click="newSubItem(this)" style="margin-right: 8px;">
					<span class="glyphicon glyphicon-plus"></span>
				</a>
			</div>
		</div>
		<ol ui-tree-nodes="" ng-model="node.nodes" ng-class="{hidden: collapsed}">
			<li ng-repeat="node in node.nodes" ui-tree-node ng-include="'nodes_renderer2.html'"> </li>
		</ol>
	</script>
	<!--Plantillas para ngTagsInput-->
	<script type="text/ng-template" id="tag-template">
		<div class="tag-template">
			<div>
				<span>{{$getDisplayText()}}</span>
				<a class="remove-button" ng-click="$removeTag()">
					<i class="fa fa-times text-lightred"></i>
				</a>
			</div>
		</div>
	</script>
	<script type="text/ng-template" id="autocomplete-template">
		<div class="autocomplete-template text-white">
			<div>
				<span ng-bind-html="$highlight($getDisplayText())"></span>
			</div>
		</div>
	</script>
	<script type="text/ng-template" id="mensajes-error">
		<i ng-message="required">Se requiere completar esta información.</i>
		<!-- <i ng-message="maxlength">No se acepta una descripción muy grande</i> -->
		<i ng-message="maxlength">La descripción excede el número de caracteres permitidos.</i>
		<i ng-message="minlength">No se acepta una descripción muy corta.</i>
		<i ng-message="min">Escribe un valor mayor.</i>
		<i ng-message="number">No se permiten letras o símbolos.</i>
		<i ng-message="max">Escribe un valor menor.</i>
		<i ng-message="pattern">No es una descripción válida.</i>
	</script>
	<!--POPOVERS (aqui agregan los que falten)-->
	<script type="text/ng-template" id="confirmacionSubmitPopOver.html">
		<div class="row">
			<div class="col-lg-6 p-0 m-0">
				<button type="button" class="btn btn-link btn-block text-strong text-danger" ng-click="$parent.popoverIsOpen = !$parent.popoverIsOpen">
					<i class="fa fa-ban"></i> Cancelar</button>
			</div>
			<div class="col-lg-6 p-0 m-0">
				<button type="submit" class="btn btn-link btn-block text-strong text-greensea">
					<i class="fa fa-check-circle-o"></i> Confirmar</button>
			</div>
		</div>
	</script>


	
	<script type="text/ng-template" id="confirmacionModificar.html">
		<div class="row"> 
			<div class="col-lg-12 p-0 m-0"> 
				<button type="success" class="btn btn-link btn-block text-strong text-greensea">
					<i class="fa fa-check-circle-o"></i> Confirmar</button>
			</div>
		</div>
	</script>
	
	<script type="text/ng-template" id="confirmacionPopOverGeneral.html">
		<div class="row">
			<div class="col-lg-12 p-0 m-0">
				<button type="button" class="btn btn-link btn-block text-strong text-greensea" ng-click="ctr.eliminarObjeto(objeto.id, $index)">
					<i class="fa fa-check-circle-o"></i> Confirmar</button>
			</div>
		</div>
	</script>
	<script type="text/ng-template" id="confirmacionPopCambioEstadoActivo.html">
		<div class="row">
			<div class="col-lg-12 p-0 m-0">
				<button type="button" class="btn btn-link btn-block text-strong text-greensea" ng-click="ctr.cambiarEstadoObjeto(objeto.id, $index, 1)">
					<i class="fa fa-check-circle-o"></i> Confirmar</button>
			</div>
		</div>
	</script>
	<script type="text/ng-template" id="confirmacionPopCambioEstadoInactivo.html">
		<div class="row">
			<div class="col-lg-12 p-0 m-0">
				<button type="button" class="btn btn-link btn-block text-strong text-greensea" ng-click="ctr.cambiarEstadoObjeto(objeto.id, $index, 2)">
					<i class="fa fa-check-circle-o"></i> Confirmar</button>
			</div>
		</div>
	</script>






	<script type="text/ng-template" id="confirmacionPopOverCancelar.html">
		<div class="row">
			<div class="col-lg-12 p-0 m-0">
				<button type="button" class="btn btn-link btn-block text-strong text-greensea" ng-click="ctr.cambiarAccion(0)">
					<i class="fa fa-check-circle-o"></i> Confirmar</button>
			</div>
		</div>
	</script>

	




	

	
	<!--POPOVERS FIN-->
	<!-- Application content -->
	<div id="wrap" ui-view autoscroll="false"></div>
	<!-- Page Loader -->
	<div id="pageloader" page-loader></div>
	<toast></toast>
	<!--uib-alert ng-repeat="notificacion in notificaciones" type="{{notificacion.tipo}}" class="alert-p alert-big bg-{{notificacion.tipo}}"
	    dismiss-on-timeout="7000" close="notificaciones.splice($index,1)"><i class="fa fa-2x" ng-class="{'fa-check-circle-o':notificacion.tipo==='success','fa-exclamation-triangle':notificacion.tipo==='warning','fa-times-circle-o':notificacion.tipo==='danger'}"></i>&nbsp;&nbsp;&nbsp;
		<ul ng-bind-html="notificacion.mensaje"></ul>
	</uib-alert-->
</body>

</html>
