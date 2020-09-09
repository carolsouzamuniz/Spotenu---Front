import React from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { PageTitle } from "../../PageTitle";
import { TextField } from "@material-ui/core";
import { useForm } from "../../../hooks/useForm";
import { ButtonWrapper } from "../../Styles/Button";
import { FormWrapper } from "../../Styles/Form";

export const BandSignupPage = () => {
  const { form, onChange, resetForm } = useForm({
    name: "",
    email: "",
    nickname: "",
    description: "",
    password: "",
  });

  //const { name, email, nickname, description, password } = form;

  const onChangeInput = (event) => {
    const { name, value } = event.target;
    onChange(name, value);
  };

  const history = useHistory();

  const onSubmitInput = (event) => {
    event.preventDefault();

    const body = {
      name: form.email,
      email: form.email,
      nickname: form.nickname,
      description: form.description,
      password: form.password,
    };

    axios
      .post("http://localhost:3003/band/signup", body)
      .then((response) => {
        window.localStorage.setItem("token", response.data.token);
        alert(
          "Band successfully registered. Waiting for approval from an administrator"
        );
        history.push("/user");
        resetForm();
      })
      .catch((error) => {
        console.log(error.response.data);
        window.alert("It was not possible to register. Try again later");
      });
  };

  return (
    <div>
      <PageTitle title={"Cadastro"} />
      <FormWrapper onSubmit={onSubmitInput}>
        <TextField
          label="Nome"
          variant="outlined"
          type="text"
          name="name"
          value={form.name}
          onChange={onChangeInput}
          required
        />
        <TextField
          label="E-mail"
          variant="outlined"
          type="email"
          name="email"
          value={form.email}
          onChange={onChangeInput}
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
          required
        />
        <TextField
          label="Nickname"
          variant="outlined"
          type="text"
          name="nickname"
          value={form.nickname}
          onChange={onChangeInput}
          required
        />
        <TextField
          label="Descrição"
          variant="outlined"
          type="text"
          name="description"
          value={form.description}
          onChange={onChangeInput}
          required
        />
        <TextField
          label="Senha"
          variant="outlined"
          type="password"
          name="password"
          value={form.password}
          onChange={onChangeInput}
          pattern="[A-z0-9,\W]{6,}"
          required
        />
        
        {/* <input type="submit" value="Cadastrar" /> */}

        <ButtonWrapper>Cadastrar</ButtonWrapper>
      </FormWrapper>
    </div>
  );
};
