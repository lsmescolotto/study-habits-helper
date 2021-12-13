import PopUpBase from "../popUpBase";
import api from "../../../services/api";
import { useState } from "react";

const User = ({ closePopUp }) => {
  const [user, setUser] = useState([]);

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

  return (
    <>
      <PopUpBase title={"Usuário"} closePopUp={closePopUp}>
        <p>Username:{user.username}</p>
        <p>Email: {user.email}</p>
      </PopUpBase>
    </>
  );
};

export default User;
