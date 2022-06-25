package com.accion.ti

import com.accion.ti.paginacion.PaginacionBean
import org.joda.time.DateTime
import org.joda.time.format.DateTimeFormat

// import org.codehaus.groovy.grails.web.servlet.mvc.GrailsParameterMap

class UtileriaService {
    
    PaginacionBean getPaginationDTO(def params ){
        return new PaginacionBean( pagina: params?.pagina?:1, max: params?.max?.toLong()?:10, busqueda: params?.busqueda?:"" );
    }

    Date parsearFecha(String fecha) {
        return DateTime.parse(fecha).toLocalDateTime().toDate()
    }

    String formatoFecha(Date fecha){
        return DateTimeFormat.forPattern("yyyy-MM-dd").print(new DateTime(fecha))
    }

//    Status getStatus(String nameStatus = "Activo", String typeStatus = "General"){
//        return Status.findByNameAndTypeStatus(nameStatus, TypeStatus.findByName(typeStatus))
//    }
//    Status getNewStatusGeneral(Status status){
//        return status.getName().equalsIgnoreCase("Activo") ? getStatus("Inactivo") : getStatus();
//    }

}