import { createContext, useState } from "react";
import api from "../../services/api";

export const GoalsContext = createContext();

export const GoalsProvider = ({ children }) => {
  const [goals, setGoals] = useState([]);

  const groupId = JSON.parse(localStorage.getItem("GroupID")) || "";

  const renderGoals = () => {
    api
      .get(`goals/?group=${groupId}`, {
        headers: {
          Authorization: `Bearer  ${JSON.parse(localStorage.getItem("token"))}`,
        },
      })
      .then((res) => {
        setGoals(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const createGoals = (payload) => {
    api
      .post(`goals/`, payload, {
        headers: {
          Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
        },
      })
      .then((response) => {
        console.log(response);
        renderGoals();
      })
      .catch((err) => console.log(err));
  };

  const updateGoals = (id, payload) => {
    api
      .patch(`goals/${id}/`, payload, {
        headers: {
          Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
        },
      })
      .then((response) => {
        console.log(response);
        renderGoals();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteGoals = (id) => {
    api
      .delete(`goals/${id}/`, {
        headers: {
          Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
        },
      })
      .then((response) => {
        console.log(response);
        renderGoals();
      });
  };

  return (
    <GoalsContext.Provider
      value={{ goals, renderGoals, createGoals, updateGoals, deleteGoals }}
    >
      {children}
    </GoalsContext.Provider>
  );
};
