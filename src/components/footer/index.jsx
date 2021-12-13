import { Link } from "react-router-dom";
import { Container } from "./styles";

const Footer = () => {
  return (
    <Container>
      <Link to="/about">About us</Link>
      <Link to="/">shh.com</Link>
      <Link to="/team">Developer Team</Link>
    </Container>
  );
};

export default Footer;
