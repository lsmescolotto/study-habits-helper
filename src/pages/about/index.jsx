import Header from "../../components/header";
import Footer from "../../components/footer";
import { Container, Content, ImageContainer, TextContainer } from "./styles";

const AboutUs = () => {
  return (
    <Container>
      <Header />
      <Content>
        <TextContainer>
          <h2>SHH... ! Be quiet, we are studying here.</h2>

          <h4>
            Olá! Somos a Study Habits Helper, e estamos aqui para ajudar você a
            criar novos hábitos e aprimorar os antigos!
          </h4>
          <p>
            Projeto feito a partir da proposta da Kenzie Academy Brasil, no
            curso de Full Stack Developer. Agradecemos a colaboração de todos os
            envolvidos.
          </p>
        </TextContainer>
        <ImageContainer />
      </Content>
      <Footer />
    </Container>
  );
};

export default AboutUs;
