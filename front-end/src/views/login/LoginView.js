
import { Button, Card, CardHeader, CardBody, FormGroup, InputGroupAddon, InputGroupText, InputGroup, Col, } from "reactstrap";
import { Formik, Form, Field, ErrorMessage } from "formik";
import React, { useState } from "react";
import * as Yup from 'yup';
import { useHistory } from "react-router-dom";

import LoginService from 'services/LoginService';
import utileria from "util/Utileria";


function LoginView(props) {

  let history = useHistory();

  const [enviando, setEnviando] = useState(false);

  let valoresIniciales = { usuario: '', contrasena: '' };

  const formularioSchema = Yup.object().shape({
    usuario: Yup.string().max(60).required(),
    contrasena: Yup.string().max(60).required()
  });

  let iniciarSesion = (valores) => {
    if (!enviando) {
      setEnviando(true);


      LoginService.validarUsuarioLogin(valores.usuario).then((response) => {

        LoginService.login(valores.usuario, valores.contrasena).then((response) => {

          let usuario = response.data;
          window.localStorage.setItem("access_token", response.data.access_token);

          LoginService.obtenerInformacionUsuarioLogin(valores.usuario).then((response) => {

            usuario = Object.assign(usuario, response.data);
            window.localStorage.setItem("sapp_usuario", JSON.stringify(usuario));
            history.push("/");
            utileria.notifications('Bienvenido(a) ' + response.data.nombreCompleto, 'SUCCESS');

          }).catch((error) => {
            setEnviando(false);
            utileria.errorhttp(error);
          });


        }).catch(() => {
          setEnviando(false);
          utileria.notifications('Usuario o contraseña incorrecto', 'ERROR');
        });

      }).catch((error) => {
        setEnviando(false);
        utileria.errorhttp(error);
      })




    }

  };


  return (
    <>
      <div
        className="header pb-9  pt-lg-8 d-flex align-items-center"
        style={{
          // minHeight: "9px",
          // minHeight: "969px",
          backgroundImage: "url(" + require("../../assets/img/fondo.png").default + ")",
          backgroundSize: "cover",
          backgroundPosition: "center top",
        }}
      >
        <Col lg={{ size: 4, offset: 4 }}  >
          <Card className="bg-default shadow border-4 ">
            <CardHeader className="bg-transparent">
              <div className="text-muted text-center">
                <h1 className="text-white">  <i className="ni ni-hat-3" /> Iniciar sesión
                </h1>
              </div>
            </CardHeader>
            <CardBody className="px-lg-5 py-lg-5">
              <Formik
                initialValues={valoresIniciales}
                validationSchema={formularioSchema}
                onSubmit={iniciarSesion}
              >

                {({ errors, touched, isValid }) => (

                  <Form role="form">

                    <FormGroup className={utileria.claseInputForm(errors.usuario, touched.usuario)}>
                      <InputGroup className="input-group-alternative">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="ni ni-email-83" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Field
                          className="form-control"
                          placeholder="Usuario..."
                          id="usuario"
                          name="usuario"
                          type="text"
                          autoComplete="off"
                          required
                        />

                      </InputGroup>
                      <ErrorMessage
                        name="usuario"
                        component={() => <small className="text-danger">{errors.usuario}</small>}
                      />
                    </FormGroup>
                    <FormGroup className={utileria.claseInputForm(errors.contrasena, touched.contrasena)}>
                      <InputGroup className="input-group-alternative">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="ni ni-lock-circle-open" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Field
                          placeholder="Contraseña..."
                          type="password"
                          id="contrasena"
                          name="contrasena"
                          autoComplete="off"
                          required
                          className="form-control"
                        />
                      </InputGroup>
                      <ErrorMessage
                        name="contrasena"
                        component={() => <small className="text-danger">{errors.contrasena}</small>}
                      />
                    </FormGroup>

                    <div className="text-center">
                      <Button className="mt-4 hand"
                        color="success" type="submit"
                        disabled={!isValid || enviando}>
                        {enviando ? 'Ingresando...' : 'Ingresar'} <i className="ni ni-send"></i>
                      </Button>
                      <br />
                      <br />
                      <a className="btn">
                        <small className="text-white italic pb-9 font-weight-600 font-italic hand" >
                          <i className="ni ni-key-25"></i> Recuerpar contraseña
                        </small>
                      </a>
                    </div>
                  </Form>

                )}

              </Formik>
            </CardBody>
          </Card>
        </Col>
      </div>
    </>
  );
};

export default LoginView;
