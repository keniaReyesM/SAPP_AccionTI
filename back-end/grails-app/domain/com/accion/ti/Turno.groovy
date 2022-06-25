package com.accion.ti

class Turno {

	String nombre
	Date horaInicio
	Date horaFin

	static hasMany = [grupos: Grupo]

	static mapping = {
		id column: "id_turno"
		version false
		horaInicio sqlType: "time"
		horaFin sqlType: "time"
	}

	static constraints = {
		nombre maxSize: 45
	}
}
