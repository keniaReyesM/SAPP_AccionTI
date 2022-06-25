
import { useLocation, withRouter } from 'react-router-dom'
import React, { useEffect, useState } from "react";
import PaginationComponent from "react-reactstrap-pagination";
import { Formik, useFormik } from "formik";
import Swal from 'sweetalert2';

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
import { setLocale } from 'yup';
setLocale({
  mixed: {
    default: "${path} no es válido",
    required: "${path} es un campo obligatorio",
    defined: "${path} debe definirse",
    notNull: "${path} no puede ser nulo",
    oneOf: "${path} debe ser uno de los siguientes valores: ${values}",
    notOneOf: "${path} no debe ser uno de los siguientes valores: ${values}",
  },
  string: {
    length: "${path} debe tener exactamente ${length} caracteres",
    min: "${path} debe tener al menos ${min} caracteres",
    max: "${path} debe tener como máximo ${max} caracteres",
    matches: "${path} debe coincidir con lo siguiente: ${regex}",
    email: "${path} debe ser un correo electrónico válido",
    url: "${path} debe ser una URL válida",
    uuid: "${path} debe ser un UUID válido",
    trim: "${path} debe ser una cadena recortada",
    lowercase: "${path} debe ser una cadena en minúsculas",
    uppercase: "${path} debe ser una cadena en mayúsculas",
  },
  number: {
    min: "${path} debe ser mayor o igual que ${min}",
    max: "${path} debe ser menor o igual que ${max}",
    lessThan: "${path} debe ser menor que ${less}",
    moreThan: "${path} debe ser mayor que ${more}",
    positive: "${path} debe ser un número positivo",
    negative: "${path} debe ser un número negativo",
    integer: "${path} debe ser un entero",
  },
  date: {
    min: "${path} campo debe ser posterior a ${min}",
    max: "El campo ${path} debe ser anterior a ${max}",
  }
});

import utileria from "util/Utileria";


const CrudView = (props) => {


  let [enviando, setEnviando] = useState(false);
  let [accion, setAccion] = useState(1);
  let [lista, setLista] = useState([]);
  let [totalElementos, setTotalElementos] = useState(0);
  let [model, setModel] = useState({});
  let [busqueda, setBusqueda] = useState("");
  let [valoresFormulario, setValoresFormulario] = useState({});

  let { titulo, Tabla, Servicio, Formulario, valoresIniciales, formularioSchema } = props;

  let maximoResultados = 10;

  const verAccion = (accionx) => {
    return accion === accionx;
  };

  const cambiarAccion = (accionNueva) => {
    if (accionNueva == 1) {
      // this.$refs.observer.reset();
      // this.model = {};
      setAccion(accionNueva);
    } else {
      if(accionNueva == 2){
        setValoresFormulario(valoresIniciales);
      }
      setAccion(accionNueva);
    }
  };

  let listarPaginado = (paginaSeleccionada) => {
    if (!enviando) {

      setEnviando(true);

      let parametros = { busqueda: busqueda, max: maximoResultados, pagina: paginaSeleccionada || 1 };

      Servicio.listarPaginado(parametros).then((res) => {
        let { total, elementos } = res.data;

        setEnviando(false);
        setLista(elementos);
        setTotalElementos(total);
        // this.pageCount = Math.ceil(totalCount / this.itemsPerPage);
      }).catch((e) => {
        setEnviando(false);
        utileria.errorhttp(e);
      });

    }
  };

  let registrar = (valores, resetForm) => {

    if (!enviando) {
      setEnviando(true);
      Servicio.registrar(valores).then((response) => {
        setEnviando(false);
        let { data, status } = response;
        if (status == 200) {
          listarPaginado();
          utileria.notifications("Se ha registrado correctamente.", "SUCCESS");
          resetForm({values: valoresIniciales});
          cambiarAccion(1);
        } else {
          data = data || "Ocurrió un error durante el registro.";
          utileria.notifications(data, "ERROR");
        }
      }).catch((e) => {
        setEnviando(false);
        utileria.errorhttp(e);
      });
    }
  };

  let actualizar = (valores) => {

    if (!enviando) {
      setEnviando(true);
      Servicio.actualizar(valores).then((response) => {
        setEnviando(false);
        let { data, status } = response;
        if (status == 200) {
          listarPaginado();
          utileria.notifications("Se ha modificado correctamente.", "SUCCESS");
          cambiarAccion(1);
        } else {
          data = data || "Ocurrió un error durante la modificación.";
          utileria.notifications(data, "ERROR");
        }
      }).catch((e) => {
        setEnviando(false);
        utileria.errorhttp(e);
      });
    }
  };

  let obtener = (params, i) => {

    if (!enviando) {

      setEnviando(true);

      Servicio.obtener(params).then((response) => {
        setEnviando(false);
        let { data, status } = response;
        if (status == 200) {
          setValoresFormulario(data);
          cambiarAccion(3);
        } else {
          data = data || "Ocurrió un error al obtener la información.";
          utileria.notifications(data, "ERROR");
        }
      }).catch((e) => {
        setEnviando(false);
        utileria.errorhttp(e);
      });
    }
  };


  let eliminar = (params, i) => {
    if (!enviando) {

      Swal.fire({
        title: '',
        text: "¿Desea eliminar el elemento?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#2DCE89',
        cancelButtonColor: '#FB6340',
        confirmButtonText: 'Sí, eliminar',
        cancelButtonText: "Cancelar"
      }).then((result) => {
        if (result.isConfirmed) {
          setEnviando(true);

          Servicio.eliminar(params).then((response) => {
            setEnviando(false);
            let { data, status } = response;
            if (status == 200) {
              listarPaginado();
              utileria.notifications("Se ha eliminado correctamente.", "SUCCESS");
            } else {
              data = data || "Ocurrió un error al eliminar la información.";
              utileria.notifications(data, "ERROR");
            }
          }).catch((e) => {
            setEnviando(false);
            utileria.errorhttp(e);
          });
        }
      })


    }
  };





  const hacerAccion = (valores, resetForm) => {
    switch (accion) {
      case 2:
        registrar(valores, resetForm);
        break;
      case 3:
        actualizar(valores, resetForm);
        break;
      default:
        break;
    }
  };

  let cambiarPagina = (paginaSeleccionada) => {
    // console.log(paginaSeleccionada);
    // setPagina(paginaSeleccionada);
    listarPaginado(paginaSeleccionada);
  };

  let cancelar = (resetForm) => {
    resetForm({values: valoresIniciales});
    cambiarAccion(1);
  };


  let generarFormulario = ({ errors, touched, isValid, values, resetForm }) => (
    <div>
      <Formulario errors={errors} touched={touched} isValid={isValid} />

      <div className="text-center">
        <Button className="mt-4 hand mr-8"
          color="warning" type="button"
          onClick={ ()=> { cancelar(resetForm) }}
          disabled={enviando}>
          <i className="ni ni-bold-left"></i> Cancelar
        </Button>
        <Button className="mt-4 hand"
          color="success" type="submit"
          onClick={() => { hacerAccion(values, resetForm) }}
          disabled={!isValid || enviando}>
          {enviando ? 'Guardando...' : 'Guardar'} <i className="ni ni-bold-right"></i>
        </Button>
      </div>
    </div>
  );


  useEffect(() => {
    listarPaginado();
    setValoresFormulario(valoresIniciales)
  }, []);

  return (
    <>

      <Container className="mt--7" fluid>

        <Row>
          <div className="col">
            <Card className="shadow">
              <CardHeader className="border-0 dense" >
                <h3 className="mb-0 text-default"> {titulo} </h3>
                <div className="text-muted text-right">

                  {verAccion(1) &&
                    <Button className="mt-4 hand" color="default" onClick={() => cambiarAccion(2)} size="sm" type="button">
                      Agregar <i className="ni ni-fat-add"></i>
                    </Button>
                  }
                </div>
              </CardHeader>
              {verAccion(1) && <Tabla lista={lista} eliminar={eliminar} obtener={obtener} />}
              { (verAccion(2) || verAccion(3) ) &&

                <div className="ml-8 mr-8">
                  {/* <Formulario /> */}
                  <Formik
                    initialValues={valoresFormulario}
                    validationSchema={formularioSchema}
                    onSubmit={(valores) => { hacerAccion(valores) }}
                  >
                    {generarFormulario}
                  </Formik>

                </div>


              }
              <CardFooter className="align-items-center ">
                {verAccion(1) && <nav aria-label="...">
                  <PaginationComponent
                    totalItems={totalElementos}
                    pageSize={maximoResultados}
                    defaultActivePage={1}
                    maxPaginationNumbers={4}
                    size="sm"
                    onSelect={cambiarPagina}
                    previousPageText="<"
                    nextPageText=">"
                    lastPageText=">>"
                    firstPageText="<<"
                  />
                   <div className=" text-right">

                     
                        <Button outline color="success" disabled size="lg" type="button">
                          Total { totalElementos} 
                        </Button>
                      
                      </div>
                </nav>}
              </CardFooter>
            </Card>
          </div>
        </Row>
      </Container>

    </>
  );
};

export default CrudView;
