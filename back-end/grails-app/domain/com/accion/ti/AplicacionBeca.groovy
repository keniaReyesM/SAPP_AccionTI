package com.accion.ti

class AplicacionBeca {

	BecaAlumno becaAlumno
	Pago pago

	static belongsTo = [BecaAlumno, Pago]

	static mapping = {
		id column: "id_aplicacion_beca"
		version false
	}
}
