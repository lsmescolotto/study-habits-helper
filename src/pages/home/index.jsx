import { Link } from "react-router-dom";
import Footer from "../../components/footer";
import Header from "../../components/header";
import { Container, RedirectContainer } from "./styles";

const Home = () => {
  return (
    <Container>
      <Header />

      <RedirectContainer>
        <header>
          <h1>SHH...!</h1>
          <h2>Be quiet, we are studying here.</h2>
        </header>
        <h3>Seja bem-vindo!</h3>
        <h4>
          Voce ja faz parte da comunidade? Faca seu
          <Link to="/login">Login</Link>!
        </h4>
        <h4>
          Ainda nao faz parte? Corra e faca seu{" "}
          <Link to="/signup">Cadastro</Link>!
        </h4>
      </RedirectContainer>
      <Footer />
    </Container>
  );
};

export default Home;
