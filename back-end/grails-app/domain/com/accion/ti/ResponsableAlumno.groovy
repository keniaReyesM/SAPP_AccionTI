package com.accion.ti

class ResponsableAlumno {

	Date fechaRegistro
	Alumno alumno
	Estatus estatus
	Persona persona

	static belongsTo = [Alumno, Estatus, Persona]

	static mapping = {
		id column: "id_responsable_alumno"
		version false
	}
}
