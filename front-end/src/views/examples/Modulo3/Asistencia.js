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
  Col,
  ModalFooter,
  ModalBody,
  Modal,
  ModalHeader,
} from "reactstrap";
import imgR from "../../../assets/img/theme/react.jpg";
import UserHeader from "components/Headers/UserHeader";
import React, { useState } from "react";
import { FaCheck, FaRegWindowRestore } from "react-icons/fa";
import Years from "./Years";
import HeaderGeneral from "components/Headers/HeaderGeneral";

const TablesActivities = () => {
  //VERIFICAR CHECKBOX
  const [isChecked, setIsChecked] = useState(false);
  const handleOnChange = () => {
    setIsChecked(!isChecked);
  };

  const [modal, setModal] = React.useState(false);
  const toggle = () => setModal(!modal);

  return (
    <>
      <UserHeader></UserHeader>
      <Container className="mt--7" fluid>
        {/* 6B */}
        <Row>
          <div className="col">
            <Card className="shadow">
              <CardHeader className="border-0" style={{backgroundColor:"#F79C65"}}>
                <h3 className="mb-0 text-center">
                   <strong>Ciclo Escolar</strong> {/*6 B</strong>*/}
                </h3>
              </CardHeader>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                </thead>
                <tbody>
                  <br/>
                  <Years></Years>
                </tbody>
              </Table>
              <br />
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
        <br/>
      </Container>
      
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>
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
    </>
  );
};

export default TablesActivities;
