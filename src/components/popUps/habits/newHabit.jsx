import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "../../input";
import { useContext } from "react";
import { HabitsContext } from "../../../providers/habits/habits";
import PopUpBase from "../popUpBase";
import Button from "../../button";

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
      user: localStorage.getItem("userId"),
    };
    createHabit(fullData);
    setNewHabit(!newHabit);
    handlePopUp();
  };

  const handlePopUp = () => {
    setNewHabit(!newHabit);
  };

  return (
    <PopUpBase title={"Novo Habito"} closePopUp={handlePopUp}>
      <form onSubmit={handleSubmit(handleHabit)}>
        <Input
          register={register}
          name="title"
          label="titulo"
          error={errors.title?.message}
        />
        <Input
          register={register}
          name="category"
          label="categoria"
          error={errors.category?.message}
        />
        <Input
          register={register}
          name="difficulty"
          label="dificuldade"
          error={errors.difficulty?.message}
        />
        <Input
          register={register}
          name="frequency"
          label="frequencia"
          error={errors.frequency?.message}
        />

        <Button type="submit">Criar</Button>
      </form>
    </PopUpBase>
  );
};
export default NewHabit;
