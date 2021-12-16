import { createContext, useState } from "react";
import toast from "react-hot-toast";
import api from "../../services/api";

export const ActivitiesContext = createContext();

export const ActivitiesProvider = ({ children }) => {
  const [activities, setActivities] = useState([]);
  const groupId = localStorage.getItem("@Habits:groupID");

  const renderActivities = (groupId) => {
    api
      .get(`activities/?group=${groupId}`, {
        headers: {
          Authorization: `Bearer  ${JSON.parse(
            localStorage.getItem("@Habits:token")
          )}`,
        },
      })
      .then((res) => {
        setActivities(res.data);
      })
      .catch((err) => {
        toast.error(err);
      });
  };

  const createActivities = (payload) => {
    api
      .post(`activities/`, payload, {
        headers: {
          Authorization: `Bearer ${JSON.parse(
            localStorage.getItem("@Habits:token")
          )}`,
        },
      })
      .then((response) => {
        renderActivities(groupId);
      })
      .catch((err) => toast.error(err));
  };

  const updateActivities = (id, payload) => {
    api
      .patch(`activities/${id}/`, payload, {
        headers: {
          Authorization: `Bearer ${JSON.parse(
            localStorage.getItem("@Habits:token")
          )}`,
        },
      })
      .then((res) => {
        renderActivities(groupId);
      })
      .catch((err) => {
        toast.error(err);
      });
  };

  const deleteActivities = (id) => {
    api
      .delete(`activities/${id}/`, {
        headers: {
          Authorization: `Bearer ${JSON.parse(
            localStorage.getItem("@Habits:token")
          )}`,
        },
      })
      .then((response) => {
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
