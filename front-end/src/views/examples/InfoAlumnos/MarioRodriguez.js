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

const MarioRodriguez = () => {
  return (
    <>
      <tbody>
        <tr>
          <th scope="col">Mario</th>
          <td>Rodríguez</td>
          <td>González</td>
          <td>20193TN165</td>
          <td>
            <Badge color="" className="badge-dot mr-4">
              <i className="bg-success" />
              Activo
            </Badge>
          </td>
          <td>
            <Badge color="" className="badge-dot mr-4">
              <i className="bg-danger" />
              5.5
            </Badge>
          </td>
        </tr>
      </tbody>
    </>
  );
};

export default MarioRodriguez;
