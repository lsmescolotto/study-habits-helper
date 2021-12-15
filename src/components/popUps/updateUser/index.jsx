import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import toast from "react-hot-toast";
import PopUpBase from "../popUpBase";
import Input from "../../input";
import Button from "../../button";
import api from "../../../services/api";
import { Container } from "./styles";

const UpdateUserPopUp = ({ closePopUp }) => {
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
    const userInfo = JSON.parse(localStorage.getItem("@Habits:user"));

    if (payload.username === "") {
      payload.username = userInfo.username;
    } else if (payload.email === "") {
      payload.email = userInfo.email;
    }

    api
      .patch(`/users/${JSON.parse(localStorage.getItem("userId"))}/`, payload, {
        headers: {
          Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
        },
      })
      .then((response) => {
        closePopUp();
      })
      .catch((err) => {
        toast.error(
          "Não foi possível atualizar. Username ou senha já cadastrados."
        );
      });
  };

  return (
    <Container>
      <PopUpBase title="Atualizar usuário" closePopUp={closePopUp}>
        <form onSubmit={handleSubmit(onSubmitFunction)}>
          <Input
            label="Username:"
            register={register}
            name="username"
            error={errors.username?.message}
          />
          <Input
            label="Email:"
            name="email"
            error={errors.email?.message}
            register={register}
          />
          <Button type="submit" name="button--blue button__pop-up">
            Atualizar
          </Button>
        </form>
      </PopUpBase>
    </Container>
  );
};
export default UpdateUserPopUp;
