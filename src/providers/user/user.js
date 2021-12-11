
import { createContext,  useState } from "react";
import { useHistory } from "react-router-dom";
import toast from "react-hot-toast";
import api from "../../services/api";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [token, setToken] = useState("");
  const [authenticated, setAuthenticated] = useState(false);
  const history = useHistory();

  const userRegister = (payload) => {
    api
      .post("users/", payload)
      .then((_) => {
        toast.success("Conta criada com sucesso. Agora é só fazer o login.");
        return history.push("/login");
      })
      .catch((err) => toast.error("Erro ao criar a conta. Tente outro email."));
  };

  const userLogin = (payload) => {
    api
      .post("sessions/", payload)
      .then((res) => {
      
        setToken(JSON.stringify(res.data.access));
        setAuthenticated(true);
        localStorage.setItem("token", JSON.stringify(res.data.access));
        history.push("/dashboard");

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
