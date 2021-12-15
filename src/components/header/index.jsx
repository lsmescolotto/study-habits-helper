import { Container } from "./styles";
import Button from "../button";
import Logo from "../../assets/img/logo.png";

const Header = ({ dashboard = false, id, group = false }) => {
  return (
    <Container>
      <figure>
        <img src={Logo} alt="logo" />
      </figure>
      {!!dashboard && (
        <div>
          <div>icons</div>
        </div>
      )}
      {!!group && (
        <div>
          <Button name="button--blue button__header">Editar</Button>
          {!!id && (
            <Button name="button--red button__header">Sair do grupo</Button>
          )}
          <div>icon</div>
        </div>
      )}
    </Container>
  );
};

export default Header;
