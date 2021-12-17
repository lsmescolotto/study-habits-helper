import { useContext } from "react";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { HabitsContext } from "../../../providers/habits/habits";
import Button from "../../button";
import Input from "../../input";
import PopUpBase from "../popUpBase";

import { NewHabitForm } from "./styles";

const NewHabit = ({ setNewHabit, newHabit }) => {
  const { createHabit } = useContext(HabitsContext);

  const schema = yup.object().shape({
    title: yup.string().required("Campo obrigatorio"),
    category: yup.string().required("Campo obrigatorio"),
    difficulty: yup.string().required("Campo obrigatorio"),
    frequency: yup.string().required("Campo obrigatorio"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleHabit = (data) => {
    const fullData = {
      ...data,
      achieved: false,
      how_much_achieved: 0,
      user: localStorage.getItem("@Habits:userID"),
    };
    createHabit(fullData);
    setNewHabit(!newHabit);
    handlePopUp();
  };

  const handlePopUp = () => {
    setNewHabit(!newHabit);
  };

  return (
    <PopUpBase title="Novo Habito" closePopUp={handlePopUp}>
      <NewHabitForm onSubmit={handleSubmit(handleHabit)}>
        <Input
          register={register}
          name="title"
          label="Titulo:"
          error={errors.title?.message}
        />
        <Input
          register={register}
          name="category"
          label="Categoria:"
          error={errors.category?.message}
        />
        <Input
          register={register}
          name="difficulty"
          label="Dificuldade:"
          error={errors.difficulty?.message}
        />
        <Input
          register={register}
          name="frequency"
          label="Frequencia:"
          error={errors.frequency?.message}
        />
        <Button type="submit" name="button--blue button__pop-up">
          Criar
        </Button>
      </NewHabitForm>
    </PopUpBase>
  );
};
export default NewHabit;
