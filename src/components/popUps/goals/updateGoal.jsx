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
      .required("Escreva a porcentagem de progresso"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleEdit = (data) => {
    updateGoals(id, data);
    setEditGoals(!editGoals);
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
