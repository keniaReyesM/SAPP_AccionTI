package com.accion.ti

class CalificacionActividad {

	Date fechaRegistro
	Double calificacion
	Actividad actividad
	CalificacionMateria calificacionMateria
	Estatus estatus

	static belongsTo = [Actividad, CalificacionMateria, Estatus]

	static mapping = {
		id column: "id_calificacion_actividad"
		version false
	}
}
