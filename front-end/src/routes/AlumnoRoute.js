
/**
 * @author Kenia Reyes
 */

 import component from "views/home/HomeView.js";

 let ruta = {
     path: "/alumnos",
     name: "Alumnos",
     icon: "ni ni-single-02",
     component: component,
     sidebar: true,
     roles: ["ROLE_SA", "ROLE_ADMIN", "ROLE_DOCENTE"]
 };
 export default ruta;