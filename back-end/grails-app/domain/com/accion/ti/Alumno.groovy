package com.accion.ti

class Alumno {

	String matricula
	Estatus estatus
	Persona persona
	PlanEstudio planEstudio

	static hasMany = [alumnoGrupos: AlumnoGrupo,
	                  becaAlumnos: BecaAlumno,
	                  pagos: Pago,
	                  responsablesAlumno: ResponsableAlumno]
	static belongsTo = [Estatus, Persona, PlanEstudio]

	static mapping = {
		id column: "id_alumno"
		version false
	}

	static constraints = {
		matricula maxSize: 45, unique: true
	}
}
