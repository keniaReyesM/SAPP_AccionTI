
import { Button, Container, Row, Col } from "reactstrap";

const UserHeader = () => {
  return (
    <>
      <div
        className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
         style={{
           minHeight: "200px",
           backgroundImage: "url(" + require("../../assets/img/fondo.png").default + ")",
           backgroundSize: "cover",
           backgroundPosition: "center top",
         }}
      >
        {/* Mask */}
        <span className="mask opacity-8" style={{backgroundColor:"#e3e3"}}/>
      </div>
    </>
  );
};

export default UserHeader;
