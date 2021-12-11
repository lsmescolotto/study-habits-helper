import { createContext, useState } from "react";
import api from "../../services/api";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [token, setToken] = useState("");
  const [authenticated, setAuthenticated] = useState(false);
  const userRegister = (payload) => {
    api
      .post("users/", payload)
      .then((res) => console.log(res))
      .catch((err) => console.log(err.message));
  };

  const userLogin = (payload) => {
    api
      .post("sessions/", payload)
      .then((res) => {
        setToken(JSON.stringify(res.data.access));
        setAuthenticated(true);
        localStorage.setItem("token", JSON.stringify(res.data.access));
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <UserContext.Provider
      value={{ userLogin, userRegister, token, authenticated }}
    >
      {children}
    </UserContext.Provider>
  );
};
