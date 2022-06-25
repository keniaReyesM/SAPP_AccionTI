
/**
 * @author Kenia Reyes
 */

import Component from "views/crud/CrudView";
import Tabla from "components/periodo/PeriodoTabla";
import Formulario from "components/periodo/PeriodoFormulario";
import Servicio from "services/PeriodoService";
import * as Yup from 'yup';

let titulo = "Periodos";
let valoresIniciales = {
    nombre: "",
    fechaInicio: "",
    fechaFin: ""
};

let formularioSchema = Yup.object().shape({
    nombre: Yup.string().max(255).required(),
    fechaInicio: Yup.date().required(),
    fechaFin: Yup.date().required()
});

let ruta = {
    path: "/periodos",
    name: titulo,
    icon: "ni ni-calendar-grid-58",
    component: () => (
        <Component
            Tabla={Tabla}
            titulo={titulo}
            Servicio={Servicio}
            Formulario={Formulario}
            valoresIniciales={valoresIniciales}
            formularioSchema={formularioSchema}
        />
    ),
    sidebar: true,
    roles: ["ROLE_SA", "ROLE_ADMIN", "ROLE_DOCENTE"]
};
export default ruta;