package com.accion.ti

class AlumnoFechaClase {

	AlumnoGrupo alumnoGrupo
	Estatus estatus
	FechaClase fechaClase

	static belongsTo = [AlumnoGrupo, Estatus, FechaClase]

	static mapping = {
		id column: "id_alumno_fecha_clase"
		version false
	}
}
