import { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import api from "../../services/api";

export const GroupContext = createContext();

export const GroupProviders = ({ children }) => {
  const [groupList, setGroupList] = useState([]);
  const [subscriptions, setSubscriptions] = useState([]);
  const [groupName, setGroupName] = useState("");

  const groupContent = JSON.parse(localStorage.getItem("@Habits:groupContent"));

  useEffect(() => {
    setGroupName(groupContent?.name);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const createGroup = (payload) => {
    api
      .post("groups/", payload, {
        headers: {
          Authorization: `Bearer  ${JSON.parse(
            localStorage.getItem("@Habits:token")
          )}`,
        },
      })
      .then((_) => {
        toast.success("Grupo criado com sucesso!");
        getGroupsSubscriptions();
      })
      .catch((_) => toast.error("Favor reveja os campos e tente novamente!"));
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
      .catch((_) => toast.error("Grupo não encontrado, tente novamente!"));
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
        setGroupName(res.data.name);
        toast.success("Grupo atualizado com sucesso!");
      })
      .catch((_) =>
        toast.error("Erro ao atualizar grupo, favor tente novamente")
      );
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
      .then((_) => {
        toast.success("Você se inscreveu no grupo!");
        getGroupsSubscriptions();
      })
      .catch((_) =>
        toast.error("Erro ao se inscrever no grupo, favor tente novamente")
      );
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
      .catch((_) => toast.error("Algo aconteceu, favor tente novamente!"));
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
      .then((_) => {
        toast.success("Você saiu do grupo!");
        getGroupsSubscriptions();
      })
      .catch((_) => toast.error("Algo aconteceu, favor tente novamente!"));
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
