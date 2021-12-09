import { Link } from "react-router-dom";
import { Container, About, Home } from "./styles";

const Footer = () => {
  return (
    <Container>
      <About>
        <Link to="/about">About us</Link>
        <Link to="/team">Developer Team</Link>
      </About>
      <Home>
        <Link to="/">Home</Link>
      </Home>
    </Container>
  );
};

export default Footer;
