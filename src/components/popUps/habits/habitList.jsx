import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { HabitsContext } from "../../../providers/habits/habits";
import { useState } from "react/cjs/react.development";
import { ContainerSearchHabit } from "./styles";
import Button from "../../button";
import DisplayCard from "../../displayCard";
import Input from "../../input";
import PopUpBase from "../popUpBase";

const GetHabitsSearch = ({ searchHabit, setSearchHabit, search = true }) => {
  const [searchedHabits, setSearchedHabits] = useState([]);

  const { habitsList } = useContext(HabitsContext);

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
      return Object.values(habit).some((value) => {
        return JSON.stringify(value)
          .toLowerCase()
          .includes(data.search.toLowerCase());
      });
    });

    setSearchedHabits(filteredHabits);
  };

  return (
    <>
      {search && (
        <ContainerSearchHabit>
          <PopUpBase title="Pesquisar Habitos" closePopUp={handlePopUp}>
            <form onSubmit={handleSubmit(handleEdit)}>
              <Input
                register={register}
                name="search"
                placeholder="Pesquisar"
              />
              <Button type="submit" name="button--blue">
                Pesquisar
              </Button>
            </form>

            {searchedHabits[0] && <DisplayCard data={searchedHabits} />}
          </PopUpBase>
        </ContainerSearchHabit>
      )}
    </>
  );
};
export default GetHabitsSearch;
