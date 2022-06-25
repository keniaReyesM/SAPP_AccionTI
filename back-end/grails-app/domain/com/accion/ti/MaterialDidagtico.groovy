package com.accion.ti

class MaterialDidagtico {

	Integer orden
	byte[] archivo
	String nombreArchivo
	Actividad actividad

	static belongsTo = [Actividad]

	static mapping = {
		id column: "id_material_didagtico"
		version false
	}

	static constraints = {
		nombreArchivo maxSize: 100
	}
}
