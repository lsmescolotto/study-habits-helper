import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import toast from "react-hot-toast";

import PopUpBase from "../popUpBase";
import Input from "../../input";
import Button from "../../button";
import api from "../../../services/api";

const UpdateUserPopUp = ({ closePopUp }) => {
  const locale = JSON.parse(localStorage.getItem("@Habits:user")) || [];

  const schema = yup.object().shape({
    username: yup.string(),
    email: yup.string().email("Email inválido"),
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmitFunction = (payload) => {
    const user = {
      username: payload.username ? payload.username : locale.username,
      email: payload.email ? payload.email : locale.email,
    };

    api
      .patch(`/users/${JSON.parse(localStorage.getItem("userId"))}/`, user, {
        headers: {
          Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
        },
      })
      .then((_) => {
        closePopUp();
      })
      .catch((err) => {
        console.log(err);
        toast.error(
          "Não foi possível atualizar. Username ou senha já cadastrados."
        );
      });
  };

  return (
    <PopUpBase title="Atualizar usuário" closePopUp={closePopUp}>
      <form onSubmit={handleSubmit(onSubmitFunction)}>
        <Input
          label="Username"
          register={register}
          name="username"
          error={errors.username?.message}
        />
        <Input
          label="Email"
          name="email"
          error={errors.email?.message}
          register={register}
        />
        <Button type="submit">Atualizar</Button>
      </form>
    </PopUpBase>
  );
};

export default UpdateUserPopUp;
