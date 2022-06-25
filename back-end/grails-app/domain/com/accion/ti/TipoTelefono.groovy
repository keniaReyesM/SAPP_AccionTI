package com.accion.ti

class TipoTelefono {

	String nombre

	static hasMany = [telefonos: Telefono]

	static mapping = {
		id column: "id_tipo_telefono"
		version false
	}

	static constraints = {
		nombre maxSize: 45, unique: true
	}
}
