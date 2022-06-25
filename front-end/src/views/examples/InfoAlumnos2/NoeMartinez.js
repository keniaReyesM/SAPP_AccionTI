import {
  Badge,
  Card,
  CardHeader,
  CardFooter,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Media,
  Pagination,
  PaginationItem,
  PaginationLink,
  Progress,
  Table,
  Container,
  Row,
  UncontrolledTooltip,
  Button,
  FormGroup,
  Col,
  Input,
  Form,
  ModalBody,
  ModalHeader,
  Modal,
} from "reactstrap";
// core components
import swal from "sweetalert";
import {
  DatePicker,
  MuiPickersUtilsProvider,
  TimePicker,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import esLocale from "date-fns/locale/es";
import React, { useState } from "react";

const NoeMartinez = () => {
  const [modal, setModal] = React.useState(false);
  const toggle = () => setModal(!modal);

  const [fechaSeleccionada, setFechaSeleccionada] = useState(new Date());
  var fecha = new Date();

  const alertInfo = () => {
    swal({
      title: "Registro Exitoso",
      icon: "success",
      buttons: ["Cerrar", "OK"],
      //buttons: ["No", "Si"],
    });
  };

  return (
    <>
      <tbody className="text-center">
        <tr>
          <th scope="col">Noé</th>
          <td>Martínez</td>
          <td>Flores</td>
          <td>20203TN035</td>
          <td>
            <Badge color="" className="badge-dot mr-4">
              <i className="bg-success" />
              Activo
            </Badge>
          </td>
          <td>
            <strong>6B</strong>
          </td>
          <Input
            type="checkbox"
            style={{ width: "15px", height: "15px", marginTop: "2%" }}
          ></Input>
          {/* <Button
            type="submit"
            className="btn btn-success"
            onClick={toggle}
            style={{ marginTop: "7%" }}
          >
            Asignar
          </Button> */}
        </tr>
      </tbody>

      <Modal isOpen={modal} toggle={toggle} size="lg">
        <ModalHeader toggle={toggle}>
          <h3 className="mb-0">Nueva Actividad</h3>
        </ModalHeader>
        <br />
        <ModalBody>
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
                <Col lg="6">
                  <FormGroup>
                    <label className="form-control-label">Subir Material</label>
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
              className="btn btn-success"
              style={{ float: "right" }}
              onClick={() => alertInfo()}
            >
              Registrar
            </Button>
          </Form>
        </ModalBody>
        <br />
      </Modal>
    </>
  );
};

export default NoeMartinez;
