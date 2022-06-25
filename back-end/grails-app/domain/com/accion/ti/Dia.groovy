package com.accion.ti

class Dia {

	String nombre

	static hasMany = [horariosMaterias: HorarioMateria]

	static mapping = {
		id column: "id_dia"
		version false
	}

	static constraints = {
		nombre maxSize: 45, unique: true
	}
}
