import { createContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import api from "../../services/api";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [token, setToken] = useState("");
  const [authenticated, setAuthenticated] = useState(false);
  const history = useHistory();

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
        history.push("/dashboard");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  useEffect(() => {
    setAuthenticated(true);
  }, [token]);

  return (
    <UserContext.Provider
      value={{ userLogin, userRegister, token, authenticated }}
    >
      {children}
    </UserContext.Provider>
  );
};
