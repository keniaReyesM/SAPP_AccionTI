modules = {
    estilosBase{
        resource url:[dir:'css', file:'bootstrap.min.css'], disposition: 'head', exclude:'*', attrs:[:]
        resource url:[dir:'css', file:'font-awesome.min.css'], disposition: 'head', exclude:'*', attrs:[:]
        resource url:[dir:'css', file:'animate.min.css'], disposition: 'head', exclude:'*', attrs:[:]
        resource url:[dir:'css', file:'estilo.css'], disposition: 'head', exclude:'*', attrs:[:]
    }

    estilos{
        dependsOn 'estilosBase'
        resource url:[dir:'css', file:'loading-bar.min.css'], disposition: 'head', exclude:'minify', attrs:[:]
        resource url:[dir:'css', file:'fullcalendar.min.css'], disposition: 'head', exclude:'minify', attrs:[:]
        resource url:[dir:'css', file:'ng-img-crop.css'], disposition: 'head', attrs:[:]
        resource url:[dir:'css', file:'angular-ui-tree.min.css'], disposition: 'head', exclude:'minify', attrs:[:]
        resource url:[dir:'css', file:'select.min.css'], disposition: 'head', exclude:'minify', attrs:[:]
        resource url:[dir:'css', file:'owl.carousel.css'], disposition: 'head', attrs:[:]
        resource url:[dir:'css', file:'daterangepicker.css'], disposition: 'head', attrs:[:]
        resource url:[dir:'css', file:'ng-tags-input.min.css'], disposition: 'head', exclude:'minify', attrs:[:]
        resource url:[dir:'css', file:'ng-tags-input.bootstrap.css'], disposition: 'head', attrs:[:]
        resource url:[dir:'css', file:'hotkeys.min.css'], disposition: 'head', exclude:'minify', attrs:[:]
        resource url:[dir:'css', file:'xeditable.min.css'], disposition: 'head', exclude:'minify', attrs:[:]
        resource url:[dir:'css', file:'jquery-clockpicker.min.css'], disposition: 'head', exclude:'minify', attrs:[:]
        resource url:[dir:'css', file:'ngToast.min.css'], disposition: 'head', exclude:'minify', attrs:[:]
        resource url:[dir:'css', file:'ngToast-animations.min.css'], disposition: 'head', exclude:'minify', attrs:[:]
        resource url:[dir:'css', file:'textAngular.css'], disposition: 'head', attrs:[:]
        resource url:[dir:'css', file:'app.css'], disposition: 'head', attrs:[:]
        resource url:[dir:'css', file:'angular-bootstrap-calendar.min.css'], disposition: 'head', attrs:[:]
    }

    login{
        dependsOn 'estilosBase'
        resource url:[dir:'css', file:'login.css'], disposition: 'head', attrs:[:]
        resource url:[dir:'js', file:'jquery.min.js'], disposition: 'head', exclude:'minify'
    }

    librerias{
        resource url:[dir:'js', file:'jquery.min.js'], disposition: 'head', exclude:'minify'
        resource url:[dir:'js', file:'es5-shim.min.js'], disposition: 'head', exclude:'minify'
        resource url:[dir:'js', file:'pdf.min.js'], disposition: 'head', exclude:'minify'
        resource url:[dir:'js', file:'angular.min.js'], disposition: 'head', exclude:'minify'
        resource url:[dir:'js', file:'angular-animate.min.js'], disposition: 'head', exclude:'minify'
		resource url:[dir:'js', file:'angular-locale_es-mx.js'], disposition: 'head', exclude:'minify'
        resource url:[dir:'js', file:'ui-bootstrap-tpls-1.3.3.min.js'], disposition: 'head', exclude:'minify'
        resource url:[dir:'js', file:'angular-cookies.min.js'], disposition: 'head', exclude:'minify'
        resource url:[dir:'js', file:'angular-file-upload.min.js'], disposition: 'head', exclude:'minify'
        resource url:[dir:'js', file:'loading-bar.min.js'], disposition: 'head', exclude:'minify'
        resource url:[dir:'js', file:'angular-aria.min.js'], disposition: 'head', exclude:'minify'
        resource url:[dir:'js', file:'angular-messages.min.js'], disposition: 'head', exclude:'minify'
        resource url:[dir:'js', file:'moment-with-locales.min.js'], disposition: 'head', exclude:'minify'
        resource url:[dir:'js', file:'angular-moment.min.js'], disposition: 'head', exclude:'minify'
        resource url:[dir:'js', file:'angular-resource.min.js'], disposition: 'head', exclude:'minify'
        resource url:[dir:'js', file:'angular-sanitize.min.js'], disposition: 'head', exclude:'minify'
        resource url:[dir:'js', file:'angular-touch.min.js'], disposition: 'head', exclude:'minify'
        resource url:[dir:'js', file:'fullcalendar.min.js'], disposition: 'head', exclude:'minify'
        resource url:[dir:'js', file:'gcal.js'], disposition: 'head'
        resource url:[dir:'js', file:'lang-all.js'], disposition: 'head'
        resource url:[dir:'js', file:'calendar.js'], disposition: 'head'
        resource url:[dir:'js', file:'angular-ui-router.min.js'], disposition: 'head', exclude:'minify'
        resource url:[dir:'js', file:'select.min.js'], disposition: 'head', exclude:'minify'
        resource url:[dir:'js', file:'angular-ui-tree.min.js'], disposition: 'head', exclude:'minify'
        resource url:[dir:'js', file:'ui-utils.min.js'], disposition: 'head', exclude:'minify'
        resource url:[dir:'js', file:'html.sortable.min.js'], disposition: 'head', exclude:'minify'
        resource url:[dir:'js', file:'html.sortable.angular.min.js'], disposition: 'head', exclude:'minify'
        resource url:[dir:'js', file:'jquery.slimscroll.min.js'], disposition: 'head', exclude:'minify'
        resource url:[dir:'js', file:'jquery.sparkline.js'], disposition: 'head'
        resource url:[dir:'js', file:'ng-tags-input.min.js'], disposition: 'head', exclude:'minify'
        resource url:[dir:'js', file:'ng-img-crop.js'], disposition: 'head', exclude:'minify'
        resource url:[dir:'js', file:'owl.carousel.min.js'], disposition: 'head', exclude:'minify'
        resource url:[dir:'js', file:'daterangepicker.js'], disposition: 'head', exclude:'*'
        resource url:[dir:'js', file:'bootstrap-slider.js'], disposition: 'head', exclude:'*'
        resource url:[dir:'js', file:'bootstrap-filestyle.min.js'], disposition: 'head', exclude:'*'
        resource url:[dir:'js', file:'angular-local-storage.min.js'], disposition: 'head', exclude:'minify'
        
        resource url:[dir:'js', file:'hotkeys.min.js'], disposition: 'head', exclude:'minify'
        resource url:[dir:'js', file:'xeditable.min.js'], disposition: 'head', exclude:'minify'
        resource url:[dir:'js', file:'angular-idle.min.js'], disposition: 'head', exclude:'minify'
        resource url:[dir:'js', file:'web-notification.js'], disposition: 'head'
        resource url:[dir:'js', file:'angular-web-notification.js'], disposition: 'head'
        resource url:[dir:'js', file:'console.frog.js'], disposition: 'head'
        resource url:[dir:'js', file:'jquery-clockpicker.min.js'], disposition: 'head', exclude:'minify'
        resource url:[dir:'js', file:'re-tree.min.js'], disposition: 'head', exclude:'minify'
        resource url:[dir:'js', file:'ng-device-detector.min.js'], disposition: 'head', exclude:'minify'
        resource url:[dir:'js', file:'datetime-picker.min.js'], disposition: 'head', exclude:'minify'
        resource url:[dir:'js', file:'satellizer.min.js'], disposition: 'head', exclude:'minify'
        resource url:[dir:'js', file:'angular.audio.js'], disposition: 'head'
        resource url:[dir:'js', file:'angular-filter.min.js'], disposition: 'head', exclude:'minify'
        resource url:[dir:'js', file:'pdf.worker.min.js'], disposition: 'head', exclude:'minify'
        resource url:[dir:'js', file:'angular-pdf-viewer.min.js'], disposition: 'head', exclude:'minify'
        resource url:[dir:'js', file:'ngToast.min.js'], disposition: 'head', exclude:'minify'
        resource url:[dir:'js', file:'ng-pluralize-html.js'], disposition: 'head'
        resource url:[dir:'js', file:'textAngular-rangy.min.js'], disposition: 'head', exclude:'minify'
        resource url:[dir:'js', file:'textAngular-sanitize.min.js'], disposition: 'head', exclude:'minify'
        resource url:[dir:'js', file:'textAngular.min.js'], disposition: 'head', exclude:'minify'
        resource url:[dir:'js', file:'angular-bootstrap-calendar.min.js'], disposition: 'head', exclude:'minify'
        resource url:[dir:'js', file:'angular-bootstrap-calendar-tpls.js'], disposition: 'head', exclude:'minify'
        resource url:[dir:'js', file:'moment-timezone.js'], disposition: 'head', exclude:'minify'
        
    }

    angular {
        dependsOn 'estilos, librerias'
        // Aplicacion
        resource url:[dir:'app', file:'app.js'], disposition: 'head'

        //Directivas
        resource url:[dir:'app/directives', file:'directive.js'], disposition: 'head'
        
        // SERVICIOS APLICACIÓN
        resource url:[dir:'app/services', file:'token.ser.js'], disposition: 'head'
        resource url:[dir:'app/services', file:'periodo.ser.js'], disposition: 'head'
        
 		//CONTROLLERS
        resource url:[dir:'app/controllers', file:'principal.ctr.js'], disposition: 'head'
        resource url:[dir:'app/controllers', file:'secundario.ctr.js'], disposition: 'head'
        resource url:[dir:'app/controllers', file:'nav.ctr.js'], disposition: 'head'
        resource url:[dir:'app/controllers', file:'crud.ctr.js'], disposition: 'head'

		//MARK: RUTAS
 		resource url:[dir:'app/routers', file:'periodo.rte.js'], disposition: 'head'
    }
}
