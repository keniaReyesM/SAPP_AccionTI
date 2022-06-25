package com.accion.ti


import com.accion.ti.paginacion.PaginacionBean
import com.accion.ti.paginacion.PaginacionListaBean
import com.accion.ti.exception.ServiceException
import com.accion.ti.periodo.PeriodoBean
import org.apache.commons.logging.LogFactory
import org.hibernate.transform.Transformers

class PeriodoService {

    private static final LOGGER = LogFactory.getLog(this)
    static transactional = false
    MessageService messageService
    UtileriaService utileriaService

    PaginacionListaBean<Map> listarPaginado(PaginacionBean paginacion) throws ServiceException {

        try {

            String busqueda = "%${paginacion.getBusqueda()}%";

            def criteria = Periodo.createCriteria().list(max: paginacion.max, offset: (paginacion.pagina * paginacion.max - paginacion.max)) {
                resultTransformer(Transformers.ALIAS_TO_ENTITY_MAP)

                projections {
                    property 'id', 'idPeriodo'
                    property 'nombre', 'nombre'
                    property 'fechaInicio', 'fechaInicio'
                    property 'fechaFin', 'fechaFin'
                }

                or {
                    ilike("nombre", busqueda)
                }

                order("id", "desc")
            }


            return new PaginacionListaBean<Map>(elementos: criteria, total: criteria.totalCount);

        } catch (Exception e) {
            LOGGER.error(e.getMessage())
            throw new ServiceException(messageService.getMessageErrors(e))
        }

    }

    List<Map> listarTodos() throws ServiceException {

        try {

            def lista = Periodo.createCriteria().list() {
                resultTransformer(Transformers.ALIAS_TO_ENTITY_MAP)
                projections {
                    property 'id', 'idPeriodo'
                    property 'nombre', 'nombre'
                    property 'fechaInicio', 'fechaInicio'
                    property 'fechaFin', 'fechaFin'
                }
                order("id", "desc")
            }
            return lista;
        } catch (Exception e) {
            LOGGER.error(e.getMessage())
            throw new ServiceException(messageService.getMessageErrors(e))
        }

    }

    void registrar(PeriodoBean periodoBean) throws ServiceException {

        Periodo.withTransaction { status ->

            try {

                Periodo periodo = new Periodo();
                periodo.setNombre(periodoBean.getNombre())
                periodo.setFechaInicio( periodoBean.getFechaInicio())
                periodo.setFechaFin( periodoBean.getFechaFin())
                periodo.save(flush: true, failOnError: true)

            } catch (Exception e) {
                status.setRollbackOnly()
                LOGGER.error(messageService.getMessageErrors(e))
                throw new ServiceException(messageService.getMessageErrors(e))
            }
        }
    }

    void actualizar(PeriodoBean periodoBean) throws ServiceException {

        Periodo.withTransaction { status ->

            try {

                Periodo periodo = Periodo.findById(periodoBean.getIdPeriodo())
                if (periodo == null) {
                    throw new ServiceException(messageService.getMessage("default.error.not.found", "Periodo", periodoBean.getIdPeriodo()))
                }
                periodo.setNombre(periodoBean.getNombre())
                periodo.setFechaInicio( periodoBean.getFechaInicio())
                periodo.setFechaFin( periodoBean.getFechaFin())
                periodo.save(flush: true, failOnError: true)

            } catch (Exception e) {
                status.setRollbackOnly()
                LOGGER.error(messageService.getMessageErrors(e))
                throw new ServiceException(messageService.getMessageErrors(e))
            }
        }
    }

    def obtener(Long idPeriodo) throws ServiceException {

        try {

            Periodo periodo = Periodo.findById(idPeriodo)
            if (periodo == null) {
                throw new ServiceException(messageService.getMessage("default.error.not.found", "Periodo", idPeriodo))
            }
            def periodoBean = [:];
            periodoBean.idPeriodo = periodo.getId()
            periodoBean.nombre =  periodo.getNombre()
            periodoBean.fechaInicio = utileriaService.formatoFecha(periodo.getFechaInicio())
            periodoBean.fechaFin =   utileriaService.formatoFecha(periodo.getFechaFin())

            return periodoBean

        } catch (Exception e) {
            LOGGER.error(messageService.getMessageErrors(e))
            throw new ServiceException(messageService.getMessageErrors(e))
        }

    }

    void eliminar(Long idPeriodo) throws ServiceException {

        Periodo.withTransaction { status ->

            try {

                Periodo periodo = Periodo.findById(idPeriodo)
                if (periodo == null) {
                    throw new ServiceException(messageService.getMessage("default.error.not.found", "Periodo", idPeriodo))
                }

                def subperiodos = Subperiodo.findAllByPeriodo(periodo);
                if (!subperiodos.isEmpty()) {
                    throw new ServiceException(messageService.getMessage("default.not.deleted.message", periodo.getNombre(), "Subperiodos"))
                }

                periodo.delete(flush: true, failOnError: true)

            } catch (Exception e) {
                status.setRollbackOnly()
                LOGGER.error(messageService.getMessageErrors(e))
                throw new ServiceException(messageService.getMessageErrors(e))
            }
        }
    }

}
