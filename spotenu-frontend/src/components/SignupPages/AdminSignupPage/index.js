import React from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { PageTitle } from "../../PageTitle";
import { TextField } from "@material-ui/core";
import { useForm } from "../../../hooks/useForm";
import { ButtonWrapper } from "../../Styles/Button";
import { FormWrapper } from "../../Styles/Form";

export const AdminSignupPage = () => {
  const { form, onChangeInput } = useForm({
    name: "",
    email: "",
    nickname: "",
    password: "",
  });

  const { name, email, nickname, password } = form;

  const onChangeInputValues = (event) => {
    const { name, value } = event.target;
    onChangeInput(name, value);
  };

  const history = useHistory();

  const onSubmitInput = (event) => {
    event.preventDefault();

    const body = {
      name: name,
      email: email,
      nickname: nickname,
      password: password,
    };

    axios
      .post("http://localhost:3003/user/signupUSER", body)
      .then((response) => {
        window.localStorage.setItem("token", response.data.token);
        window.localStorage.setItem("userType", response.data.type);
        alert("Your registration was successful");
        history.push("/admin"); //voltar para a home já lodago
      })
      .catch((error) => {
        console.log(error.response.data);
        window.alert("It was not possible to register. Try again later");
      });
  };

  return <div>
      <PageTitle title={"Cadastro-admin"} />
      <FormWrapper onSubmit={onSubmitInput}>
        
        <TextField
          label="Nome"
          variant="outlined"
          type="text"
          name="name"
          value={form.name}
          onChange={onChangeInputValues}
          required
        />
        <TextField
          label="E-mail"
          variant="outlined"
          type="email"
          name="email"
          value={form.email}
          onChange={onChangeInputValues}
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
          required
        />
        <TextField
          label="Nickname"
          variant="outlined"
          type="text"
          name="nickname"
          value={form.nickname}
          onChange={onChangeInputValues}
          required
        />
        <TextField
          label="Senha"
          variant="outlined"
          type="password"
          name="password"
          value={form.password}
          onChange={onChangeInputValues}
          pattern="[A-z0-9,\W]{10,}"
          helperText="No mínimo 10 caracteres"
          required
        />
        <ButtonWrapper type="submit" value="Cadastrar" />
      </FormWrapper>
  </div>
}


