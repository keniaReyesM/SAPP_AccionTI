package com.accion.ti

class Grupo {

	String nombre
	Integer grado
	Date fechaRegistro
	Estatus estatus
	Generacion generacion
	Turno turno

	static hasMany = [alumnoGrupos: AlumnoGrupo,
	                  calendarioMaterias: CalendarioMateria]
	static belongsTo = [Estatus, Generacion, Turno]

	static mapping = {
		id column: "id_grupo"
		version false
	}

	static constraints = {
		nombre maxSize: 100
	}
}
