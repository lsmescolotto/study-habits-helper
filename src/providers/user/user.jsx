import { createContext, useState } from "react";
import api from "../../services/api";
export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [token, setToken] = useState("");
  const userRegister = (payload) => {
    api
      .post("https://kenzie-habits.herokuapp.com/users/", payload)
      .then((res) => console.log(res))
      .catch((err) => console.log(err.message));
  };

  const userLogin = (payload) => {
    api
      .post("https://kenzie-habits.herokuapp.com/sessions/", payload)
      .then((res) => {
        setToken(JSON.stringify(res.data.access));
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <UserContext.Provider value={{ userLogin, userRegister, token }}>
      {children}
    </UserContext.Provider>
  );
};
