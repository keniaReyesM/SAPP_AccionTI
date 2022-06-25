import {
  CardFooter,
  Pagination,
  PaginationItem,
  PaginationLink,
  Table,
  Button
} from "reactstrap";

import utileria from 'util/Utileria';

let PeriodoTabla = (props) => {

  let { eliminar, obtener } = props;

  let iterarLista = () => {
    return props?.lista?.map((elemento, indice) => {
      return (
        <tr key={indice}>
          <td> {elemento.idPeriodo} </td>
          <td> {elemento.nombre} </td>
          <td> {utileria.formatDate(elemento.fechaInicio)} </td>
          <td> {utileria.formatDate(elemento.fechaFin)} </td>
          <td>
            <Button className="mt-4 hand" color="danger" size="sm" outline  onClick={() => eliminar({idPeriodo: elemento.idPeriodo})} type="button">
              <i className="ni ni-fat-remove"></i> Eliminar 
            </Button>
            <Button className="mt-4 hand" color="yellow" size="sm" outline  onClick={() => obtener({idPeriodo: elemento.idPeriodo})} type="button">
              <i className="ni ni-fat-remove"></i> Editar 
            </Button>
          </td>
        </tr>);
    });
  };
  return (<div>

    <Table className="align-items-center table-flush" responsive>
      <thead className="thead-light">
        <tr>
          <th scope="col">Id Periodo.</th>
          <th scope="col">Nombre</th>
          <th scope="col">Fecha inicio</th>
          <th scope="col">Fecha fin</th>
          <th scope="col">Acciones</th>
        </tr>
      </thead>
      <tbody>
        {iterarLista()}
      </tbody>
    </Table>

  </div>)
}
export default PeriodoTabla;