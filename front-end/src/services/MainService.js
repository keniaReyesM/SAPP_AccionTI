/**
 * @author Kenia Reyes
 */

 import axios from 'axios';

 export default class MainRequest {
 
 
     static getHeaders(){
         let token = "Bearer ".concat(window.localStorage.getItem("access_token"));
        //  let token = "Bearer ".concat((new Vue).$session.get("suimsec_access_token"));
         return {headers: {Authorization : token}};
     }
 
     static postSEC(path, data) {
         return axios.post(path, data, this.getHeaders());
     }
 
     static postUN(path, data) {
         return axios.post(path, data);
     }
 
 
 
 }