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
  Form,
  FormGroup,
  Input,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Col,
} from "reactstrap";
// core components
import imgR from "../../../assets/img/theme/react.jpg";
import { useHistory } from "react-router-dom";
import React, { useState } from "react";
import ObedHurtado from "../InfoAlumnos2/ObedHurtado";
import NoeMartinez from "../InfoAlumnos2/NoeMartinez";
import MarioRodriguez from "../InfoAlumnos2/MarioRodriguez";
import AldahirGomez from "../InfoAlumnos2/AldahirGomez";
import { DatePicker, MuiPickersUtilsProvider, TimePicker } from "@material-ui/pickers";
import swal from "sweetalert";

import DateFnsUtils from "@date-io/date-fns";
import esLocale from "date-fns/locale/es";

const TablesActivities = () => {
  const history = useHistory();

  const handleRoute = () => {
    history.push("/admin/registroactividad");
  };

  const [modal, setModal] = React.useState(false);
  const toggle = () => setModal(!modal);

  const [modal2, setModal2] = React.useState(false);
  const toggle2 = () => setModal2(!modal2);

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
      <Container className="mt--7" fluid>
        {/* Table Actividad General*/}
        <Row>
          <div className="col">
            <Card className="shadow">
              <CardHeader className="border-0" style={{backgroundColor:"#FC8476"}}>
                <h3 className="mb-0">Actividades</h3>
              </CardHeader>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">Fecha de Publicación</th>
                    <th scope="col">Título</th>
                    <th scope="col">Descripción</th>
                    <th scope="col">Material Anexado</th>
                    <th scope="col">Fecha de entrega</th>
                    <th scope="col">Estado</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="col">07/06/2022</th>
                    <td>Investigación de React JS</td>
                    <td>
                      El estudiate realizará una investigación sobre React JS
                    </td>
                    <td>
                      <img
                        src={imgR}
                        style={{ width: "80px", height: "80px" }}
                      />
                    </td>
                    <td>10/06/2022</td>

                    <td>
                      <Badge color="" className="badge-dot mr-4">
                        <i className="bg-success" />
                        Activa
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
                  Registro Individual
                </Button>
                <Button
                  type="submit"
                  className="btn btn-success"
                  style={{ float: "right", marginRight: "1%" }}
                  onClick={handleRoute}
                >
                  Registrar Actividad
                </Button>
              </CardFooter>
            </Card>
          </div>
        </Row>

        {/* Table Actividad por alumno*/}
        <Row style={{ marginTop: "5%" }}>
          <div className="col">
            <Card className="shadow">
              <CardHeader className="border-0">
                <h3 className="mb-0">
                  Actividad:{" "}
                  <strong>
                    <i>Investigación de React JS</i>
                  </strong>
                </h3>
              </CardHeader>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">Nombre</th>
                    <th scope="col">Matrícula</th>
                    {/* <th scope="col">Trabajo/Tarea</th> */}
                    <th scope="col">Calificación</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Obed Ariel Hurtado Hernández</td>
                    <td>20193TN117</td>
                    {/* <td><img src={imgR} style={{width:"80px", height:"80px"}}/></td> */}
                    <td>
                      <Form>
                        <FormGroup>
                          <br />
                          <Input
                            className="form-control-alternative"
                            id="input-score"
                            type="number"
                            min="0"
                            max="10"
                            placeholder="s/c"
                          />
                        </FormGroup>
                      </Form>
                    </td>
                  </tr>
                  <tr>
                    <td>Noé Martínez Flores</td>
                    <td>20203TN035</td>
                    {/* <td><img src={imgR} style={{width:"80px", height:"80px"}}/></td> */}
                    <td>
                      <Form>
                        <FormGroup>
                          <br />
                          <Input
                            className="form-control-alternative"
                            id="input-score"
                            type="number"
                            min="0"
                            max="10"
                            placeholder="s/c"
                          />
                        </FormGroup>
                      </Form>
                    </td>
                  </tr>
                  <tr>
                    <td>Mario Rodríguez González</td>
                    <td>20193TN165</td>
                    {/* <td><img src={imgR} style={{width:"80px", height:"80px"}}/></td> */}
                    <td>
                      <Form>
                        <FormGroup>
                          <br />
                          <Input
                            className="form-control-alternative"
                            id="input-score"
                            type="number"
                            min="0"
                            max="10"
                            placeholder="s/c"
                          />
                        </FormGroup>
                      </Form>
                    </td>
                  </tr>
                  <tr>
                    <td>Aldahir Gómez García</td>
                    <td>20173TI173</td>
                    {/* <td><img src={imgR} style={{width:"80px", height:"80px"}}/></td> */}
                    <td>
                      <Form>
                        <FormGroup>
                          <br />
                          <Input
                            className="form-control-alternative"
                            id="input-score"
                            type="number"
                            min="0"
                            max="10"
                            placeholder="s/c"
                          />
                        </FormGroup>
                      </Form>
                    </td>
                  </tr>
                </tbody>
              </Table>
              <CardFooter className="py-4">
                <nav aria-label="...">
                  <Pagination
                    className="pagination justify-content-end mb-0"
                    listClassName="justify-content-end mb-0"
                  >
                    <PaginationItem className="disabled">
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                        tabIndex="-1"
                      >
                        <i className="fas fa-angle-left" />
                        <span className="sr-only">Previous</span>
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem className="active">
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        1
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        2 <span className="sr-only">(current)</span>
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        3
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        <i className="fas fa-angle-right" />
                        <span className="sr-only">Next</span>
                      </PaginationLink>
                    </PaginationItem>
                  </Pagination>
                </nav>
              </CardFooter>
            </Card>
          </div>
        </Row>
      </Container>

      <Modal
        isOpen={modal}
        toggle={toggle}
        size="lg"
        style={{ maxWidth: "80%" }}
      >
        <ModalHeader toggle={toggle} style={{backgroundColor:"#FC8476"}}>
          <h3 className="mb-0">Elija Alumno</h3>
        </ModalHeader>
        <ModalBody>
          {/* <TablesPersonalInfo/> */}
          <Card className="shadow">
            <Table className="align-items-center table-flush" responsive>
              <thead className="thead-light">
                <tr>
                  <th scope="col">Nombre(s)</th>
                  <th scope="col">Apellido Paterno</th>
                  <th scope="col">Apellido Materno</th>
                  <th scope="col">Matrícula</th>
                  <th scope="col">Status</th>
                  <th scope="col">Grado y Grupo</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <ObedHurtado />
              <NoeMartinez />
              <MarioRodriguez />
              <AldahirGomez />
            </Table>
          </Card>
        </ModalBody>
        <ModalFooter>
          <Button type="submit" className="btn btn-success" onClick={toggle2}>
            Asignar
          </Button>
          <Button color="primary" onClick={toggle}>
            Cerrar
          </Button>
        </ModalFooter>
      </Modal>


      <Modal isOpen={modal2} toggle={toggle2} size="lg"> 
        <ModalHeader toggle={toggle2} style={{backgroundColor:"#8ADFE2"}}>
          <h3 className="mb-0">Nueva Actividad</h3>
        </ModalHeader>
        <br />
        <ModalBody style={{ marginTop: "1px" }}>
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

export default TablesActivities;
