package com.accion.ti


import com.accion.ti.paginacion.PaginacionBean
import com.accion.ti.paginacion.PaginacionListaBean
import com.accion.ti.exception.ServiceException
import com.accion.ti.periodo.PeriodoBean
import grails.converters.JSON
import org.springframework.http.HttpStatus


class PeriodoController {

    PeriodoService periodoService;
    UtileriaService utileriaService;

    def listarPaginado() {
        try {
            PaginacionBean paginacion = utileriaService.getPaginationDTO(request.JSON)
            PaginacionListaBean<Map> paginacionLista = periodoService.listarPaginado(paginacion);
            render(paginacionLista as JSON)
        } catch (ServiceException e) {
            render(status: HttpStatus.BAD_REQUEST, text: e.getMessage());
        }
    }

    def listarTodos() {
        try {
            List<Map> lista = periodoService.listarTodos();
            render(lista as JSON)
        } catch (ServiceException e) {
            render(status: HttpStatus.BAD_REQUEST, text: e.getMessage());
        }
    }


    def registrar() {
        try {

            def parametros = request.JSON as Map
            parametros.fechaInicio = utileriaService.parsearFecha(parametros.fechaInicio as String)
            parametros.fechaFin = utileriaService.parsearFecha(parametros.fechaFin as String)

            periodoService.registrar( new PeriodoBean( parametros ))
            render(status: HttpStatus.OK);
        } catch (ServiceException | Exception e) {
            render(status: HttpStatus.BAD_REQUEST, text: e.getMessage());
        }
    }

    def obtener() {
        try {
            def periodo = periodoService.obtener( request.JSON?.idPeriodo?.toLong() )
            render(periodo as JSON)
        } catch (ServiceException e) {
            render(status: HttpStatus.BAD_REQUEST, text: e.getMessage());
        }
    }

    def actualizar() {
        try {

            def parametros = request.JSON as Map
            parametros.fechaInicio = utileriaService.parsearFecha(parametros.fechaInicio as String)
            parametros.fechaFin = utileriaService.parsearFecha(parametros.fechaFin as String)

            periodoService.actualizar( new PeriodoBean( parametros ))
            render(status: HttpStatus.OK);
        } catch (ServiceException e) {
            render(status: HttpStatus.BAD_REQUEST, text: e.getMessage());
        }
    }

    def eliminar() {
        try {
            periodoService.eliminar(request.JSON?.idPeriodo?.toLong())
            render(status: HttpStatus.OK);
        } catch (ServiceException e) {
            render(status: HttpStatus.BAD_REQUEST, text: e.getMessage());
        }
    }


}
