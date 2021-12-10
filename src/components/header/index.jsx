import { Container } from "./styles";
import Button from "../button";

const Header = ({ dashboard = false, id }) => {
  return (
    <Container>
      <figure>
        <img src="" alt="logo" />
      </figure>
      {dashboard === true ? (
        <div>
          <div>icons</div>
        </div>
      ) : (
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
