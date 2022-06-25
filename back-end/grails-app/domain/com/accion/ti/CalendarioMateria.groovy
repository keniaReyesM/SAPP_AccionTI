package com.accion.ti

class CalendarioMateria {

	Date fechaRegistro
	Grupo grupo
	Materia materia
	Docente docente

	static hasMany = [alumnoMaterias: AlumnoMateria,
	                  horarioMaterias: HorarioMateria]
	static belongsTo = [Grupo, Materia, Docente]

	static mapping = {
		id column: "id_calendario_materia"
		version false
	}
}
