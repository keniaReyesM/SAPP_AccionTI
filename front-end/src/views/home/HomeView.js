
import React, { useEffect, useState } from "react";
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
  CardTitle,
  CardBody,
  Col,
  Modal,
  ModalBody,
  ModalHeader,
  ModalFooter,
} from "reactstrap";

const Tables = () => {

  // Modal Personal Obed
  const [modal, setModal] = React.useState(false);
  const toggle = () => setModal(!modal);
  // Modal Académica Obed
  const [modal2, setModal2] = React.useState(false);
  const toggle2 = () => setModal2(!modal2);

  // Modal Personal Noé
  const [modal3, setModal3] = React.useState(false);
  const toggle3 = () => setModal3(!modal3);
  // Modal Académica Noé
  const [modal4, setModal4] = React.useState(false);
  const toggle4 = () => setModal4(!modal4);

  return (
    <>
    {/* <UserHeader/> */}
      <Container className="mt--7" fluid>
      {/* <AuthNavbar /> */}

        <Row>
          <div className="col">
            <Card className="shadow">
              <CardHeader className="border-0" style={{backgroundColor:"#8ADFE2"}}>
                <h3 className="mb-0">Alumnos</h3>
              </CardHeader>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">Nombre(s)</th>
                    <th scope="col">Grado y Grupo</th>
                    <th scope="col">Información</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="col">
                      <strong>Hurtado Hernández Obed Ariel</strong>
                    </th>
                    <td>
                      <strong>6B</strong>
                    </td>
                    <td>
                      <Button className="button" onClick={toggle}>
                        Personal
                      </Button>

                      <Button className="button" onClick={toggle2}>Académica</Button>
                    </td>
                    
                  </tr>
                  <tr>
                    <th scope="col">
                      <strong>Martínez Flores Noé</strong>
                    </th>
                    <td>
                      <strong>6B</strong>
                    </td>
                    <td>
                      <Button className="button" onClick={toggle3}>
                        Personal
                      </Button>

                      <Button className="button" onClick={toggle4}>Académica</Button>
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

      {/* MODAL INFORMACIÓN PERSONAL OBED*/}
      <Modal isOpen={modal} toggle={toggle} size="lg" style={{maxWidth:"80%"}}>
        <ModalHeader toggle={toggle} style={{ backgroundColor:"#F79C65"}}>
          <h3 className="mb-0">Información Personal</h3>
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
                  <th scope="col">Fecha de Nacimiento</th>
                  <th scope="col">Curp</th>
                  <th scope="col">Sexo</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="col">Obed Ariel</th>
                  <td>Hurtado</td>
                  <td>Hernández</td>
                  <td>12/12/2000</td>
                  <td>HUHO001212HMSRRBA9</td>
                  <td>H</td>
                  <td>
                    <Badge color="" className="badge-dot mr-4">
                      <i className="bg-success" />
                      Activo
                    </Badge>
                  </td>
                  {/* <td>
                      <Badge color="" className="badge-dot mr-4">
                        <i className="bg-warning" />
                        Activo
                      </Badge>
                    </td> */}
                </tr>
              </tbody>
            </Table>
          </Card>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Aceptar
          </Button>
        </ModalFooter>
      </Modal>

      {/* MODAL INFORMACIÓN ACADÉMICA OBED*/}
      <Modal isOpen={modal2} toggle={toggle2} size="lg">
        <ModalHeader toggle={toggle2} style={{ backgroundColor:"#F79C65"}}>
          <h3 className="mb-0">Información Académica</h3>
        </ModalHeader>
        <ModalBody>
          <Card className="shadow">
          <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">Nombre Completo</th>
                    <th scope="col">Matrícula</th>
                    <th scope="col">Status</th>
                    <th scope="col">Plan de Estudios</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                  <th scope="col">Obed Hurtado</th>
                    <td>20193TN117</td>
                    <td>
                      <Badge color="" className="badge-dot mr-4">
                        <i className="bg-success" />
                        Activo
                      </Badge>
                    </td>
                    <td>TSU</td>
                  </tr>
                  
                </tbody>
              </Table>
          </Card>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle2}>
            Aceptar
          </Button>
        </ModalFooter>
      </Modal>

      {/* MODAL INFORMACIÓN PERSONAL NOÉ*/}
      <Modal isOpen={modal3} toggle={toggle3} size="lg"  style={{maxWidth:"80%"}}>
        <ModalHeader toggle={toggle3} style={{ backgroundColor:"#F79C65"}}>
          <h3 className="mb-0">Información Personal</h3>
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
                  <th scope="col">Fecha de Nacimiento</th>
                  <th scope="col">Curp</th>
                  <th scope="col">Sexo</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="col">Noé</th>
                  <td>Martínez</td>
                  <td>Flores</td>
                  <td>11/07/2001</td>
                  <td>NOEMFHO00HMSRRBA9</td>
                  <td>H</td>
                  <td>
                    <Badge color="" className="badge-dot mr-4">
                      <i className="bg-success" />
                      Activo
                    </Badge>
                  </td>
                </tr>
              </tbody>
            </Table>
          </Card>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle3}>
            Aceptar
          </Button>
        </ModalFooter>
      </Modal>

      {/* MODAL INFORMACIÓN ACADÉMICA NOÉ*/}
      <Modal isOpen={modal4} toggle={toggle4} size="lg">
        <ModalHeader toggle={toggle4} style={{ backgroundColor:"#F79C65"}}>
          <h3 className="mb-0">Información Académica</h3>
        </ModalHeader>
        <ModalBody>
          <Card className="shadow">
          <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">Nombre Completo</th>
                    <th scope="col">Matrícula</th>
                    <th scope="col">Status</th>
                    <th scope="col">Plan de Estudios</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                  <th scope="col">Noé Martínez Flores</th>
                    <td>20203TN165</td>
                    <td>
                      <Badge color="" className="badge-dot mr-4">
                        <i className="bg-success" />
                        Activo
                      </Badge>
                    </td>
                    <td>TSU</td>
                  </tr>
                  
                </tbody>
              </Table>
          </Card>
        </ModalBody>
        <ModalFooter >
          <Button color="primary" onClick={toggle4}>
            Aceptar
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default Tables;
