import UserHeader from "components/Headers/UserHeader";
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
import ObtenerPDF from "../Modulo8/ObtenerPDF";
import { PDFViewer } from "@react-pdf/renderer";
import { useHistory } from "react-router-dom";

const PadresFamilia = () => {
  // Modal Personal Obed
  const [modal, setModal] = React.useState(false);
  const toggle = () => setModal(!modal);

  const history = useHistory();

  const handleRoute = () => {
    history.push("/admin/pdf");
  };

  return (
    <>
      <UserHeader />
      <Container className="mt--7" fluid>
        <Row>
          <div className="col">
            <Card className="shadow">
              <CardHeader className="border-0" style={{backgroundColor:"#8ADFE2"}}>
                <h3 className="mb-0">Padres de Familia</h3>
              </CardHeader>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">Clave INE</th>
                    <th scope="col">Nombre(s)</th>
                    <th scope="col">Parentesco</th>
                    <th scope="col">Alumnos Relacionados</th>
                    <th scope="col">Descargar PDF</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="col">
                      <strong>HUHO001212HMSRRBA9</strong>
                    </th>
                    <td>Rosalba Hernández Calderón</td>
                    <td>
                      <span class="badge badge-success">Madre</span>
                    </td>
                    <td>
                      <ul>
                        <li>Obed Hurtado</li>
                        <li>Isaac Hurtado</li>
                      </ul>
                    </td>
                    <td>
                      <Button
                        target="_blank"
                        className="button"
                        // onClick={() => {
                        //   setVerPdf(!verPdf);
                        // }}
                        onClick={toggle}
                      >
                        Descargar
                      </Button>
                    </td>
                  </tr>
                  <tr>
                    <th scope="col">
                      <strong>NMTF202012MGRRNMF7</strong>
                    </th>
                    <td>Juan Martínez González</td>
                    <td>
                      <span class="badge badge-primary">Padre</span>
                    </td>
                    <td>
                      <ul>
                        <li>Martínez Flores Noé</li>
                      </ul>
                    </td>
                    <td>
                      <Button
                        target="_blank"
                        className="button"
                        onClick={toggle}
                      >
                        Descargar
                      </Button>
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

      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>
          <h3 className="mb-0">HOLA PDF</h3>
        </ModalHeader>
        <ModalBody>
          <iframe
            src="./docs/PruebaPDF.pdf"
            // type="application/pdf"
            style={{ width: "450px", height: "630px" }}
          />
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

export default PadresFamilia;
