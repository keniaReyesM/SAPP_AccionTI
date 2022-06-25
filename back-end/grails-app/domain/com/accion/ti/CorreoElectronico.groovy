package com.accion.ti

class CorreoElectronico {

	String correoElectronico
	Byte principal
	Persona persona
	TipoCorreo tipoCorreo

	static belongsTo = [Persona, TipoCorreo]

	static mapping = {
		id column: "id_correo_electronico"
		version false
	}
}
