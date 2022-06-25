import com.accion.ti.*
import org.codehaus.groovy.grails.commons.GrailsApplication

class BootStrap {

    GrailsApplication grailsApplication

    def init = { servletContext ->


        def existeUrl = null;

        //PERMISOS: PUBLICOS
        for (String url in ['/', '/index', '/index.gsp', '/error500', '/error500.gsp', '/error404', '/error404.gsp',
                            '/**/static/**', '/**/favicon.ico', '/**/ext/**', '/**/app/**', '/**/fonts/**', '/**/css/**', '/**/images/**',
                            '/**/json/**', '/api/usuario/validarUsuarioLogin',
                            '/login', '/error', '/login.*', '/login/*', '/logout', '/logout.*', '/logout/*', '/oauth/access_token', '/register/forgotPassword']) {
            existeUrl = Recurso.findByUrl(url)
            if (existeUrl.is(null)) {
                new Recurso(url: url, configAttribute: 'permitAll').save()
            } else {
                existeUrl.configAttribute = 'permitAll'
                existeUrl.save()
            }
        }

        grailsApplication.controllerClasses.findAll { it.getFullName() =~ /^com\.accion\.ti\.\w+Controller$/ }.collect { con ->
            [controlador: con.getName()[0].toLowerCase() + con.getName()[1..-1],
             acciones   : con.getClazz().declaredMethods.findAll {
                 it.getDeclaredAnnotations().findAll { it.toString() =~ /grails.web.Action/ }.size()
             }.collect {
                 [nombreMinuscula: '/api/' + con.getName()[0].toLowerCase() + con.getName()[1..-1] + '/' + it.getName(), nombreReal: '/api/' + con.getName()[0].toLowerCase() + con.getName()[1..-1] + '/' + it.getName()]
             }
            ]
        }.each {
            it.acciones.add([nombreMinuscula: '/' + it.controlador + '/', nombreReal: '/' + it.controlador[0].toUpperCase() + it.controlador[1..-1] + '/'])
            it.acciones.findAll {//
                (it.nombreMinuscula.split("/").size() ?: 0) > 2//
            }.findAll {//
                !it.nombreMinuscula.endsWith("index")//
            }.findAll {//
                !it.nombreMinuscula.endsWith("beforeInterceptor")//
            }.each {
                existeUrl = Recurso.findByUrl(it.nombreMinuscula)
                if (existeUrl.is(null)) {
                    new Recurso(url: it.nombreMinuscula.contains('index') ? it.nombreMinuscula.replaceAll(~/api\//, '') : it.nombreMinuscula, configAttribute: 'IS_AUTHENTICATED_FULLY').save()
                }
            }
        }

        def roles = [
                [nombre: "Super administrador", authority: "ROLE_SA", descripcion: "Rol de acceso total de la aplicaci�n."],
                [nombre: "Administrador", authority: "ROLE_ADMIN", descripcion: "Rol de acceso para la gestion de docentes, materias, grupos, etc."],
                [nombre: "Docente", authority: "ROLE_DOCENTE", descripcion: "Rol de acceso como docente"],
                [nombre: "Responsable", authority: "ROLE_RESPONSABLE", descripcion: "Rol para acceso de los padres o tutores."]
        ]


        roles.each {
            Rol rol = Rol.findByNombre(it.nombre)
            if (rol == null) {
                new Rol(nombre: it.nombre, authority: it.authority, descripcion: it.descripcion).save(flush: true)
            }
        }


        def tiposCorreo = ["Personal", "Oficina"]
        tiposCorreo.each {
            if (TipoCorreo.findByNombre(it) == null) {
                new TipoCorreo(nombre: it).save(flush: true)
            }
        }


        def usuarios = [

                [nombre         : "Kenia", primerApellido: "Reyes",
                 segundoApellido: "Sa", curp: "XXXXXXXXXX", correoElectronico: "reyesmolinakenia@gmail.com",
                 fechaNacimiento: new Date(year: 1996, month: 3, date: 27), genero: "Mujer",
                 username       : "kenia", password: "kenia", rol: "ROLE_SA"],
                [nombre         : "Kenia", primerApellido: "Reyes",
                 segundoApellido: "Admin", curp: "XXXXXXXXXX", correoElectronico: "reyesmolinakenia@gmail.com",
                 fechaNacimiento: new Date(year: 1996, month: 3, date: 27), genero: "Mujer",
                 username       : "admin", password: "admin", rol: "ROLE_ADMIN"],

                [nombre         : "Ánimo", primerApellido: "Reyes",
                 segundoApellido: "Molina", curp: "XXXXXXXXXX", correoElectronico: "reyesmolinakenia@gmail.com",
                 fechaNacimiento: new Date(year: 1996, month: 3, date: 27), genero: "Mujer",
                 username       : "docente", password: "docente", rol: "ROLE_DOCENTE"],

                [nombre         : "Rufildo", primerApellido: "Figeroa",
                 segundoApellido: "Molina", curp: "XXXXXXXXXX", correoElectronico: "reyesmolinakenia@gmail.com",
                 fechaNacimiento: new Date(year: 1996, month: 3, date: 27), genero: "Mujer",
                 username       : "responsable", password: "responsable", rol: "ROLE_RESPONSABLE"]
        ]

        usuarios.each {
            Usuario usuario = Usuario.findByUsername(it.username)
            if (usuario == null) {
                Persona persona = new Persona(
                        nombre: it.nombre, primerApellido: it.primerApellido, segundoApellido: it.segundoApellido,
                        curp: it.curp, fechaNacimiento: it.fechaNacimiento, genero: it.genero)
                persona.save(flush: true)

                usuario = new Usuario(username: it.username, password: it.password, persona: persona)
                usuario.save(flush: true)


                // roles.each {
                // }
                UsuarioRol.create(usuario, Rol.findByAuthority(it.rol), true)

                CorreoElectronico correoElectronico = new CorreoElectronico(
                        correoElectronico: it.correoElectronico,
                        persona: persona,
                        principal: 1 as Byte,
                        tipoCorreo: TipoCorreo.findByNombre("Personal"))
                correoElectronico.save(flush: true, failOnError: true)

            }


        }

        def tiposEstatus = [
                [tipoStatus: "Alumno", status: ["Activo", "Inactivo", "Baja temporal", "Baja definitiva"]],
                [tipoStatus: "General", status: ["Activo", "Inactivo"]]]
        tiposEstatus.each { tipoStatusObj ->
            TipoEstatus tipoStatus = TipoEstatus.findByNombre(tipoStatusObj.tipoStatus)
            if (tipoStatus == null) {
                tipoStatus = new TipoEstatus(nombre: tipoStatusObj.tipoStatus)
                tipoStatus.save(flush: true)
            }
            tipoStatusObj.status.each { String nombreStatus ->
                Estatus status = Estatus.findByNombre(nombreStatus)
                if (status == null) {
                    new Estatus(nombre: nombreStatus, tipoEstatus: tipoStatus).save(flush: true)
                }
            }
        }


        def periodos = ["Enero - Febrero 2022", "Febrero - Marzo 2022", "Marzo - Abril 2022", "Abril - Mayo 2022",
        "Mayo - Junio 2022", " Junio - Julio 2022", "Julio - Agosto 2022", "Agosto - Septiembre 2022", "Septiembre - Octubre 2022",
        "Octubre - Noviembre 2022", "Noviembre - Diciembre 2022"]

        periodos.each {
            if(Periodo.findByNombre(it)== null){
                new Periodo(nombre: it, fechaFin: new Date(), fechaInicio: new Date()).save(flush: true, failOnError: true)
            }
        }


    }
    def destroy = {
    }
}
