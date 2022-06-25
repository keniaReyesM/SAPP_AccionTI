package com.accion.ti

class AlumnoMateria {

	AlumnoGrupo alumnoGrupo
	CalendarioMateria calendarioMateria
	Estatus estatus

	static hasMany = [calificacionesMateria: CalificacionMateria]
	static belongsTo = [AlumnoGrupo, CalendarioMateria, Estatus]

	static mapping = {
		id column: "id_alumno_materia"
		version false
	}
}
