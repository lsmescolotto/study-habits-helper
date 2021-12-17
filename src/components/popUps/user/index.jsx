import { useEffect, useState } from "react";

import toast from "react-hot-toast";
import { FiUser, FiMail } from "react-icons/fi";

import api from "../../../services/api";
import Button from "../../button";
import UpdateUserPopUp from "../updateUser";
import PopUpBase from "../popUpBase";

import { Container } from "./styles";

const User = ({ closePopUp }) => {
  const [user, setUser] = useState([]);
  const [editUser, setEditUser] = useState(false);

  const getUserInfo = () => {
    api
      .get(`/users/${JSON.parse(localStorage.getItem("@Habits:userID"))}/`, {
        headers: {
          Authorization: `Bearer ${JSON.parse(
            localStorage.getItem("@Habits:token")
          )}`,
        },
      })
      .then((response) => {
        localStorage.setItem(
          "@Habits:user",
          JSON.stringify(response.data || "")
        );

        setUser(response.data);
      })
      .catch((_) => toast.error("Tente novamente mais tarde"));
  };

  const handleClick = () => {
    setEditUser(!editUser);
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  return (
    <>
      <PopUpBase title={"Usuário"} closePopUp={closePopUp}>
        <Container>
          <section>
            <div>
              <h1>
                <FiUser />
              </h1>
              <h3>Usuário</h3>
            </div>

            <p>{user.username}</p>
          </section>

          <section>
            <div>
              <h1>
                <FiMail />
              </h1>
              <h3>E-mail</h3>
            </div>
            <p>{user.email}</p>
          </section>

          <Button
            onClick={() => handleClick()}
            name="button--pink button__pop-up"
          >
            Editar
          </Button>
        </Container>
      </PopUpBase>
      {editUser && <UpdateUserPopUp closePopUp={closePopUp} />}
    </>
  );
};

export default User;
