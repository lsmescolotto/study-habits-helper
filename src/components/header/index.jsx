import { useState, useContext } from "react";

import { useHistory } from "react-router-dom";

import { GroupContext } from "../../providers/groups/groups";
import Button from "../button";
import Logo from "../../assets/img/logo.png";
import UpdateGroup from "../popUps/updateGroup";
import User from "../popUps/user";

import {
  FiUser,
  FiLogOut,
  FiArrowLeftCircle,
  FiEdit,
  FiUserX,
} from "react-icons/fi";
import { Container } from "./styles";

const Header = ({ dashboard = false, id, group = false }) => {
  const [updatePopUp, setUpdatePopUp] = useState(false);
  const [userPopUP, setUserPopUp] = useState(false);

  const { unsubscribeGroup } = useContext(GroupContext);

  const history = useHistory();

  const logout = () => {
    localStorage.clear();
    history.push("/");
    window.location.reload();
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
            <span className="tooltip">
              <FiUser />
              <small className="tooltip-message">Usuário</small>
            </span>
            <span onClick={() => logout()} className="tooltip">
              <FiLogOut />
              <small className="tooltip-message">Logout</small>
            </span>
          </div>
        )}

        {!!group && (
          <section>
            <p className="tooltip">
              <FiEdit onClick={() => handleEdit(id)} />
              <small className="tooltip-message">Editar Grupo</small>
            </p>
            <span>
              <Button
                onClick={() => handleEdit(id)}
                name="button--blue button__header"
              >
                Editar
              </Button>
            </span>

            {!!id && (
              <span>
                <Button
                  onClick={() => handleUnsubscribe(id)}
                  name="button--red button__header"
                >
                  Sair do grupo
                </Button>
              </span>
            )}

            <p className="tooltip">
              <FiUserX onClick={() => handleUnsubscribe(id)} />
              <small className="tooltip-message">Sair do Grupo</small>
            </p>
            <p className="tooltip">
              <FiArrowLeftCircle onClick={GoToDashboard} />
              <small className="tooltip-message">Dashboard</small>
            </p>
            <span className="tooltip">
              <FiArrowLeftCircle onClick={GoToDashboard} />
              <small className="tooltip-message">Dashboard</small>
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
