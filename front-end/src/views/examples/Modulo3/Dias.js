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

const Dias = () => {
  //VERIFICAR CHECKBOX
  const [isChecked, setIsChecked] = useState(false);
  const handleOnChange = () => {
    setIsChecked(!isChecked);
  };

  const [modal, setModal] = React.useState(false);
  const toggle = () => setModal(!modal);

  return (
    <>
      {/* <div style={{ marginTop: "15%" }}>
        <Container className="mt--7" fluid>
          <Row>
            <div className="col">
              <Card className="shadow"> */}
      {/* <CardHeader className="border-0">
                <h3 className="mb-0 text-center">
                  Asistencia: <strong>6 B</strong></h3>
              </CardHeader> */}
      <Table className="align-items-center table-flush" responsive>
        <thead className="thead-light">
          <tr>
            <th scope="col">D</th>
            <th scope="col">L</th>
            <th scope="col">M</th>
            <th scope="col">M</th>
            <th scope="col">J</th>
            <th scope="col">V</th>
            <th scope="col">S</th>
          </tr>
        </thead>
        <tbody>
          {/*className="text-center"*/}

          {/* <h3 className="text-center">
                    Mes:<strong> 2022</strong>
                  </h3> */}
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>

            <td></td>
            <td></td>
            <td>
              <Button variant="primary" onClick={toggle}>
                1
              </Button>
            </td>
          </tr>
          <tr>
            <td>
              <Button variant="primary" onClick={toggle}>
                2
              </Button>
            </td>
            <td>
              <Button variant="primary" onClick={toggle}>
                3
              </Button>
            </td>
            <td>
              <Button variant="primary" onClick={toggle}>
                4
              </Button>
            </td>
            <td>
              <Button variant="primary" onClick={toggle}>
                5
              </Button>
            </td>
            <td>
              <Button variant="primary" onClick={toggle}>
                6
              </Button>
            </td>
            <td>
              <Button variant="primary" onClick={toggle}>
                7
              </Button>
            </td>
            <td>
              <Button variant="primary" onClick={toggle}>
                8
              </Button>
            </td>
          </tr>
          <tr>
            <td>
              <Button variant="primary" onClick={toggle}>
                9
              </Button>
            </td>
            <td>
              <Button variant="primary" onClick={toggle}>
                10
              </Button>
            </td>
            <td>
              <Button variant="primary" onClick={toggle}>
                11
              </Button>
            </td>
            <td>
              <Button variant="primary" onClick={toggle}>
                12
              </Button>
            </td>
            <td>
              <Button variant="primary" onClick={toggle}>
                13
              </Button>
            </td>
            <td>
              <Button variant="primary" onClick={toggle}>
                14
              </Button>
            </td>
            <td>
              <Button variant="primary" onClick={toggle}>
                15
              </Button>
            </td>
          </tr>
          <tr>
            <td>
              <Button variant="primary" onClick={toggle}>
                16
              </Button>
            </td>
            <td>
              <Button variant="primary" onClick={toggle}>
                17
              </Button>
            </td>
            <td>
              <Button variant="primary" onClick={toggle}>
                18
              </Button>
            </td>
            <td>
              <Button variant="primary" onClick={toggle}>
                19
              </Button>
            </td>
            <td>
              <Button variant="primary" onClick={toggle}>
                20
              </Button>
            </td>
            <td>
              <Button variant="primary" onClick={toggle}>
                21
              </Button>
            </td>
            <td>
              <Button variant="primary" onClick={toggle}>
                22
              </Button>
            </td>
          </tr>
          <tr>
            <td>
              <Button variant="primary" onClick={toggle}>
                23
              </Button>
            </td>
            <td>
              <Button variant="primary" onClick={toggle}>
                24
              </Button>
            </td>
            <td>
              <Button variant="primary" onClick={toggle}>
                25
              </Button>
            </td>
            <td>
              <Button variant="primary" onClick={toggle}>
                26
              </Button>
            </td>
            <td>
              <Button variant="primary" onClick={toggle}>
                27
              </Button>
            </td>
            <td>
              <Button variant="primary" onClick={toggle}>
                28
              </Button>
            </td>
            <td>
              <Button variant="primary" onClick={toggle}>
                29
              </Button>
            </td>
          </tr>
          <tr>
            <td>
              <Button variant="primary" onClick={toggle}>
                30
              </Button>
            </td>
            <td>
              <Button variant="primary" onClick={toggle}>
                31
              </Button>
            </td>
          </tr>
        </tbody>
      </Table>
      <br />
      <br />
    
      {/* MODAL FECHA */}
      <Modal
        isOpen={modal}
        toggle={toggle}
        size="lg"
        style={{ maxWidth: "80%" }}
      >
        <ModalHeader toggle={toggle} style={{ backgroundColor: "#F79C65" }}>
          <h3 className="mb-0">Días</h3>
        </ModalHeader>
        <ModalBody>
          {/* <TablesPersonalInfo/> */}

          <Card className="shadow">
            <Table className="align-items-center table-flush" responsive>
              <thead className="thead-light">
                <tr>
                  <th scope="col">Alumno</th>
                  <th scope="col">
                    Asistencia
                    <FaCheck
                      style={{ width: "10px", height: "10px", color: "green" }}
                    />
                  </th>
                  <th scope="col">
                    Inasistencia
                    <FaRegWindowRestore
                      style={{ width: "10px", height: "10px", color: "red" }}
                    />
                  </th>
                  <th scope="col">
                    Justificado
                    <FaRegWindowRestore
                      style={{ width: "10px", height: "10px", color: "yellow" }}
                    />
                  </th>
                </tr>
              </thead>
              <tbody className="text-center">
                <tr>
                  <td>Hurtado Hernández Obed Ariel</td>
                  <td>
                    <Input
                      type="checkbox"
                      style={{ width: "15px", height: "15px" }}
                    ></Input>
                  </td>
                  <td>
                    <Input
                      type="checkbox"
                      style={{ width: "15px", height: "15px" }}
                    ></Input>
                  </td>
                  <td>
                    <Input
                      type="checkbox"
                      style={{ width: "15px", height: "15px" }}
                    ></Input>
                  </td>
                </tr>
                <tr>
                  <td>Noé Martínez Flores</td>
                  <td>
                    <Input
                      type="checkbox"
                      style={{ width: "15px", height: "15px" }}
                    ></Input>
                  </td>
                  <td>
                    <Input
                      type="checkbox"
                      style={{ width: "15px", height: "15px" }}
                    ></Input>
                  </td>
                  <td>
                    <Input
                      type="checkbox"
                      style={{ width: "15px", height: "15px" }}
                    ></Input>
                  </td>
                </tr>
                <tr>
                  <td>Rodríguez González Mario</td>
                  <td>
                    <Input
                      type="checkbox"
                      style={{ width: "15px", height: "15px" }}
                    ></Input>
                  </td>
                  <td>
                    <Input
                      type="checkbox"
                      style={{ width: "15px", height: "15px" }}
                    ></Input>
                  </td>
                  <td>
                    <Input
                      type="checkbox"
                      style={{ width: "15px", height: "15px" }}
                    ></Input>
                  </td>
                </tr>
                <tr>
                  <td>Gómez García Aldahir</td>
                  <td>
                    <Input
                      type="checkbox"
                      style={{ width: "15px", height: "15px" }}
                    ></Input>
                  </td>
                  <td>
                    <Input
                      type="checkbox"
                      style={{ width: "15px", height: "15px" }}
                    ></Input>
                  </td>
                  <td>
                    <Input
                      type="checkbox"
                      style={{ width: "15px", height: "15px" }}
                    ></Input>
                  </td>
                </tr>
              </tbody>
            </Table>
            <Button
              type="submit"
              className="btn btn-success"
              style={{ width: "15%", marginLeft: "40%", marginTop: "5%" }}
              title="Guardar Cambios"
              // onClick={handleRoute}
            >
              Guardar
            </Button>
            <div>
              <br />
            </div>
          </Card>
        </ModalBody>

        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Cerrar
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default Dias;
