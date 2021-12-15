import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import Button from "../../button";
import Input from "../../input";
import PopUpBase from "../popUpBase";
import { GoalsContext } from "../../../providers/goal/goal";

const UpdateGoals = ({ id, editGoals, setEditGoals }) => {
  const { deleteGoals, updateGoals } = useContext(GoalsContext);

  const schema = yup.object().shape({
    how_much_achieved: yup
      .number()
      .required("Escreva a porcentagem de progresso")
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
    <PopUpBase title={"Atualizar Meta"} closePopUp={closePopUp}>
      <form onSubmit={handleSubmit(handleEdit)}>
        <Input
          register={register}
          name="how_much_achieved"
          label="progresso"
          error={errors.how_much_achieved?.message}
        />
        <div>
          <Button type="submit">Atualizar</Button>
          <Button onClick={() => handleDelete()}>Deletar</Button>
        </div>
      </form>
    </PopUpBase>
  );
};
export default UpdateGoals;
