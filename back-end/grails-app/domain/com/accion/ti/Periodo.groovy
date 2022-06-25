package com.accion.ti

class Periodo {

	Date fechaFin
	Date fechaInicio
	String nombre

	static hasMany = [generacions: Generacion,
	                  planEstudios: PlanEstudio,
	                  subperiodos: Subperiodo]

	static mapping = {
		id column: "id_periodo"
		version false
		fechaInicio sqlType: "date"
		fechaFin sqlType: "date"
	}

	static constraints = {
		nombre unique: true, maxSize: 255, blank: false
	}
}
