package com.accion.ti

class AlumnoGrupo {

	Date fechaRegistro
	Alumno alumno
	Estatus estatus
	Grupo grupo

	static hasMany = [alumnoFechasClase: AlumnoFechaClase,
	                  alumnoMaterias: AlumnoMateria]
	static belongsTo = [Alumno, Estatus, Grupo]

	static mapping = {
		id column: "id_alumnno_grupo"
		version false
	}
}
