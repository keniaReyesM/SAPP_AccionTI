package com.accion.ti

class BecaAlumno {

	Date fechaInicio
	Date fechaFin
	Date fechaRegistro
	Alumno alumno
	Beca beca
	Estatus estatus

	static hasMany = [aplicacionBecas: AplicacionBeca]
	static belongsTo = [Alumno, Beca, Estatus]

	static mapping = {
		id column: "id_beca_alumno"
		version false
	}
}
