package com.accion.ti

class EnfermedadCronica {

	Date fechaRegistro
	String descripcion
	Persona persona

	static belongsTo = [Persona]

	static mapping = {
		id column: "id_enfermedad_cronica"
		version false
	}

	static constraints = {
		descripcion maxSize: 400
	}
}
