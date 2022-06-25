package com.accion.ti

class Telefono {

	String telefono
	Byte principal
	Persona persona
	TipoTelefono tipoTelefono

	static belongsTo = [Persona, TipoTelefono]

	static mapping = {
		id column: "id_telefono"
		version false
	}

	static constraints = {
		telefono maxSize: 15
		principal nullable: true
	}
}
