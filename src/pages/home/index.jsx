import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import Footer from "../../components/footer";
import Header from "../../components/header";
import homeImage from "../../assets/img/homeImg.gif";

import {
  Container,
  Content,
  RedirectContainer,
  ImageContainer,
} from "./styles";

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
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
          <ImageContainer>
            <img src={homeImage} alt="people studying" />
          </ImageContainer>
        </Content>
        <Footer />
      </Container>
    </motion.div>
  );
};

export default Home;
