import PopUpBase from "../popUpBase";
import api from "../../../services/api";
import { useState } from "react";
import Button from "../../button";
import { useEffect } from "react/cjs/react.development";
import UpdateUserPopUp from "../updateUser";
import toast from "react-hot-toast";

import { Container } from "./styles";
import { FiUser, FiMail } from "react-icons/fi";

const User = ({ closePopUp }) => {
  const [user, setUser] = useState([]);
  const [editUser, setEditUser] = useState(false);

  const getUserInfo = () => {
    api
      .get(`/users/${JSON.parse(localStorage.getItem("userId"))}/`, {
        headers: {
          Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
        },
      })
      .then((response) => {
        localStorage.setItem(
          "@Habits:user",
          JSON.stringify(response.data || "")
        );

        setUser(response.data);
      })
      .catch((err) => toast.error(""));
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
