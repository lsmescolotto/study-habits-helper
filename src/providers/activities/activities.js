import { createContext, useState } from "react";
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
      .catch((err) => {
        console.log(err);
      });
  };

  const createActivities = (payload) => {
    api
      .post(`activities/`, payload, {
        headers: {
          Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
        },
      })
      .then((response) => {
        console.log(response);
        renderActivities(groupId);
      })
      .catch((err) => console.log(err));
  };

  const updateActivities = (id, payload) => {
    api
      .patch(`activities/${id}/`, payload, {
        headers: {
          Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
        },
      })
      .then((res) => {
        console.log(res);
        renderActivities(groupId);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteActivities = (id) => {
    api
      .delete(`activities/${id}/`, {
        headers: {
          Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
        },
      })
      .then((response) => {
        console.log(response);
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
