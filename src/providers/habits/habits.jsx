import { createContext, useContext, useState } from "react";
import { useUser } from "../user/user";

export const HabitsContext = createContext();

export const HabitsProvider = ({ children }) => {
  const [habitsList, setHabitsList] = useState([]);
  const { token } = useUser();

  const createHabit = (payload) => {
    const Auth = { Authorization: `Bearer  ${token}` };

    console.log(Auth);
    axios
      .post("https://kenzie-habits.herokuapp.com/habits/", payload, {
        headers: Auth,
      })
      .then((res) => {
        console.log(res);
        getHabitsAxios();
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const getHabitsAxios = () => {
    axios
      .get("https://kenzie-habits.herokuapp.com/habits/personal/", {
        headers: {
          Authorization: `Bearer  ${JSON.parse(token)}`,
        },
      })
      .then((res) => {
        console.log(res.data);

        setHabitsList(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const updateHabit = (id, payload) => {
    axios
      .patch(`https://kenzie-habits.herokuapp.com/habits/:${id}/`, payload, {
        headers: {
          Authorization: `Bearer  ${JSON.parse(token)}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        getHabitsAxios();
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  const deleteHabit = (id) => {
    axios
      .delete(`https://kenzie-habits.herokuapp.com/habits/:${id}/`, {
        headers: {
          Authorization: `Bearer  ${JSON.parse(token)}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        getHabitsAxios();
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <HabitsContext.Provider
      value={{ habitsList, createHabit, updateHabit, deleteHabit }}
    >
      {children}
    </HabitsContext.Provider>
  );
};

export const useHabits = useContext(HabitsContext);
