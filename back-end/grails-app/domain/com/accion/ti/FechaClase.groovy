package com.accion.ti

class FechaClase {

	Date fechaClase
	Estatus estatus
	HorarioMateria horarioMateria

	static hasMany = [alumnoFechaClases: AlumnoFechaClase]
	static belongsTo = [Estatus, HorarioMateria]

	static mapping = {
		id column: "id_fecha_clase"
		version false
		fechaClase sqlType: "date"
	}
}
