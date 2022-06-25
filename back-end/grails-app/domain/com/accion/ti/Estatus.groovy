package com.accion.ti

class Estatus {

	String nombre
	TipoEstatus tipoEstatus

	static hasMany = [actividades: Actividad,
	                  alumnoFechaClases: AlumnoFechaClase,
	                  alumnoGrupos: AlumnoGrupo,
	                  alumnoMaterias: AlumnoMateria,
	                  alumnos: Alumno,
	                  becaAlumnos: BecaAlumno,
	                  calificacionActividads: CalificacionActividad,
	                  calificacionMaterias: CalificacionMateria,
	                  docentes: Docente,
	                  fechaClases: FechaClase,
	                  grupos: Grupo,
	                  pagos: Pago,
	                  planEstudios: PlanEstudio,
	                  planPagos: PlanPago,
	                  responsableAlumnos: ResponsableAlumno]
	static belongsTo = [TipoEstatus]

	static mapping = {
		id column: "id_status"
		version false
	}

	static constraints = {
		nombre maxSize: 45, unique: true
	}
}
