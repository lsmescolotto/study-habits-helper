import { Container } from "./styles";
import Button from "../button";
import Logo from "../../assets/img/logo.png";
import { useHistory } from "react-router-dom";
import { useContext } from "react/cjs/react.development";
import { GroupContext } from "../../providers/groups/groups";
import UpdateGroup from "../popUps/updateGroup";
import User from "../popUps/user";
import { useState } from "react";

const Header = ({ dashboard = false, id, group = false }) => {
  const { unsubscribeGroup } = useContext(GroupContext);
  const [updatePopUp, setUpdatePopUp] = useState(false);
  const [userPopUP, setUserPopUp] = useState(false);
  const history = useHistory();
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
  return (
    <>
      <Container>
        <figure>
          <img src={Logo} alt="logo" />
        </figure>
        {!!dashboard && (
          <div>
            <div onClick={() => handleUser()}>icons</div>
          </div>
        )}
        {!!group && (
          <div>
            <Button onClick={() => handleEdit(id)}>Editar</Button>
            {!!id && (
              <Button onClick={() => handleUnsubscribe(id)}>
                Sair do grupo
              </Button>
            )}
            <div onClick={() => history.push("/dashboard")}>Back</div>
          </div>
        )}
      </Container>
      {updatePopUp && <UpdateGroup id={id} closePopUp={handleEdit} />}
      {userPopUP && <User closePopUp={handleUser} />}
    </>
  );
};

export default Header;
