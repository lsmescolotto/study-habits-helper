import PopUpBase from "../popUpBase";
import api from "../../../services/api";
import { useState } from "react";
import Button from "../../button";
import { useEffect } from "react/cjs/react.development";
import UpdateUserPopUp from "../updateUser";
import toast from "react-hot-toast";

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
        <p>Username: {user.username}</p>
        <p>Email: {user.email}</p>
        <Button
          onClick={() => handleClick()}
          name="button--pink button__pop-up"
        >
          Editar
        </Button>
      </PopUpBase>
      {editUser && <UpdateUserPopUp closePopUp={closePopUp} />}
    </>
  );
};

export default User;
