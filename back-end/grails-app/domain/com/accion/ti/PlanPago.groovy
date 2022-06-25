package com.accion.ti

class PlanPago {

	Double monto
	Estatus estatus
	Subperiodo subperiodo
	TipoPago tipoPago

	static hasMany = [pagos: Pago]
	static belongsTo = [Estatus, Subperiodo, TipoPago]

	static mapping = {
		id column: "id_plan_pago"
		version false
	}
}
