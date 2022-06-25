package com.accion.ti

class TipoActividad {

	String nombre

	static hasMany = [actividades: Actividad]

	static mapping = {
		id column: "id_tipo_actividad"
		version false
	}

	static constraints = {
		nombre maxSize: 45, unique: true
	}
}
