import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import toast from "react-hot-toast";

import api from "../../services/api";
import Input from "../../components/input";
import Button from "../../components/button";
import Header from "../../components/header";
import Footer from "../../components/footer";

const Signup = () => {
  const schema = yup.object().shape({
    username: yup.string().required("Campo obrigatório"),
    email: yup.string().required("Campo obrigatório").email("Email inválido"),
    password: yup
      .string()
      .required("Campo obrigatório")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/,
        "A senha deve ter pelo menos: 6 dígitos, um número, uma letra maiúscula e um caracter especial"
      ),
    passwordConfirm: yup
      .string()
      .oneOf([yup.ref("password")], "Senhas diferentes")
      .required("Campo obrigatório"),
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const history = useHistory();

  const submitFunction = ({ username, email, password }) => {
    const user = { username, email, password };

    api
      .post("/users/", user)
      .then((_) => {
        toast.success("Conta criada com sucesso. Agora é só fazer o login.");
        return history.push("/login");
      })
      .catch((err) => toast.error("Erro ao criar a conta. Tente outro email."));
  };

  return (
    <>
      <Header />
      <main>
        <h2> Cadastro </h2>
        <form onSubmit={handleSubmit(submitFunction)}>
          <Input
            placeholder="username"
            name="username"
            label="Username"
            register={register}
            error={errors.username?.message}
          />
          <Input
            placeholder="email"
            name="email"
            label="Email"
            register={register}
            error={errors.email?.message}
          />
          <Input
            type="password"
            placeholder="senha"
            name="password"
            label="Senha"
            register={register}
            error={errors.password?.message}
          />
          <Input
            type="password"
            placeholder="confirmar senha"
            name="passwordConfirm"
            label="Confirmação de senha"
            register={register}
            error={errors.passwordConfirm?.message}
          />
          <Button type="submit"> Cadastrar </Button>
        </form>
        <div>
          <span>Já possui conta? </span>
          <Link to="/login">Ir para login</Link>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Signup;
