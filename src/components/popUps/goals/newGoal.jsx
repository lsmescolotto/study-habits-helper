import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "../../input";
import PopUpBase from "../popUpBase";
import Button from "../../button";
import { GoalsContext } from "../../../providers/goal/goal";
import { useContext } from "react";

const NewGoal = ({ newGoal, setNewGoal }) => {
  const { createGoals } = useContext(GoalsContext);

  const groupId = JSON.parse(localStorage.getItem("GroupID")) || "";

  const schema = yup.object().shape({
    title: yup.string().required("Campo obrigatorio"),
    difficulty: yup.string().required("Campo obrigatorio"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleGoal = (data) => {
    const fullData = {
      ...data,
      achieved: false,
      how_much_achieved: 0,
      group: groupId,
    };
    createGoals(fullData);
    setNewGoal(!newGoal);
  };

  const ClosePopUp = () => {
    setNewGoal(!newGoal);
  };

  return (
    <PopUpBase title={"Nova Meta"} closePopUp={ClosePopUp}>
      <form onSubmit={handleSubmit(handleGoal)}>
        <Input
          register={register}
          name="title"
          label="titulo"
          error={errors.title?.message}
        />

        <Input
          register={register}
          name="difficulty"
          label="dificuldade"
          error={errors.difficulty?.message}
        />

        <Button type="submit" name="button--blue button__pop-up">
          Criar
        </Button>
      </form>
    </PopUpBase>
  );
};

export default NewGoal;
