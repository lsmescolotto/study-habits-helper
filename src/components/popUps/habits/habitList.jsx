import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "../../input";
import { useContext } from "react";
import { HabitsContext } from "../../../providers/habits/habits";
import { useState } from "react/cjs/react.development";
import PopUpBase from "../popUpBase";
import DisplayCard from "../../displayCard";

const GetHabitsSearch = ({ closePopUp }) => {
  const { habitsList, getHabitsAxios } = useContext(HabitsContext);
  const [searchedHabits, setSearchedHabits] = useState([]);
  getHabitsAxios();
  const schema = yup.object().shape({
    search: yup.string(),
  });

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  const handleEdit = (data) => {
    const filteredHabits = habitsList.filter((habit) => {
      return habit.includes(data);
    });

    setSearchedHabits(filteredHabits);
  };

  return (
    <PopUpBase title={"Pesquisar Habitos"}>
      <form onSubmit={handleSubmit(handleEdit)}>
        <Input register={register} name={"search"}></Input>
        <button type="submit">Search</button>
      </form>

      {searchedHabits?.map((habit) => {
        return <DisplayCard data={habit} />;
      })}
    </PopUpBase>
  );
};
export default GetHabitsSearch;
