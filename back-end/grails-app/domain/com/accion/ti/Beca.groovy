package com.accion.ti

class Beca {

	String nombre
	Double porcentajeDescuento
	TipoPago tipoPago

	static hasMany = [becaAlumnos: BecaAlumno]
	static belongsTo = [TipoPago]

	static mapping = {
		id column: "id_beca"
		version false
	}

	static constraints = {
		nombre maxSize: 45, unique: true
	}
}
