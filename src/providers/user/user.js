import { createContext, useContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [token, setToken] = useState("");
  const userRegister = (payload) => {
    axios
      .post("https://kenzie-habits.herokuapp.com/users/", payload)
      .then((res) => console.log(res))
      .catch((err) => console.log(err.message));
  };

  const userLogin = (payload) => {
    axios
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

export const useUser = useContext(UserContext);
