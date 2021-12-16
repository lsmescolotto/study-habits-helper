import { createContext, useState } from "react";
import toast from "react-hot-toast";
import api from "../../services/api";

export const GoalsContext = createContext();

export const GoalsProvider = ({ children }) => {
  const [goals, setGoals] = useState([]);
  const groupId = localStorage.getItem("GroupID");

  const renderGoals = (groupId) => {
    api
      .get(`goals/?group=${groupId}`, {
        headers: {
          Authorization: `Bearer  ${JSON.parse(localStorage.getItem("token"))}`,
        },
      })
      .then((res) => {
        setGoals(res.data);
      })
      .catch((_) => toast.error("Algo aconteceu, favor tente novamente!"));
  };

  const createGoals = (payload) => {
    api
      .post(`goals/`, payload, {
        headers: {
          Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
        },
      })
      .then((_) => {
        toast.success("Meta criada com sucesso!");
        renderGoals(groupId);
      })
      .catch((_) => toast.error("Favor reveja os campos e tente novamente!"));
  };

  const updateGoals = (id, payload) => {
    api
      .patch(`goals/${id}/`, payload, {
        headers: {
          Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
        },
      })
      .then((_) => {
        toast.success("Meta atualizada com sucesso!");
        renderGoals(groupId);
      })
      .catch((_) => toast.error("Favor reveja os campos e tente novamente!"));
  };

  const deleteGoals = (id) => {
    api
      .delete(`goals/${id}/`, {
        headers: {
          Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
        },
      })
      .then((_) => {
        toast.success("Meta deletada com sucesso!");
        renderGoals(groupId);
      });
  };

  return (
    <GoalsContext.Provider
      value={{
        goals,
        renderGoals,
        createGoals,
        updateGoals,
        deleteGoals,
        setGoals,
      }}
    >
      {children}
    </GoalsContext.Provider>
  );
};
