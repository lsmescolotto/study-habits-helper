import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { HabitsContext } from "../../../providers/habits/habits";
import { ButtonBox } from "./styles";
import Button from "../../button";
import Input from "../../input";
import PopUpBase from "../popUpBase";

const HabitEditInfo = ({ setEditHabits, editHabits, id }) => {
  const { updateHabit, deleteHabit } = useContext(HabitsContext);

  const OpClEdit = () => {
    setEditHabits(!editHabits);
  };

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
    updateHabit(id, data);
    setEditHabits(!editHabits);
  };

  const deleteHabitHandle = (id) => {
    deleteHabit(id);
    setEditHabits(!editHabits);
  };

  return (
    <PopUpBase title={"Atualizar Habito"} closePopUp={OpClEdit}>
      <form onSubmit={handleSubmit(handleEdit)}>
        <Input
          register={register}
          name="how_much_achieved"
          label="progresso"
          erro={errors.how_much_achieved?.message}
        />
        <ButtonBox>
          <Button type="submit" name="button--blue button__pop-up">
            Atualizar
          </Button>
          <Button
            onClick={() => deleteHabitHandle(id)}
            name="button--red button__pop-up"
          >
            Deletar
          </Button>
        </ButtonBox>
      </form>
    </PopUpBase>
  );
};
export default HabitEditInfo;
