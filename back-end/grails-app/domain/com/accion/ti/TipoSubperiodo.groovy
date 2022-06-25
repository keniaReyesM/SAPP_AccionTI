package com.accion.ti

class TipoSubperiodo {

	String nombre

	static hasMany = [subperiodos: Subperiodo]

	static mapping = {
		id column: "id_tipo_subperiodo"
		version false
	}

	static constraints = {
		nombre maxSize: 45, unique: true
	}
}
