package com.accion.ti

class Persona {

    String curp
    Date fechaNacimiento
    String genero
    String nombre
    String primerApellido
    String segundoApellido

    String nombreCompleto

    static hasMany = [alergias          : Alergia,
                      alumnos           : Alumno,
                      correoElectronicos: CorreoElectronico,
                      docentes          : Docente,
                      domicilios        : Domicilio,
                      enfermedadCronicas: EnfermedadCronica,
                      telefonos         : Telefono]

    static hasOne = [usuario: Usuario, responsableAlumno: ResponsableAlumno]

    static mapping = {
        id column: "id_persona"
        version false
        fechaNacimiento sqlType: "date"
        nombreCompleto formula: "CONCAT(nombre,' ',primer_apellido,' ',segundo_apellido)"
    }

    static constraints = {
        curp maxSize: 18
        genero maxSize: 10
        segundoApellido nullable: true
        usuario nullable: true, unique: true
		responsableAlumno nullable: true, unique: true
    }
}
