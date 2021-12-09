import Header from "../../components/header";
import Footer from "../../components/footer";
import { Container } from "./styles";

const AboutUs = () => {
  return (
    <>
      <Header />
      <Container>
        <h2>SHH... ! Be quiet, we are studying here.</h2>

        <h4>
          Ola! Somos a Study Habits Helper, e estamos aqui para ajudar a voce
          criar novos habitos, e aprimorar os antigos!
        </h4>
        <p>
          Projeto feito a partir da proposta da Kenzie Academy Brasil, no curso
          de Full Stack Developer. Agradecemos a colaboracao de todos os
          envolvidos.
        </p>
      </Container>
      <Footer />
    </>
  );
};

export default AboutUs;
