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
} from "reactstrap";
// core components
import Header from "components/Headers/Header.js";

const ObedHurtado = () => {
  return (
    <>
      <tbody>
        <tr>
          <th scope="col">Obed Ariel</th>
          <td>Hurtado</td>
          <td>Hernández</td>
          <td>20193TN117</td>
          <td>
            <Badge color="" className="badge-dot mr-4">
              <i className="bg-success" />
              Activo
            </Badge>
          </td>
          <td>
            <Badge color="" className="badge-dot mr-4">
              <i className="bg-success" />
              8.6
            </Badge>
          </td>
        </tr>
      </tbody>
    </>
  );
};

export default ObedHurtado;
