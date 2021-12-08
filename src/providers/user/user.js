import { createContext, useContext, useEffect, useState } from "react";
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

export const useUser = useContext(UserContext);
