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
      .then((_) => {
        toast.success("Hábito criado com sucesso!");
        getHabitsAxios();
      })
      .catch((_) => toast.error("Favor reveja os campos e tente novamente!"));
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
      .catch((_) => toast.error("Algo aconteceu, favor tente novamente!"));
  };

  const updateHabit = (id, payload) => {
    api
      .patch(`habits/${id}/`, payload, {
        headers: {
          Authorization: `Bearer  ${JSON.parse(localStorage.getItem("token"))}`,
        },
      })
      .then((_) => {
        toast.success("Hábito atualizado com sucesso!");
        getHabitsAxios();
      })
      .catch((_) => toast.error("Favor reveja os campos e tente novamente"));
  };

  const deleteHabit = (id) => {
    api
      .delete(`habits/${id}/`, {
        headers: {
          Authorization: `Bearer  ${JSON.parse(localStorage.getItem("token"))}`,
        },
      })
      .then((_) => {
        toast.success("Hábito deletado com sucesso!");
        getHabitsAxios();
      })
      .catch((_) => toast.error("Algo aconteceu, favor tente novamente!"));
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
