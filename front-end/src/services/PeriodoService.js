/**
 * @author Kenia Reyes
 */

 import {API_PATH} from "config/ServiceConfig";
 import  MainService  from "services/MainService";

 export default class PeriodoService extends MainService {
  
     static listarPaginado(parametros){
         return this.postSEC(API_PATH+"periodo/listarPaginado", parametros);
     }
     static listarTodos(parametros){
         return this.postSEC(API_PATH+"periodo/listarTodos", parametros);
     }
     static registrar(parametros){
         return this.postSEC(API_PATH+"periodo/registrar", parametros);
     }
     static obtener(parametros){
         return this.postSEC(API_PATH+"periodo/obtener",parametros);
     }
     static actualizar(parametros){
         return this.postSEC(API_PATH+"periodo/actualizar", parametros);
     }
     static eliminar(parametros){
         return this.postSEC(API_PATH+"periodo/eliminar", parametros);
     }
 
 }