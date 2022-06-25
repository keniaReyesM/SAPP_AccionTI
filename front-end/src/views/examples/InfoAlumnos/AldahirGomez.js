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

const AldahirGomez = () => {
  return (
    <>
      <tbody>
        <tr>
          <th scope="col">Aldahir</th>
          <td>Gómez</td>
          <td>Garcia</td>
          <td>20173TI173</td>
          <td>
            <Badge color="" className="badge-dot mr-4">
              <i className="bg-success" />
              Activo
            </Badge>
          </td>
          <td>
            <Badge color="" className="badge-dot mr-4">
              <i className="bg-yellow" />
              7.5
            </Badge>
          </td>
        </tr>
      </tbody>
    </>
  );
};

export default AldahirGomez;
