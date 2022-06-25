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

const NoeMartinez = () => {
  return (
    <>
      <tbody>
        <tr>
          <th scope="col">Noé</th>
          <td>Martínez</td>
          <td>Flores</td>
          <td>20203TN035</td>
          <td>
            <Badge color="" className="badge-dot mr-4">
              <i className="bg-success" />
              Activo
            </Badge>
          </td>
          <td>
            <Badge color="" className="badge-dot mr-4">
              <i className="bg-success" />
              10
            </Badge>
          </td>
        </tr>
      </tbody>
    </>
  );
};

export default NoeMartinez;
