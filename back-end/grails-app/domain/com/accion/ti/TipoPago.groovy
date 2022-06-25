package com.accion.ti

class TipoPago {

	String nombre

	static hasMany = [becas: Beca,
	                  planesPago: PlanPago]

	static mapping = {
		id column: "id_tipo_pago"
		version false
	}

	static constraints = {
		nombre maxSize: 45, unique: true
	}
}
