/**
 * @author Kenia Reyes
 */

 import {API_PATH} from "config/ServiceConfig";
 import  MainService  from "services/MainService";

 export default class LoginService extends MainService {
 
     static login(usuario, contrasena){
         return this.postUN(API_PATH+"login", {username: usuario, password: contrasena});
     }
 
     static validarUsuarioLogin(usuario){
         return this.postUN(API_PATH+"usuario/validarUsuarioLogin", {username: usuario});
     }
     
     static obtenerInformacionUsuarioLogin(usuario){
         return this.postSEC(API_PATH+"usuario/obtenerInformacionUsuarioLogin", {username: usuario});
     }
 
 }