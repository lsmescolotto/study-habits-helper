import { createContext, useState } from "react";
import api from "../../services/api";

export const ActivitiesContext = createContext();

export const ActivitiesProvider = ({ children }) => {
  const [activities, setActivities] = useState([]);

  const groupId = JSON.parse(localStorage.getItem("GroupID")) || "";

  const renderActivities = () => {
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
        renderActivities();
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
        renderActivities();
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
        renderActivities();
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
      }}
    >
      {children}
    </ActivitiesContext.Provider>
  );
};
