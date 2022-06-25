import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Container,
  Row,
  Col,
} from "reactstrap";
// core components
import UserHeader from "components/Headers/UserHeader.js";
import FormActivity from "./Modulo2/FormActivity";

const Registro = () => {
  return (
    <>
      <UserHeader/>
      <FormActivity/>
    </>
  );
};

export default Registro;
