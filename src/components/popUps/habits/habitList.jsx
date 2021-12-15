import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "../../input";
import { useContext } from "react";
import { HabitsContext } from "../../../providers/habits/habits";
import { useState } from "react/cjs/react.development";
import PopUpBase from "../popUpBase";
import DisplayCard from "../../displayCard";
import Button from "../../button";

const GetHabitsSearch = ({ searchHabit, setSearchHabit }) => {
  const { habitsList } = useContext(HabitsContext);
  const [searchedHabits, setSearchedHabits] = useState([]);

  const handlePopUp = () => {
    setSearchHabit(!searchHabit);
  };

  const schema = yup.object().shape({
    search: yup.string(),
  });

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  const handleEdit = (data) => {
    const filteredHabits = habitsList.filter((habit) => {
      return Object.values(habit).includes(data.search);
    });

    setSearchedHabits(filteredHabits);
  };

  return (
    <PopUpBase title="Pesquisar Habitos" closePopUp={handlePopUp}>
      <form onSubmit={handleSubmit(handleEdit)}>
        <Input register={register} name="search" label="Pesquisa" />
        <Button type="submit" name="button--blue">
          Pesquisar
        </Button>
      </form>

      {searchedHabits[0] && <DisplayCard data={searchedHabits} />}
    </PopUpBase>
  );
};
export default GetHabitsSearch;
