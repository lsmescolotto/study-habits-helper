import { createContext, useContext, useState } from "react";
import api from "../../services/api";
import { useUser } from "../user/user";

export const HabitsContext = createContext();

export const HabitsProvider = ({ children }) => {
  const [habitsList, setHabitsList] = useState([]);
  const { token } = useUser();

  const createHabit = (payload) => {
    const Auth = { Authorization: `Bearer  ${token}` };

    console.log(Auth);

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

export const useHabits = useContext(HabitsContext);
