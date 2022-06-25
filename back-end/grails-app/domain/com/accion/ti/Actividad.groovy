package com.accion.ti

class Actividad {

	Date fechaRegistro
	Date fechaInicio
	Date fechaEntrega
	String descripcion
	Integer unidad
	Docente docente
	Estatus estatus
	TipoActividad tipoActividad

	static hasMany = [calificacionActividades: CalificacionActividad,
	                  materialesDidagticos: MaterialDidagtico]
	static belongsTo = [Docente, Estatus, TipoActividad]

	static mapping = {
		id column: "id_actividad"
		version false
	}

	static constraints = {
		descripcion maxSize: 65535
	}
}
