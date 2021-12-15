import { useContext } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import Input from "../../components/input";
import Button from "../../components/button";
import Header from "../../components/header";
import Footer from "../../components/footer";
import { UserContext } from "../../providers/user/user";

import {
  Container,
  Content,
  Desktop,
  Image,
  LoginRedirectBox,
  SignUpBox,
} from "./styles";
import SignUpImage from "../../assets/img/signUpImg.gif";

const Signup = () => {
  const { userRegister } = useContext(UserContext);

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

  const submitFunction = ({ username, email, password }) => {
    const user = { username, email, password };

    userRegister(user);
  };

  return (
    <Container>
      <Header />
      <Desktop>
        <Content>
          <h2> Cadastro </h2>

          <SignUpBox>
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
              <Button type="submit" name="button--blue">
                Cadastrar
              </Button>
            </form>
          </SignUpBox>

          <LoginRedirectBox>
            <span>Já possui conta? </span>
            <Link to="/login">Ir para login</Link>
          </LoginRedirectBox>
        </Content>
        <Image src={SignUpImage} alt="SignUp" />
      </Desktop>
      <Footer />
    </Container>
  );
};

export default Signup;
