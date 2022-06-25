package com.accion.ti

class Alergia {

	Date fechaRegistro
	String descripcion
	Persona persona

	static belongsTo = [Persona]

	static mapping = {
		id column: "id_alergia"
		version false
	}

	static constraints = {
		descripcion maxSize: 400
	}
}
