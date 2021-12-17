import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import Button from "../../button";
import Input from "../../input";
import PopUpBase from "../popUpBase";
import { GoalsContext } from "../../../providers/goal/goal";
import { ContainerUpdateGoal } from "./styles.js";

const UpdateGoals = ({ id, editGoals, setEditGoals }) => {
  const { deleteGoals, updateGoals } = useContext(GoalsContext);

  const schema = yup.object().shape({
    how_much_achieved: yup
      .number()
      .required("Escreva a porcentagem de progresso")
      .typeError("Digite a porcentagem do progresso")
      .min(0, "Progresso não pode ser negativo")
      .max(100, "Maximo deve ser 100/100"),

  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleEdit = (data) => {
    const payload =
      data.how_much_achieved === 100
        ? { how_much_achieved: data.how_much_achieved, achieved: true }
        : { how_much_achieved: data.how_much_achieved, achieved: false };

    updateGoals(id, payload);
    setEditGoals(!editGoals);
    closePopUp();
  };

  const handleDelete = () => {
    deleteGoals(id);
    setEditGoals(!editGoals);
  };

  const closePopUp = () => {
    setEditGoals(!editGoals);
  };

  return (
    <ContainerUpdateGoal>
      <PopUpBase title={"Atualizar Meta"} closePopUp={closePopUp}>
        <form onSubmit={handleSubmit(handleEdit)}>
          <Input
            register={register}
            name="how_much_achieved"
            label="Progresso:"
            error={errors.how_much_achieved?.message}
          />
          <div className="buttons_box">
            <Button type="submit" name="button--blue button__pop-up">
              Atualizar
            </Button>
            <Button
              onClick={() => handleDelete()}
              name="button--red button__pop-up"
            >
              Deletar
            </Button>
          </div>
        </form>
      </PopUpBase>
    </ContainerUpdateGoal>
  );
};

export default UpdateGoals;
