package com.accion.ti

class TipoCorreo {

	String nombre

	static hasMany = [correosElectronicos: CorreoElectronico]

	static mapping = {
		id column: "id_tipo_correo"
		version false
	}

	static constraints = {
		nombre maxSize: 45, unique: true
	}
}
