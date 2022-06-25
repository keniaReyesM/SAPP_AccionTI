/**
 * @author Kenia Reyes
 */
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { setLocale } from 'yup';


import "assets/plugins/nucleo/css/nucleo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/scss/argon-dashboard-react.scss";
import "assets/css/estilobtn.css";
import App from "layouts/App.js";


setLocale({
  mixed: {
    default: "${path} no es válido",
    required: "${path} es un campo obligatorio",
    defined: "${path} debe definirse",
    notNull: "${path} no puede ser nulo",
    oneOf: "${path} debe ser uno de los siguientes valores: ${values}",
    notOneOf: "${path} no debe ser uno de los siguientes valores: ${values}",
  },
  string: {
    length: "${path} debe tener exactamente ${length} caracteres",
    min: "${path} debe tener al menos ${min} caracteres",
    max: "${path} debe tener como máximo ${max} caracteres",
    matches: "${path} debe coincidir con lo siguiente: ${regex}",
    email: "${path} debe ser un correo electrónico válido",
    url: "${path} debe ser una URL válida",
    uuid: "${path} debe ser un UUID válido",
    trim: "${path} debe ser una cadena recortada",
    lowercase: "${path} debe ser una cadena en minúsculas",
    uppercase: "${path} debe ser una cadena en mayúsculas",
  },
  number: {
    min: "${path} debe ser mayor o igual que ${min}",
    max: "${path} debe ser menor o igual que ${max}",
    lessThan: "${path} debe ser menor que ${less}",
    moreThan: "${path} debe ser mayor que ${more}",
    positive: "${path} debe ser un número positivo",
    negative: "${path} debe ser un número negativo",
    integer: "${path} debe ser un entero",
  },
  date: {
    min: "${path} campo debe ser posterior a ${min}",
    max: "El campo ${path} debe ser anterior a ${max}",
  }
});


// import AdminLayout from "layouts/Admin.js";
// import AuthLayout from "layouts/Auth.js";


ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" render={(props) => <App {...props} />} />

      {/* <Route path="/admin" render={(props) => <AdminLayout {...props} />} /> */}
      {/* <Route path="/auth" render={(props) => <AuthLayout {...props} />} /> */}
      {/* <Redirect from="/" to="/admin/tables" /> */}

    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
