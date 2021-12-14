import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import api from "../../../services/api";
import Input from "../../input";
import PopUpBase from "../popUpBase";

const UpdateGoals = ({ closePopUp, id }) => {
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

  const deleteGoals = (id) => {
    api.delete(`/goals/${id}/`, {
      headers: {
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
      },
    });
  };

  return (
    <PopUpBase
      title={"Atualizar Meta"}
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
          <button onClick={() => deleteGoals(id)}>Deletar</button>
        </div>
      </form>
    </PopUpBase>
  );
};
export default UpdateGoals;
