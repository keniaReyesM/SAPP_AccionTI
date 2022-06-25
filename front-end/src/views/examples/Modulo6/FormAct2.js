import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Container,
  Row,
  Col,
} from "reactstrap";
// core components
import { useHistory } from "react-router-dom";
import React, { Component, useState } from "react";
import validator from "validator";
//import 'react-datepicker/dist/react-datepicker.const { first } = this.state'
import {
  DatePicker,
  MuiPickersUtilsProvider,
  TimePicker,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import esLocale from "date-fns/locale/es";
import swal from "sweetalert";
import { Alert } from "bootstrap";

const FormAct2 = () => {
  const [fechaSeleccionada, setFechaSeleccionada] = useState(new Date());

  const history = useHistory();

  const handleRoute = () => {
    history.push("/admin/activities");
  };

  const [errorMessage, setErrorMessage] = useState("");

  var fecha = new Date();

  //Alerta
  const alertInfo = () => {
    swal({
      title: "Registro Exitoso",
      icon: "success",
      buttons: ["Cerrar", "OK"]
      //buttons: ["No", "Si"],
    })
      // .then((respuesta) => {
      //   if (respuesta) {
      //     swal({
      //       text: "Gracias por su visita",
      //       icon: "success",
      //     });
      //     dispatch({ type: "LOGOUT" }, navigation("", { replace: true }));
      //   }
      // })
      // .catch((error) => {
      //   console.log(error);
      // });
  };

  return (
    <>
      {/* Page content */}
      <Container className="mt--7" fluid>
        <Row>
          <Col className="order-xl-1" xl="10" style={{ marginLeft: "10%" }}>
            <Card className="bg-secondary shadow">
              <CardHeader className="bg-white border-0" style={{backgroundColor:"#FC8476"}}>
                <Row className="align-items-center">
                  <Col xs="8">
                    <h3 className="mb-0">Actividades</h3>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <Form>
                  <div className="pl-lg-4">
                    <Row>
                      <Col lg="6">
                        <FormGroup>
                          <label className="form-control-label">Título</label>
                          <Input
                            className="form-control-alternative titulo"
                            id="input-username"
                            name="titulo"
                            placeholder="tema"
                            type="text"
                            required="required"
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="12">
                        <FormGroup>
                          <label className="form-control-label">
                            Descripción
                          </label>
                          <Input
                            className="form-control-alternative descripcion"
                            id="input-description"
                            placeholder="descripción"
                            type="textarea"
                            required="required"
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <label className="form-control-label">
                            Subir Material
                          </label>
                          <Input
                            className="form-control-alternative"
                            id="input-files"
                            placeholder="Subir archivos"
                            type="file"
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="3">
                        <FormGroup>
                          <MuiPickersUtilsProvider
                            utils={DateFnsUtils}
                            locale={esLocale}
                          >
                            <label className="form-control-label">
                              Fecha de entrega
                            </label>
                            <br />
                            <DatePicker
                              value={fechaSeleccionada}
                              onChange={setFechaSeleccionada}
                              minDate={fecha}
                              required="required"
                            />
                            {/* <Input
                            className="form-control-alternative"
                            id="input-date"
                            type="date"
                            required="required"
                          /> */}
                          </MuiPickersUtilsProvider>
                        </FormGroup>
                      </Col>
                      <Col lg="3">
                        <FormGroup>
                          <MuiPickersUtilsProvider
                            utils={DateFnsUtils}
                            locale={esLocale}
                          >
                            <label className="form-control-label">Hora</label><br/>
                            <TimePicker
                              value={fechaSeleccionada}
                              onChange={setFechaSeleccionada}
                              required="required"
                            />
                          </MuiPickersUtilsProvider>
                        </FormGroup>
                      </Col>
                    </Row>
                  </div>
                  <Button
                    type="submit"
                    className="btn btn-success"
                    style={{ float: "right" }}
                    onClick={
                      () => alertInfo()
                    }
                    //onClick={handleRoute}
                  >
                    Registrar
                  </Button>
                  <br />
                  <br />
                  <hr className="my-4" />
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default FormAct2;
