import { createContext, useState } from "react";
import toast from "react-hot-toast";
import api from "../../services/api";

export const GroupContext = createContext();

export const GroupProviders = ({ children }) => {
  const [groupList, setGroupList] = useState([]);
  const [subscriptions, setSubscriptions] = useState([]);
  const [groupName, setGroupName] = useState("");

  const createGroup = (payload) => {
    api
      .post("groups/", payload, {
        headers: {
          Authorization: `Bearer  ${JSON.parse(
            localStorage.getItem("@Habits:token")
          )}`,
        },
      })
      .then((res) => {
        getGroupsSubscriptions();
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  const getGroups = (data) => {
    api
      .get(`/groups/?search=${data}`, {
        headers: {
          Authorization: `Bearer  ${JSON.parse(
            localStorage.getItem("@Habits:token")
          )}`,
        },
      })
      .then((res) => {
        setGroupList(res.data);
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  const updateGroup = (id, payload) => {
    api
      .patch(`groups/${id}/`, payload, {
        headers: {
          Authorization: `Bearer  ${JSON.parse(
            localStorage.getItem("@Habits:token")
          )}`,
        },
      })
      .then((res) => {
        localStorage.setItem("@Habits:groupContent", JSON.stringify(res.data));
        getGroups(res.data.name);
        toast.success("Grupo atualizado");
      })
      .catch((err) => {
        toast.error("Erro ao atualizar grupo");
      });
  };

  const subscribeGroup = (id) => {
    api
      .post(
        `groups/${id}/subscribe/`,
        {},
        {
          headers: {
            Authorization: `Bearer  ${JSON.parse(
              localStorage.getItem("@Habits:token")
            )}`,
          },
        }
      )
      .then((res) => {
        getGroupsSubscriptions();
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  const getGroupsSubscriptions = () => {
    api
      .get("groups/subscriptions/", {
        headers: {
          Authorization: `Bearer  ${JSON.parse(
            localStorage.getItem("@Habits:token")
          )}`,
        },
      })
      .then((res) => {
        setSubscriptions(res.data);
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  const unsubscribeGroup = (id) => {
    api
      .delete(`groups/${id}/unsubscribe/`, {
        headers: {
          Authorization: `Bearer  ${JSON.parse(
            localStorage.getItem("@Habits:token")
          )}`,
        },
      })
      .then((res) => {
        getGroupsSubscriptions();
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  return (
    <GroupContext.Provider
      value={{
        groupList,
        setGroupList,
        subscriptions,
        createGroup,
        updateGroup,
        subscribeGroup,
        unsubscribeGroup,
        getGroups,
        getGroupsSubscriptions,
        groupName,
        setGroupName,
      }}
    >
      {children}
    </GroupContext.Provider>
  );
};
