
import { Button, Card, CardHeader, CardBody, FormGroup, InputGroupAddon, InputGroupText, InputGroup, Col, Row } from "reactstrap";
import { Form, Field, ErrorMessage } from "formik";
import React, { useState } from "react";


import utileria from "util/Utileria";


function PeriodoFormulario(props) {
  let { errors, touched } = props;


  return (
    <>

      <Form role="form">

        <FormGroup className={utileria.claseInputForm(errors.nombre, touched.nombre)}>
          <InputGroup className="input-group-alternative">
            <Field
              className="form-control"
              placeholder="Nombre..."
              id="nombre"
              name="nombre"
              type="text"
              autoComplete="off"
              required
            />

          </InputGroup>
          <ErrorMessage
            name="nombre"
            component={() => <small className="text-danger">{errors.nombre}</small>}
          />
        </FormGroup>
        <FormGroup className={utileria.claseInputForm(errors.fechaInicio, touched.fechaInicio)}>
          <InputGroup className="input-group-alternative">
            <Field
              className="form-control"
              placeholder="Fecha inicio..."
              id="fechaInicio"
              name="fechaInicio"
              type="date"
              autoComplete="off"
              required
            />

          </InputGroup>
          <ErrorMessage
            name="fechaInicio"
            component={() => <small className="text-danger">{errors.fechaInicio}</small>}
          />
        </FormGroup>
        <FormGroup className={utileria.claseInputForm(errors.fechaFin, touched.fechaFin)}>
          <InputGroup className="input-group-alternative">
            <Field
              className="form-control"
              placeholder="Fecha fin..."
              id="fechaFin"
              name="fechaFin"
              type="date"
              autoComplete="off"
              required
            />

          </InputGroup>
          <ErrorMessage
            name="fechaFin"
            component={() => <small className="text-danger">{errors.fechaFin}</small>}
          />
        </FormGroup>

        
      </Form>

    </>
  );
};

export default PeriodoFormulario;
