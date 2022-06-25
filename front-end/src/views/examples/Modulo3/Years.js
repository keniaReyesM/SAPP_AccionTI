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
import estilobtn from "../../../assets/css/estilobtn.css";
import Meses from "../Modulo3/Meses";

const Years = () => {
  //VERIFICAR CHECKBOX
  const [isChecked, setIsChecked] = useState(false);
  const handleOnChange = () => {
    setIsChecked(!isChecked);
  };

  const [modal, setModal] = React.useState(false);
  const toggle = () => setModal(!modal);

  return (
    <>
      <Table className="align-items-center table-flush" responsive>
        {/* <thead className="thead-light">
                  
                </thead> */}
        <tbody>
          <tr>
            <td>
              <Button className="button" onClick={toggle}>
                <strong>2022 - 2023</strong>
              </Button>

              <Button className="button" onClick={toggle}>
                <strong>2023 - 2024</strong>
              </Button>
            </td>
          </tr>
        </tbody>
      </Table>

      {/* MODAL AÑOS */}
      <Modal isOpen={modal} toggle={toggle} size="lg" style={{maxWidth:"80%"}}>
        <ModalHeader toggle={toggle} style={{backgroundColor:"#F79C65"}}>
          <h3 className="mb-0">
            Ciclo Escolar: <strong>2022 - 2023</strong>
          </h3>
        </ModalHeader>
        <ModalBody>
          {/* <TablesPersonalInfo/> */}

          <Card className="shadow">
            <Meses></Meses>
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

export default Years;
