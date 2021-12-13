import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import toast from "react-hot-toast";

import PopUpBase from "../popUpBase";
import Input from "../../input";
import Button from "../../button";
import api from "../../../services/api";

const UpdateUserPopUp = () => {
  const schema = yup.object().shape({
    username: yup.string(),
    email: yup.string().email("Email inválido"),
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmitFunction = () => {
    api
      .patch(`/users/${JSON.parse(localStorage.getItem("userId"))}/`, {
        headers: {
          Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
        },
      })
      .then((response) => console.log(response))
      .catch((err) =>
        toast.error(
          "Não foi possível atualizar. Username ou senha já cadastrados."
        )
      );
  };
  return (
    <PopUpBase title="Atualizar usuário">
      <form onSubmit={handleSubmit(onSubmitFunction)}>
        <Input
          label="Username:"
          register={register}
          name="username"
          error={errors.username?.message}
        />
        <Input label="Email:" name="email" error={errors.email?.message} />
        <Button type="submit">Atualizar</Button>
      </form>
    </PopUpBase>
  );
};

export default UpdateUserPopUp;
