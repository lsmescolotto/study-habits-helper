import { createContext, useState } from "react";
import toast from "react-hot-toast";
import api from "../../services/api";

export const ActivitiesContext = createContext();

export const ActivitiesProvider = ({ children }) => {
  const [activities, setActivities] = useState([]);
  const groupId = localStorage.getItem("GroupID");

  const renderActivities = (groupId) => {
    api
      .get(`activities/?group=${groupId}`, {
        headers: {
          Authorization: `Bearer  ${JSON.parse(localStorage.getItem("token"))}`,
        },
      })
      .then((res) => {
        setActivities(res.data);
      })
      .catch((_) => toast.error("Algo aconteceu, favor tente novamente!"));
  };

  const createActivities = (payload) => {
    api
      .post(`activities/`, payload, {
        headers: {
          Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
        },
      })
      .then((_) => {
        toast.success("Atividade adicionada com sucesso!");
        renderActivities(groupId);
      })
      .catch((_) => toast.error("Favor reveja os campos e tente novamente!!"));
  };

  const updateActivities = (id, payload) => {
    api
      .patch(`activities/${id}/`, payload, {
        headers: {
          Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
        },
      })
      .then((_) => {
        toast.success("Atividade atualizada com sucesso!");
        renderActivities(groupId);
      })
      .catch((_) => toast.error("Algo aconteceu, favor tente novamente!"));
  };

  const deleteActivities = (id) => {
    api
      .delete(`activities/${id}/`, {
        headers: {
          Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
        },
      })
      .then((_) => {
        toast.success("Atividade excluida com sucesso!");
        renderActivities(groupId);
      });
  };

  return (
    <ActivitiesContext.Provider
      value={{
        activities,
        renderActivities,
        createActivities,
        updateActivities,
        deleteActivities,
        setActivities,
      }}
    >
      {children}
    </ActivitiesContext.Provider>
  );
};
