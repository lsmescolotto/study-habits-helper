import { createContext, useContext, useState } from "react";
import api from "../../services/api";
import { UserContext } from "../user/user";
//this
export const HabitsContext = createContext();

export const HabitsProvider = ({ children }) => {
  const [habitsList, setHabitsList] = useState([]);
  const { token } = useContext(UserContext);

  const createHabit = (payload) => {
    const Auth = { Authorization: `Bearer  ${token}` };

    api
      .post("habits/", payload, {
        headers: Auth,
      })
      .then((res) => {
        console.log(res);
        getHabitsAxios();
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const getHabitsAxios = () => {
    api
      .get("habits/personal/", {
        headers: {
          Authorization: `Bearer  ${JSON.parse(token)}`,
        },
      })
      .then((res) => {
        console.log(res.data);

        setHabitsList(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const updateHabit = (id, payload) => {
    api
      .patch(`habits/:${id}/`, payload, {
        headers: {
          Authorization: `Bearer  ${JSON.parse(token)}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        getHabitsAxios();
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  const deleteHabit = (id) => {
    api
      .delete(`habits/:${id}/`, {
        headers: {
          Authorization: `Bearer  ${JSON.parse(token)}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        getHabitsAxios();
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <HabitsContext.Provider
      value={{ habitsList, createHabit, updateHabit, deleteHabit }}
    >
      {children}
    </HabitsContext.Provider>
  );
};
