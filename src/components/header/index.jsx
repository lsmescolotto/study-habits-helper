import { Container } from "./styles";
import Button from "../button";
import Logo from "../../assets/img/logo.png";
import { useContext } from "react";
import { GroupContext } from "../../providers/groups/groups";
import UpdateGroup from "../popUps/updateGroup";
import User from "../popUps/user";
import { useState } from "react";
import { FiUser, FiLogOut, FiArrowLeftCircle } from "react-icons/fi";
import { Link, useHistory } from "react-router-dom";

const Header = ({ dashboard = false, id, group = false }) => {
  const [updatePopUp, setUpdatePopUp] = useState(false);
  const [userPopUP, setUserPopUp] = useState(false);

  const { unsubscribeGroup } = useContext(GroupContext);

  const history = useHistory();

  const logout = () => {
    localStorage.clear();
    history.push("/");
  };

  const handleUnsubscribe = (id) => {
    unsubscribeGroup(id);
    history.push("/dashboard");
  };

  const handleUser = () => {
    setUserPopUp(!userPopUP);
  };

  const handleEdit = () => {
    setUpdatePopUp(!updatePopUp);
  };

  const GoToDashboard = () => {
    history.push("/dashboard");
  };

  return (
    <>
      <Container>
        <figure>
          <img src={Logo} alt="logo" />
        </figure>
        {!!dashboard && (
          <div onClick={() => handleUser()}>
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
            <Button
              onClick={() => handleEdit(id)}
              name="button--blue button__header"
            >
              Editar
            </Button>
            {!!id && (
              <Button
                onClick={() => handleUnsubscribe(id)}
                name="button--red button__header"
              >
                Sair do grupo
              </Button>
            )}
            <span onClick={GoToDashboard}>
              <FiArrowLeftCircle />
            </span>
          </section>
        )}
      </Container>
      {updatePopUp && <UpdateGroup id={id} closePopUp={handleEdit} />}
      {userPopUP && <User closePopUp={handleUser} />}
    </>
  );
};

export default Header;
