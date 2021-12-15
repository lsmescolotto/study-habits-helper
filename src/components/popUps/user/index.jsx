import PopUpBase from "../popUpBase";
import api from "../../../services/api";
import { useState } from "react";
import Button from "../../button";
import { useEffect } from "react/cjs/react.development";
import UpdateUserPopUp from "../updateUser";

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
        console.log(response);
        setUser(response.data);
      })
      .catch((err) => console.log(err));
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
        <p>Username:{user.username}</p>
        <p>Email: {user.email}</p>
        <Button onClick={() => handleClick()}>Editar</Button>
      </PopUpBase>
      {editUser && <UpdateUserPopUp closePopUp={closePopUp} />}
    </>
  );
};

export default User;
