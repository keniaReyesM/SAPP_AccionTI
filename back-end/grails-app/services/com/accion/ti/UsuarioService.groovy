package com.accion.ti

import com.accion.ti.rol.RolBean
import com.accion.ti.usuario.UsuarioBean
import com.accion.ti.exception.ServiceException
import org.apache.commons.logging.LogFactory

class UsuarioService {

    private static final LOGGER = LogFactory.getLog(this)
    static transactional = false
    MessageService messageService

    void validarUsuario(String username) throws ServiceException {

        try {

            Usuario usuario = Usuario.findByUsername( username );
            if( usuario == null){
                throw new ServiceException( messageService.getMessage("default.error.not.found", "Usuario", username))
            }

            if(!usuario.enabled){
                throw new ServiceException( messageService.getMessage("user.error.not.active", username))
            }

        } catch (def e) {
            LOGGER.error(e.getMessage())
            throw new ServiceException(messageService.getMessageErrors(e))
        }
    }

    UsuarioBean obtenerInformacionUsuarioLogin(String username) throws ServiceException {

        try {

            Usuario usuario = Usuario.findByUsername( username );
            if( usuario == null ){
                throw new ServiceException( messageService.getMessage("default.error.not.found", "Usuario", username))
            }

            List<RolBean> roles = UsuarioRol.findAllByUsuario( usuario )*.rol.collect{
               return  new RolBean(idRol: it.getId(), nombre: it.getNombre(), descripcion: it.getDescripcion())
            }

            
            UsuarioBean usuarioDTO = new UsuarioBean();
            usuarioDTO.setIdUsuario( usuario.getId())
            usuarioDTO.setUsername( usuario.getUsername())
            usuarioDTO.setNombreCompleto( usuario.persona.nombreCompleto)
            usuarioDTO.setRol(roles.get(0))

            return usuarioDTO;

        } catch (Exception e) {
            
            LOGGER.error(e.getMessage())
            throw new ServiceException(messageService.getMessageErrors(e))
        }
    }

}
