import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import useAuthorization from "../../Hooks/useAuthetication";
import { useForm } from "../../Hooks/useForm";
import { api } from "../../Services/api";
import { RenderContainer, GoBack, FormContainer, Button } from "./Style";
import InputComponent from "../../Components/Inputs/InputComponent";
import Back from "../../Assets/Img/back.svg";

const AddressPage = () => {
  const history = useHistory();
  const [formDefault] = useState(JSON.parse(localStorage.getItem("address")));
  useAuthorization();
  const initForm = formDefault
    ? formDefault
    : {
        street: "",
        number: "",
        neighbourhood: "",
        city: "",
        state: "",
        complement: "",
      };
  const [form, onChange] = useForm(initForm);

  const addAdress = (event) => {
    localStorage.setItem("address", JSON.stringify(form));
    api.defaults.headers.common["auth"] = localStorage.getItem("token");
    api
      .put("/address", form)
      .then((response) => {
        localStorage.setItem("user", JSON.stringify(response.data.user));
        localStorage.setItem("token", response.data.token);
        history.push("/");
      })
      .catch((error) => {
        alert("Dados inválidos, verifique-os e tente novamente.");
        console.log(error.message);
      });

    event.preventDefault();
  };

  return (
    <RenderContainer>
      <GoBack src={Back} onClick={() => history.goBack()}/>
      <h4>Meu endereço</h4>
      <FormContainer onSubmit={addAdress}>
        <InputComponent
          type="text"
          name="street"
          value={form.street}
          onChange={onChange}
          required
          label="Logradouro"
          placeholder="Rua / Av."
        />
        <InputComponent
          type="number"
          name="number"
          value={form.number}
          onChange={onChange}
          required
          label="Número"
          placeholder="Número"
        />
        <InputComponent
          type="text"
          name="complement"
          value={form.complement}
          onChange={onChange}
          label="Complemento"
          placeholder="Apto. / Bloco"
        />
        <InputComponent
          type="text"
          name="neighbourhood"
          value={form.neighbourhood}
          onChange={onChange}
          required
          label="Bairro"
          placeholder="Bairro"
        />
        <InputComponent
          type="text"
          name="city"
          value={form.city}
          onChange={onChange}
          required
          label="Cidade"
          placeholder="Cidade"
        />
        <InputComponent
          type="text"
          name="state"
          value={form.state}
          onChange={onChange}
          required
          label="Estado"
          placeholder="Estado"
        />
        <Button>Salvar</Button>
      </FormContainer>
    </RenderContainer>
  );
};

export default AddressPage;
