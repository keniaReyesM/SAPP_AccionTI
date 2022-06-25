package com.accion.ti

class Pago {

	Double monto
	Date fechaPago
	Alumno alumno
	Estatus estatus
	PlanPago planPago

	static hasMany = [aplicacionesBecas: AplicacionBeca]
	static belongsTo = [Alumno, Estatus, PlanPago]

	static mapping = {
		id column: "id_pago"
		version false
	}
}
