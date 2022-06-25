package com.accion.ti

class HorarioMateria {

	Date horaInicio
	Date horaFin
	CalendarioMateria calendarioMateria
	Dia dia

	static hasMany = [fechasClases: FechaClase]
	static belongsTo = [CalendarioMateria, Dia]

	static mapping = {
		id column: "id_horario_materia"
		version false
		horaInicio sqlType: "time"
		horaFin sqlType: "time"
	}
}
