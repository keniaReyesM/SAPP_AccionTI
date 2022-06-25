package com.accion.ti

class Materia {

	String nombre
	PlanEstudio planEstudio

	static hasMany = [calendariosMateria: CalendarioMateria]
	static belongsTo = [PlanEstudio]

	static mapping = {
		id column: "id_materia"
		version false
	}

	static constraints = {
		nombre maxSize: 255
	}
}
