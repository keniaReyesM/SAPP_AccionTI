package com.accion.ti

class TipoEstatus {

	String nombre

	static hasMany = [estatus: Estatus]

	static mapping = {
		id column: "id_tipo_estatus"
		version false
	}

	static constraints = {
		nombre maxSize: 45, unique: true
	}
}
