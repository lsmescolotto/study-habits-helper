import { useContext, useState } from "react";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { HabitsContext } from "../../../providers/habits/habits";
import Button from "../../button";
import DisplayCard from "../../displayCard";
import Input from "../../input";
import PopUpBase from "../popUpBase";

import { ContainerSearchHabit, Content } from "./styles";

const GetHabitsSearch = ({ searchHabit, setSearchHabit, search = true }) => {
  const [searchedHabits, setSearchedHabits] = useState([]);
  const [searchInput, setSearchInput] = useState("");

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
    setSearchInput(data.search);
  };

  const cleanSearch = () => {
    setSearchHabit([]);
    setSearchInput("");
    setSearchedHabits([]);
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

            <Content>
              <span>Resultado para: {searchInput}</span>
              <Button onClick={() => cleanSearch()} name="button--clear">
                Limpar
              </Button>
            </Content>

            <div className="habitList">
              {searchedHabits[0] && <DisplayCard data={searchedHabits} />}
            </div>
          </PopUpBase>
        </ContainerSearchHabit>
      )}
    </>
  );
};
export default GetHabitsSearch;
