
/**
 * @author Kenia Reyes
 */

 import component from "views/home/HomeView.js";

 let ruta = {
     path: "/",
     name: "Inicio",
     icon: "ni ni-shop",
     component: component,
     sidebar: true,
     roles: ["ROLE_SA", "ROLE_ADMIN", "ROLE_DOCENTE", "ROLE_RESPONSABLE"]
 };
 export default ruta;