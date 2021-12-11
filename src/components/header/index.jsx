import { Container } from "./styles";
import Button from "../button";

const Header = ({ dashboard = false, id, group = false }) => {
  return (
    <Container>
      <figure>
        <img src="" alt="logo" />
      </figure>
      {!dashboard && (
        <div>
          <div>icons</div>
        </div>
      )}
      {!group && (
        <div>
          <Button>Editar</Button>
          {!!id && <Button>Sair do grupo</Button>}
          <div>icon</div>
        </div>
      )}
    </Container>
  );
};

export default Header;
