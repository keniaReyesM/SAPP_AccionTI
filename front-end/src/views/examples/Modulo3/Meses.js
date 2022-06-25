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
import Dias from "./Dias";

const Meses = () => {
  //VERIFICAR CHECKBOX
  const [isChecked, setIsChecked] = useState(false);
  const handleOnChange = () => {
    setIsChecked(!isChecked);
  };

  const [modal, setModal] = React.useState(false);
  const toggle = () => setModal(!modal);

  const [enero, setEnero] = useState("");

  return (
    <>
      
                <Table className="align-items-center table-flush" responsive>
                  <thead className="thead-light"></thead>
                  <tbody className="text-center">
                    <tr>
                      <td>
                        <Button variant="primary" onClick={toggle}>
                          Enero
                        </Button>
                      </td>
                      <td>
                        <Button variant="primary" onClick={toggle}>
                          Febrero
                        </Button>
                      </td>
                      <td>
                        <Button variant="primary" onClick={toggle}>
                          Marzo
                        </Button>
                      </td>
                      <td>
                        <Button variant="primary" onClick={toggle}>
                          Abril
                        </Button>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <Button variant="primary" onClick={toggle}>
                          Mayo
                        </Button>
                      </td>
                      <td>
                        <Button variant="primary" onClick={toggle}>
                          Junio
                        </Button>
                      </td>
                      <td>
                        <Button variant="primary" onClick={toggle}>
                          Julio
                        </Button>
                      </td>
                      <td>
                        <Button variant="primary" onClick={toggle}>
                          Agosto
                        </Button>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <Button variant="primary" onClick={toggle}>
                          Septiembre
                        </Button>
                      </td>
                      <td>
                        <Button variant="primary" onClick={toggle}>
                          Octubre
                        </Button>
                      </td>
                      <td>
                        <Button variant="primary" onClick={toggle}>
                          Noviembre
                        </Button>
                      </td>
                      <td>
                        <Button variant="primary" onClick={toggle}>
                          Diciembre
                        </Button>
                      </td>
                    </tr>
                  </tbody>
                </Table>
      <Modal isOpen={modal} toggle={toggle} size="lg" style={{maxWidth:"80%"}}>
        <ModalHeader toggle={toggle} style={{backgroundColor:"#F79C65"}}>
          <h3 className="mb-0">
            Mes: <strong>Enero</strong>
          </h3>
        </ModalHeader>
        <ModalBody>
          <Card className="shadow">
            <Dias />
          </Card>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Regresar
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default Meses;
