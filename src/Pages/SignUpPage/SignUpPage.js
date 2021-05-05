import React from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "../../Hooks/useForm";
import { api } from "../../Services/api";
import Logo from "../../Assets/Img/logo-rappi4@3x.png";
import Back from "../../Assets/Img/back.svg";
import {
  RenderContainer,
  GoBack,
  LogoMain,
  FormContainer,
  Button,
} from "./Style";
import InputComponent from "../../Components/Inputs/InputComponent";

const SingUpPage = () => {
  const history = useHistory();
  const initForm = {
    email: "",
    password: "",
    confirmPassword: "",
    cpf: "",
    usuario: "",
  };
  const [form, onChange] = useForm(initForm);

  const handleChange = (event) => {
    const { name, value } = event.target;
    onChange(name, value);
  };

  const signingUpUser = (event) => {
    if (form.password !== form.confirmPassword) {
      alert("As senhas não são iguais. Tente novamente.");
    } else {
      const body = {
        name: form.usuario,
        email: form.email,
        cpf: form.cpf,
        password: form.password,
      };
      api
        .post("/signup", body)
        .then((response) => {
          localStorage.setItem("user", JSON.stringify(response.data.user));
          localStorage.setItem("token", response.data.token);

          history.push("/address_form");
        })
        .catch((error) => {
          alert("Dados inválidos, verifique-os e tente novamente.");
          console.log(error.message);
        });
    }
    event.preventDefault();
  };
  return (
    <RenderContainer>
      <GoBack src={Back} onClick={() => history.push("/login")}/>
      <LogoMain src={Logo} />
      <h4>Cadastrar</h4>
      <FormContainer onSubmit={signingUpUser}>
        <InputComponent
          type="text"
          name="usuario"
          value={form.usuario}
          onChange={handleChange}
          required
          label="Nome Completo"
          pattern="\b[A-Za-zÀ-ú][A-Za-zÀ-ú]+,?\s[A-Za-zÀ-ú][A-Za-zÀ-ú]{1,19}\b"
          placeholder="Nome e sobrenome"
        />
        <InputComponent
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
          label="E-mail"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
          placeholder="email@email.com"
        />
        <InputComponent
          type="number"
          name="cpf"
          value={form.cpf}
          onChange={handleChange}
          required
          label="CPF"
          pattern="[0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}"
          placeholder="000.000.000-00"
        />
        <InputComponent
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          required
          label="Senha"
          pattern="^.{6,}$"
          placeholder="Mínimo 6 caracteres"
        />
        <InputComponent
          type="password"
          name="confirmPassword"
          value={form.confirmPassword}
          onChange={handleChange}
          required
          label="Confirmar"
          pattern="^.{6,}$"
          placeholder="Confirme a senha anterior"
        />
        <Button>Criar</Button>
      </FormContainer>
    </RenderContainer>
  );
};

export default SingUpPage;
