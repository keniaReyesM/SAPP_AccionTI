package com.accion.ti

class Generacion {

	Integer numeroGeneracion
	Periodo periodo
	PlanEstudio planEstudio

	static hasMany = [grupos: Grupo]
	static belongsTo = [Periodo, PlanEstudio]

	static mapping = {
		id column: "id_generacion"
		version false
	}
}
