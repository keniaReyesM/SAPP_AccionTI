package com.accion.ti

class Subperiodo {

	Date fechaFin
	Date fechaInicio
	String nombre
	Periodo periodo
	TipoSubperiodo subperiodo

	static hasMany = [planPagos: PlanPago]
	static belongsTo = [Periodo, TipoSubperiodo]

	static mapping = {
		id column: "id_subperiodo"
		version false
	}

	static constraints = {
		nombre maxSize: 255, unique: ["periodo"]
	}
}
