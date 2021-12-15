import { Container } from "./styles";
import Button from "../button";
import Logo from "../../assets/img/logo.png";
import { FiUser, FiLogOut, FiArrowLeftCircle } from "react-icons/fi";
import { Link, useHistory } from "react-router-dom";

const Header = ({ dashboard = false, id, group = false }) => {
  const history = useHistory();
  const logout = () => {
    localStorage.clear();
    history.push("/");
  };

  const GoToDashboard = () => {
    history.push("/dashboard");
  };

  return (
    <Container>
      <figure>
        <img src={Logo} alt="logo" />
      </figure>
      {!!dashboard && (
        <div>
          <span>
            <FiUser />
          </span>
          <span onClick={logout}>
            <FiLogOut />
          </span>
        </div>
      )}
      {!!group && (
        <section>
          <Button name="button--blue button__header">Editar</Button>
          {!!id && (
            <Button name="button--red button__header">Sair do grupo</Button>
          )}
          <span onClick={GoToDashboard}>
            <FiArrowLeftCircle />
          </span>
        </section>
      )}
    </Container>
  );
};

export default Header;
