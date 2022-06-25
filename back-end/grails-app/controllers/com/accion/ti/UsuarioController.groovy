package com.accion.ti


import com.accion.ti.exception.ServiceException
import com.accion.ti.usuario.UsuarioBean
import grails.converters.JSON
import org.springframework.http.HttpStatus

class UsuarioController {

    UsuarioService usuarioService;

    def validarUsuarioLogin() {
        try {

            String username = request.JSON.username;
            usuarioService.validarUsuario( username )

            render(status: HttpStatus.OK);
        } catch (ServiceException e) {
            render(status: HttpStatus.BAD_REQUEST, text: e.getMessage());
        }
    }

    def obtenerInformacionUsuarioLogin() {
        try {

            String username = request.JSON.username;
            UsuarioBean usuarioDTO = usuarioService.obtenerInformacionUsuarioLogin( username )

            render( usuarioDTO as JSON)
        } catch (ServiceException e) {
            render(status: HttpStatus.BAD_REQUEST, text: e.getMessage());
        }
    }


}
