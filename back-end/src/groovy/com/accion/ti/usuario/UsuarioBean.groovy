package com.accion.ti.usuario

import com.accion.ti.persona.PersonaBean
import com.accion.ti.rol.RolBean

class UsuarioBean extends PersonaBean {

    Long idUsuario;
    String username
    String password
    boolean enabled
    RolBean rol

}
