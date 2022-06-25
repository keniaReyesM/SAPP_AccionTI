package com.accion.ti

class CalificacionMateria {

	Double promedio
	Double examen
	Double trabajo
	AlumnoMateria alumnoMateria
	Estatus estatus

	static hasMany = [calificacionActividades: CalificacionActividad]
	static belongsTo = [AlumnoMateria, Estatus]

	static mapping = {
		id column: "id_calificacion_materia"
		version false
	}

	static constraints = {
		promedio nullable: true
		examen nullable: true
		trabajo nullable: true
	}
}
