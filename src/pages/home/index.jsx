import { Link } from "react-router-dom";
import Footer from "../../components/footer";
import Header from "../../components/header";
import {
  Container,
  Content,
  RedirectContainer,
  ImageContainer,
} from "./styles";

const Home = () => {
  return (
    <Container>
      <Header />
      <Content>
        <RedirectContainer>
          <header>
            <h1>SHH...!</h1>
            <h2>Be quiet, we are studying here.</h2>
          </header>
          <h3>Seja bem-vindo(a)!</h3>
          <h4>
            Você já faz parte da comunidade? Faça seu
            <Link to="/login">Login</Link>!
          </h4>
          <h4>
            Ainda não faz parte? Corra e faça seu
            <Link to="/signup">Cadastro</Link>!
          </h4>
        </RedirectContainer>
        <ImageContainer></ImageContainer>
      </Content>
      <Footer />
    </Container>
  );
};

export default Home;
