package com.accion.ti

class Docente {

	Date fechaRegistro
	String matricula
	Estatus estatus
	Persona persona

	static hasMany = [actividades: Actividad, calendariosMateria: CalendarioMateria]
	static belongsTo = [Estatus, Persona]

	static mapping = {
		id column: "id_docente"
		version false
	}

	static constraints = {
		matricula maxSize: 45, unique: true
	}
}
