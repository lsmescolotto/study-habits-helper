import { createContext, useState } from "react";
import toast from "react-hot-toast";
import api from "../../services/api";

export const HabitsContext = createContext();

export const HabitsProvider = ({ children }) => {
  const [habitsList, setHabitsList] = useState([]);

  const createHabit = (payload) => {
    api
      .post("habits/", payload, {
        headers: {
          Authorization: `Bearer  ${JSON.parse(localStorage.getItem("token"))}`,
        },
      })
      .then((res) => {
        getHabitsAxios();
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  const getHabitsAxios = () => {
    api
      .get("habits/personal/", {
        headers: {
          Authorization: `Bearer  ${JSON.parse(localStorage.getItem("token"))}`,
        },
      })
      .then((res) => {
        setHabitsList(res.data);
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  const updateHabit = (id, payload) => {
    api
      .patch(`habits/${id}/`, payload, {
        headers: {
          Authorization: `Bearer  ${JSON.parse(localStorage.getItem("token"))}`,
        },
      })
      .then((res) => {
        getHabitsAxios();
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };
  const deleteHabit = (id) => {
    api
      .delete(`habits/${id}/`, {
        headers: {
          Authorization: `Bearer  ${JSON.parse(localStorage.getItem("token"))}`,
        },
      })
      .then((res) => {
        getHabitsAxios();
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  return (
    <HabitsContext.Provider
      value={{
        habitsList,
        createHabit,
        updateHabit,
        deleteHabit,
        getHabitsAxios,
      }}
    >
      {children}
    </HabitsContext.Provider>
  );
};
