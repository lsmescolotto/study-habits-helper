import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { HabitsContext } from "../../../providers/habits/habits";
import Input from "../../input";
import PopUpBase from "../popUpBase";

const HabitEditInfo = ({ closePopUp, id }) => {
  const { updateHabit, deleteHabit } = useContext(HabitsContext);
  const schema = yup.object().shape({
    how_much_achieved: yup
      .number()
      .required("Escreva a porcentagem de progresso"),
  });

  const {
    register,
    handleSubmit,
    formState: { error },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleEdit = (data) => {
    updateHabit(id, data);
  };

  return (
    <PopUpBase
      title={"Atualizar Habito"}
      children={popUpContent}
      closePopUp={closePopUp}
    >
      {" "}
      <form onSubmit={handleSubmit(handleEdit)}>
        <Input
          register={register}
          name={"how_much_achieved"}
          label={"progresso"}
          error={error.how_much_achieved?.message}
        ></Input>
        <div>
          <button type="submit">Atualizar</button>
          <button onClick={() => deleteHabit(id)}>Deletar</button>
        </div>
      </form>
    </PopUpBase>
  );
};
export default HabitEditInfo;
