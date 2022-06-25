
/**
*/

import loginRoute from 'routes/LoginRoute';
import homeRoute from 'routes/HomeRoute';
import PrivateRoute from 'routes/PrivateRoute';
import PublicRoute from 'routes/PublicRoute';
import periodoRoute from 'routes/PeriodoRoute';
import DocenteRoute from 'routes/DocenteRoute';
import AdministradorRoute from 'routes/AdministradorRoute';
import MateriaRoute from 'routes/MateriaRoute';
import { Redirect } from "react-router-dom";

var router = [
    <PublicRoute exact path={loginRoute.path} component={loginRoute.component} key="login"/>,
    <PrivateRoute exact path={homeRoute.path} component={homeRoute.component} key="home"/>,
    <PrivateRoute exact path={periodoRoute.path} component={periodoRoute.component} key="periodo"/>,
    <PrivateRoute exact path={DocenteRoute.path} component={DocenteRoute.component} key="DocenteRoute"/>,
    <PrivateRoute exact path={AdministradorRoute.path} component={AdministradorRoute.component} key="AdministradorRoute"/>,
    <PrivateRoute exact path={MateriaRoute.path} component={MateriaRoute.component} key="MateriaRoute"/>,
    <Redirect from="*" to="/"  key="homeRedirect"/>
];
export default router;
