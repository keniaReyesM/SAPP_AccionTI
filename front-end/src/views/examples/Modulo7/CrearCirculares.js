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
  CardFooter,
  Badge,
  Table,
  ModalFooter,
  ModalBody,
  ModalHeader,
  Modal,
} from "reactstrap";
// core components
import { useHistory } from "react-router-dom";
import React, { Component, useState } from "react";
import {
  DatePicker,
  MuiPickersUtilsProvider,
  TimePicker,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import esLocale from "date-fns/locale/es";
import swal from "sweetalert";
import UserHeader from "components/Headers/UserHeader";

const CrearCirculares = () => {
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
      buttons: ["Cerrar", "OK"],
      //buttons: ["No", "Si"],
    });
  };

  const [modal, setModal] = React.useState(false);
  const toggle = () => setModal(!modal);

  return (
    <>
      {/* Page content */}
      <UserHeader />
      <Container className="mt--7" fluid>
        {/* Table Actividad General*/}
        <Row>
          <div className="col">
            <Card className="shadow">
              <CardHeader className="border-0" style={{backgroundColor:"#8ADFE2"}}>
                <h3 className="mb-0" style={{ marginTop: "10px" }}>
                  Circulares de Suspensión
                </h3>
              </CardHeader>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">Fecha Inicio</th>
                    <th scope="col">Fecha Fin</th>
                    <th scope="col">Descripción</th>
                    <th scope="col">Duración</th>
                    <th scope="col">Estado</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>17/06/2022</td>
                    <td>25/06/2022</td>
                    <td>
                      <p>
                        Por cuestiones de la Pandemia de COVID-19 se suspenden
                        las clases.
                      </p>
                    </td>
                    <td>
                      <Badge color="" className="badge-dot mr-4">
                        <i className="bg-success" />8 días
                      </Badge>
                    </td>
                    <td>
                      <Badge color="" className="badge-dot mr-4">
                        <i className="bg-success" />
                        Activo
                      </Badge>
                    </td>
                  </tr>
                </tbody>
              </Table>
              <CardFooter className="py-4">
                <Button
                  type="submit"
                  className="btn btn-success"
                  style={{ float: "right" }}
                  onClick={toggle}
                >
                  Crear Circulares
                </Button>
              </CardFooter>
            </Card>
          </div>
        </Row>
      </Container>

      <Modal isOpen={modal} toggle={toggle} size="lg">
        <ModalHeader toggle={toggle} style={{backgroundColor:"#8ADFE2"}}>
          <h3 className="mb-0">Circulares de Suspensión</h3>
        </ModalHeader>
        <ModalBody>
          <Form>
            <div className="pl-lg-4">
              <Row>
                <Col lg="12">
                  <FormGroup>
                    <label className="form-control-label">Descripción</label>
                    <Input
                      className="form-control-alternative descripcion"
                      id="input-description"
                      placeholder="descripción"
                      type="textarea"
                      required="required"
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
                        Fecha de Inicio
                      </label>
                      <br />
                      <DatePicker
                        value={fechaSeleccionada}
                        onChange={setFechaSeleccionada}
                        minDate={fecha}
                        required="required"
                      />
                    </MuiPickersUtilsProvider>
                  </FormGroup>
                </Col>
                <Col lg="3">
                  <FormGroup>
                    <MuiPickersUtilsProvider
                      utils={DateFnsUtils}
                      locale={esLocale}
                    >
                      <label className="form-control-label">Fecha de Fin</label>
                      <br />
                      <DatePicker
                        value={fechaSeleccionada}
                        onChange={setFechaSeleccionada}
                        minDate={fecha}
                        required="required"
                      />
                    </MuiPickersUtilsProvider>
                  </FormGroup>
                </Col>
                <Col lg="3">
                  <FormGroup>
                    <MuiPickersUtilsProvider
                      utils={DateFnsUtils}
                      locale={esLocale}
                    >
                      <label className="form-control-label">Hora</label>
                      <br />
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
              color="primary"
              onClick={toggle}
              style={{ float: "right" }}
              
            >Cerrar</Button>
            <Button
              onClick={() => alertInfo()}
              className="btn btn-success"
              style={{ marginLeft: "72%" }}
            >
              Registrar
            </Button>
            <br />
            <br />
          </Form>
        </ModalBody>
      </Modal>
    </>
  );
};

export default CrearCirculares;
