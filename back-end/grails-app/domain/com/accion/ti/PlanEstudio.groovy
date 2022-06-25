package com.accion.ti

class PlanEstudio {

	String nombre
	String rvoe
	byte[] archivoPdf
	Estatus estatus
	Periodo periodo

	static hasMany = [alumnos: Alumno,
	                  generaciones: Generacion,
	                  materias: Materia]
	static belongsTo = [Estatus, Periodo]

	static mapping = {
		id column: "id_plan_estudio"
		version false
	}
	static constraints = {
		archivoPdf nullable: true
		nombre unique: true, maxSize: 255, blank: false
	}
}
