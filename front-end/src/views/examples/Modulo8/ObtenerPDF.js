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
import { Document, Page, View, Text, Image } from "@react-pdf/renderer";
import ObedHurtado from "../InfoAlumnos2/ObedHurtado";
import NoeMartinez from "../InfoAlumnos2/NoeMartinez";
import MarioRodriguez from "../InfoAlumnos2/MarioRodriguez";
import AldahirGomez from "../InfoAlumnos2/AldahirGomez";

const ObtenerPDF = () => {
  return (
    <>
      <UserHeader />
      <Container className="mt--7" fluid>
        {/* Table Actividad General*/}
        <Row>
          <div className="col">
            <Card className="shadow">
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">Nombre(s)</th>
                    <th scope="col">Apellido Paterno</th>
                    <th scope="col">Apellido Materno</th>
                    <th scope="col">Matrícula</th>
                    <th scope="col">Status</th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <ObedHurtado />
                <NoeMartinez />
                <MarioRodriguez />
                <AldahirGomez />
              </Table>
            </Card>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default ObtenerPDF;
