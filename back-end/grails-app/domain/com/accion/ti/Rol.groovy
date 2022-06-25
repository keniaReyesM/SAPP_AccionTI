package com.accion.ti


import groovy.transform.EqualsAndHashCode
import groovy.transform.ToString

@EqualsAndHashCode(includes='authority')
@ToString(includes='authority', includeNames=true, includePackage=false)
class Rol implements Serializable{

	private static final long serialVersionUID = 1

	String nombre
	String descripcion
	String authority

	static hasMany = [ usuarios: UsuarioRol]

	Rol(String authority) {
		this()
		this.authority = authority
	}
	static mapping = {
		id column: "id_rol"
		version false
	}

	static constraints = {
		nombre maxSize: 50, unique: true
		descripcion maxSize: 150
		authority blank: false, unique: true
	}

	Rol() {

	}
}
