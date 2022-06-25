
import { Link, useHistory } from "react-router-dom";
import React, { useState } from "react";
import Utileria from "util/Utileria";
import {
  UncontrolledCollapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
} from "reactstrap";

const Topbar = () => {

  let history = useHistory();
  let [usuario, setUsuario] = useState({ nombreCompleto: "ND", rol: { nombre: "ND" } })

  React.useEffect(() => {
    setUsuario(Utileria.obtenerUsuario());
  }, []);
  let cerrarSesion = () => {
    window.localStorage.clear();
    history.push("/login");
  };




  return (
    <>
      <Navbar className="navbar-top navbar-horizontal navbar-dark" expand="md">
        <Container className="">
          <NavbarBrand to="/" tag={Link}>
            <h2 className="text-white"><i className="ni ni-hat-3" /> SAPP | {usuario.rol.nombre} </h2>
          </NavbarBrand>
          <button className="navbar-toggler text-black" onClick={cerrarSesion}>
            <i className="ni ni-button-power" /> Salir
          </button>
          <UncontrolledCollapse navbar toggler="#navbar-collapse-main">
            <div className="navbar-collapse-header d-md-none">
              <Row>
                <Col className="collapse-brand" xs="6">
                  <NavbarBrand to="/" tag={Link}>
                    <small className="text-black"><i className="ni ni-hat-3" /> SAPP | {usuario.nombreCompleto} ({usuario.rol.nombre}) </small>
                  </NavbarBrand>
                </Col>
                <Col className="collapse-close" xs="6">
                  <button className="navbar-toggler" id="navbar-collapse-main">
                  </button>
                </Col>
              </Row>
            </div>
            <Nav className="ml-auto" navbar>
              {/* <NavItem>
                <NavLink className="nav-link-icon" to="/" tag={Link}>
                  <i className="ni ni-shop" />
                  <span className="nav-link-inner--text">Inicio</span>
                </NavLink>
              </NavItem>
             <NavItem>
                <NavLink className="nav-link-icon" to="/admin/profesores" tag={Link} >
                  <i className="ni ni-circle-08" />
                  <span className="nav-link-inner--text">Profesores</span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link-icon" to="/admin/recursos" tag={Link} >
                  <i className="ni ni-laptop" />
                  <span className="nav-link-inner--text">Recursos</span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link-icon" to="/admin/usuarios" tag={Link} >
                  <i className="ni ni-single-02" />
                  <span className="nav-link-inner--text">Usuarios</span>
                </NavLink>
              </NavItem> */}
              <NavItem>
                <NavLink className="hand nav-link-icon " onClick={cerrarSesion} tag={Link} to="">
                  <i className="ni ni-button-power" />
                  <span className="nav-link-inner--text">Salir</span>
                </NavLink>
              </NavItem>
            </Nav>
          </UncontrolledCollapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Topbar;
