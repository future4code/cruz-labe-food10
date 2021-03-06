import React from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "../../Hooks/useForm";
import { api } from "../../Services/api";
import Logo from "../../Assets/Img/logo-rappi4@3x.png";
import {
  RenderContainer,
  LogoMain,
  FormContainer,
  Button,
  ButtonSignUp,
} from "./Style";
import InputComponent from "../../Components/Inputs/InputComponent";

const LoginPage = () => {
  const history = useHistory();
  const initForm = { email: "", password: "" };
  const [form, onChange] = useForm(initForm);

  const getAddress = (token) => {
    api.defaults.headers.common["auth"] = token;
    api
      .get("/profile/address")
      .then((response) => {
        localStorage.setItem("address", JSON.stringify(response.data.address));
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const loggingUser = (event) => {
    api
      .post("/login", form)
      .then((response) => {
        localStorage.setItem("user", JSON.stringify(response.data.user));
        localStorage.setItem("token", response.data.token);

        if (response.data.user.hasAddress) {
          getAddress(response.data.token);
          history.push("/");
        } else {
          history.push("/address_form");
        }
      })
      .catch((error) => {
        alert(
          "E-mail ou senha inválido, verifique os dados e tente novamente."
        );
        console.log(error.message);
      });

    event.preventDefault();
  };

  return (
    <RenderContainer>
      <LogoMain src={Logo} />
      <h4>Entrar</h4>
      <FormContainer onSubmit={loggingUser}>
        <InputComponent
          type="email"
          name="email"
          value={form.email}
          onChange={onChange}
          required
          label="E-mail"
          placeholder="email@email.com"
        />

        <InputComponent
          type="password"
          name="password"
          value={form.password}
          onChange={onChange}
          required
          label="Senha"
          placeholder="Mínimo 6 caracteres"
        />
        <Button>Entrar</Button>

        <ButtonSignUp onClick={() => history.push("/sign_up")}>
          <p>
            Não possui cadastro? <b>Clique aqui</b>
          </p>
        </ButtonSignUp>
      </FormContainer>
    </RenderContainer>
  );
};

export default LoginPage;
