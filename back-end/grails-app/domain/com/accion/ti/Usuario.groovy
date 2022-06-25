package com.accion.ti


import groovy.transform.EqualsAndHashCode
import groovy.transform.ToString

@EqualsAndHashCode(includes='username')
@ToString(includes='username', includeNames=true, includePackage=false)
class Usuario implements Serializable{
	private static final long serialVersionUID = 1
	transient springSecurityService

	String username
	String password
	boolean enabled = true
	boolean accountExpired
	boolean accountLocked
	boolean passwordExpired

	Persona persona
//	Role role


	Usuario(String username, String password) {
		this()
		this.username = username
		this.password = password
	}

	Usuario() {
	}

	Set<Rol> getAuthorities() {
		UsuarioRol.findAllByUsuario(this)*.rol
	}

	def beforeInsert() {
		encodePassword()
	}
	def beforeUpdate() {
		if (isDirty('password')) {
			encodePassword()
		}
	}
	protected void encodePassword() {
		password = springSecurityService?.passwordEncoder ? springSecurityService.encodePassword(password) : password
	}
	static transients = ['springSecurityService']

//	static belongsTo = [Person, Role]

	static mapping = {
		id column: "id_usuario"
		version false
		password column: '`password`'
	}

	static constraints = {
		username maxSize: 50,blank: false
		password maxSize: 300, blank: false
	}
}
