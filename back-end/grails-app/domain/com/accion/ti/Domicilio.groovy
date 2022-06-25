package com.accion.ti

class Domicilio {

	String calle
	String codigoPostal
	String colonia
	String entidadFederativa
	String municipio
	String numeroExterior
	String numeroInterior
	Persona persona

	static belongsTo = [Persona]

	static mapping = {
		id column: "id_domicilio"
		version false
	}

	static constraints = {
		calle maxSize: 100
		codigoPostal maxSize: 8
		colonia maxSize: 100
		entidadFederativa maxSize: 100
		municipio maxSize: 100
		numeroExterior maxSize: 12
		numeroInterior nullable: true, maxSize: 12
	}
}
