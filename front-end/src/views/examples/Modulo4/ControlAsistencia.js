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
  Table,
  PaginationItem,
  PaginationLink,
  CardFooter,
  Pagination,
  Nav,
} from "reactstrap";
// core components
import { useHistory } from "react-router-dom";
import UserHeader from "components/Headers/UserHeader";

import React, { useState } from "react";
import { FaCheck, FaRegWindowRestore } from "react-icons/fa";

import imgR from "../../../assets/img/theme/react.jpg";

const ControlAsistencia = () => {
  const history = useHistory();

  const handleRoute = () => {
    history.push("/admin/activities");
  };

  return (
    <>
      <UserHeader />
      
      <Container className="mt--7" fluid>
        {/* Nombre del profesor */}
        <Row>
          <div className="col-12 bg bg-success">
          <h2 className="mb-0">
                  Profesor: <strong>Luis Hernández</strong>
                </h2>
          </div>
        </Row>
        <br/>
        {/* Datos Obed y Noé */}
        <Row>
          <div className="col-6">
            <Card className="shadow">
              <CardHeader className="border-0" style={{backgroundColor:"#F79C65"}}>
                <h3 className="mb-0">
                  Alumno: <strong>Hurtado Hernández Obed Ariel</strong>
                </h3>
                <h3 className="mb-0">
                  Grado y Grupo: <strong>6B</strong>
                  <br />
                  Matrícula: <strong>20193TN117</strong>
                </h3>
              </CardHeader>
              <Form>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">Materia</th>
                    <th scope="col">Calificación</th>
                    <th scope="col">Estatus</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Español</td>
                    <td>
                      <Form>
                        <FormGroup>
                          <br />
                          <Input
                            className="form-control-alternative text-center"
                            id="input-score"
                            type="number"
                            min="0"
                            max="10"
                            placeholder="s/c"
                            style={{ width: "70%" }}
                            value="5.9"
                          />
                        </FormGroup>
                      </Form>
                    </td>
                    <td ><span><h5 style={{backgroundColor:"orange", width:"105px"}}><strong>Puede Mejorar</strong></h5></span></td>
                  </tr>
                  <tr>
                    <td>Matemáticas</td>
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
                            style={{ width: "70%" }}
                            value="7.5"
                          />
                        </FormGroup>
                      </Form>
                    </td>
                    <td ><span className="text-center"><h5 style={{backgroundColor:"yellow", width:"105px"}}><strong>Bien</strong></h5></span></td>

                  </tr>
                  <tr>
                    <td>Formación Cívica y Ética</td>
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
                            style={{ width: "70%" }}
                            value="5.5"
                            
                          />
                        </FormGroup>
                      </Form>
                    </td>
                    <td ><span className="text-center"><h5 style={{backgroundColor:"orange", width:"105px"}}><strong>Puede Mejorar</strong></h5></span></td>

                  </tr>
                  <tr>
                    <td>Ciencias Naturales</td>
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
                            style={{ width: "70%" }}
                            value="8.7"
                          />
                        </FormGroup>
                      </Form>
                    </td>
                    <td ><span className="text-center"><h5 style={{backgroundColor:"green", width:"105px"}}><strong>Muy Bien</strong></h5></span></td>

                  </tr>
                  <tr>
                    <td>Historia</td>
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
                            style={{ width: "70%" }}
                            value="10"
                            
                          />
                        </FormGroup>
                      </Form>
                    </td>
                    <td ><span className="text-center"><h5 style={{backgroundColor:"green", width:"105px"}}><strong>Muy Bien</strong></h5></span></td>
                  </tr>
                </tbody>
              </Table>
              <Button
                type="submit"
                className="btn btn-success"
                style={{ width: "25%", marginLeft: "40%" }}
                // onClick={handleRoute}
              >
                Guardar
              </Button><br/><br/>
              </Form>
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
          <div className="col-6">
            <Card className="shadow">
              <CardHeader className="border-0" style={{backgroundColor:"#F79C65"}}>
                
                <h3 className="mb-0">
                  Alumno: <strong>Martínez Flores Noé</strong>
                </h3>
                <h3 className="mb-0">
                  Grado y Grupo: <strong>6B</strong>
                  <br />
                  Matrícula: <strong>20203TN035</strong>
                </h3>
              </CardHeader>
              <Form>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">Materia</th>
                    <th scope="col">Calificación</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Español</td>
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
                            style={{ width: "70%" }}
                          />
                        </FormGroup>
                      </Form>
                    </td>
                  </tr>
                  <tr>
                    <td>Matemáticas</td>
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
                            style={{ width: "70%" }}
                          />
                        </FormGroup>
                      </Form>
                    </td>
                  </tr>
                  <tr>
                    <td>Formación Cívica y Ética</td>
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
                            style={{ width: "70%" }}
                          />
                        </FormGroup>
                      </Form>
                    </td>
                  </tr>
                  <tr>
                    <td>Ciencias Naturales</td>
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
                            style={{ width: "70%" }}
                          />
                        </FormGroup>
                      </Form>
                    </td>
                  </tr>
                  <tr>
                    <td>Historia</td>
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
                            style={{ width: "70%" }}
                          />
                        </FormGroup>
                      </Form>
                    </td>
                  </tr>
                </tbody>
              </Table>
              <Button
                type="submit"
                className="btn btn-success"
                style={{ width: "25%", marginLeft: "40%" }}
                // onClick={handleRoute}
              >
                Guardar
              </Button><br/><br/>
              </Form>
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
        {/* Datos Mario y Aldahir */}
        <Row style={{marginTop:"30px"}}>
          <div className="col-6">
            <Card className="shadow">
              <CardHeader className="border-0" style={{backgroundColor:"#F79C65"}}>
                <h3 className="mb-0">
                  Alumno: <strong>Rodríguez González Mario</strong>
                </h3>
                <h3 className="mb-0">
                  Grado y Grupo: <strong>6B</strong>
                  <br />
                  Matrícula: <strong>20193TN165</strong>
                </h3>
              </CardHeader>
              <Form>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">Materia</th>
                    <th scope="col">Calificación</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Español</td>
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
                            style={{ width: "70%" }}
                          />
                        </FormGroup>
                      </Form>
                    </td>
                  </tr>
                  <tr>
                    <td>Matemáticas</td>
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
                            style={{ width: "70%" }}
                          />
                        </FormGroup>
                      </Form>
                    </td>
                  </tr>
                  <tr>
                    <td>Formación Cívica y Ética</td>
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
                            style={{ width: "70%" }}
                          />
                        </FormGroup>
                      </Form>
                    </td>
                  </tr>
                  <tr>
                    <td>Ciencias Naturales</td>
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
                            style={{ width: "70%" }}
                          />
                        </FormGroup>
                      </Form>
                    </td>
                  </tr>
                  <tr>
                    <td>Historia</td>
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
                            style={{ width: "70%" }}
                          />
                        </FormGroup>
                      </Form>
                    </td>
                  </tr>
                </tbody>
              </Table>
              <Button
                type="submit"
                className="btn btn-success"
                style={{ width: "25%", marginLeft: "40%" }}
                // onClick={handleRoute}
              >
                Guardar
              </Button><br/><br/>
              </Form>
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
          <div className="col-6">
            <Card className="shadow">
              <CardHeader className="border-0" style={{backgroundColor:"#F79C65"}}>
                
                <h3 className="mb-0">
                  Alumno: <strong>Gómez García Aldahir</strong>
                </h3>
                <h3 className="mb-0">
                  Grado y Grupo: <strong>6B</strong>
                  <br />
                  Matrícula: <strong>20173TI173</strong>
                </h3>
              </CardHeader>
              <Form>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">Materia</th>
                    <th scope="col">Calificación</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Español</td>
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
                            style={{ width: "70%" }}
                          />
                        </FormGroup>
                      </Form>
                    </td>
                  </tr>
                  <tr>
                    <td>Matemáticas</td>
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
                            style={{ width: "70%" }}
                          />
                        </FormGroup>
                      </Form>
                    </td>
                  </tr>
                  <tr>
                    <td>Formación Cívica y Ética</td>
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
                            style={{ width: "70%" }}
                          />
                        </FormGroup>
                      </Form>
                    </td>
                  </tr>
                  <tr>
                    <td>Ciencias Naturales</td>
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
                            style={{ width: "70%" }}
                          />
                        </FormGroup>
                      </Form>
                    </td>
                  </tr>
                  <tr>
                    <td>Historia</td>
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
                            style={{ width: "70%" }}
                          />
                        </FormGroup>
                      </Form>
                    </td>
                  </tr>
                </tbody>
              </Table>
              <Button
                type="submit"
                className="btn btn-success"
                style={{ width: "25%", marginLeft: "40%" }}
                // onClick={handleRoute}
              >
                Guardar
              </Button><br/><br/>
              </Form>
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
    </>
  );
};

export default ControlAsistencia;
