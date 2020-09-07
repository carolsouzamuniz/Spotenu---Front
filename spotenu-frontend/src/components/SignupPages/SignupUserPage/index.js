import React from "react";
import axios from "axios";
import { useForm } from "../../../hooks/useProtectedPage";
import { useHistory } from "react-router-dom";

import styled from "styled-components";
import { PageTitle } from "../../PageTitle";

const SignupPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  label {
    display: flex;
    padding-bottom: 16px;
  }
`;

export const SignupUserPage = () => {
  const { form, onChange, resetForm } = useForm({
    name: "",
    email: "",
    nickname: "",
    password: "",
  });

  const { name, email, nickname, password } = form;

  const onChangeInput = (event) => {
    const { name, value } = event.target;

    onChange(name, value);
  };

  const history = useHistory();

  const onSubmitInput = (event) => {
    event.preventDefault();

    const body = {
      name: form.name,
      email: form.email,
      nickname: form.nickname,
      password: form.password,
    };

    axios
      .post("http://localhost:3003/user/signupUSER", body)
      .then((response) => {
        window.localStorage.setItem("token", response.data.token);
        alert(
          "Band successfully registered. Waiting for approval from an administrator"
        );
        history.push("/home"); //voltar para a home já lodago
        resetForm();
      })
      .catch((error) => {
        console.log(error.response.data);
        window.alert("It was not possible to register. Try again later");
      });
  };

  const history = useHistory();

  return (
    <SignupPageWrapper>
      <PageTitle title={'Cadastro'}/>
      <form onSubmit={onSubmitInput}>
        <label>
          Nome:
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={onChangeInput}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={onChangeInput}
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            required
          />
        </label>
        <label>
          Nickname:
          <input
            type="text"
            name="nickname"
            value={form.nickname}
            onChange={onChangeInput}
            required
          />
        </label>
        <label>
          Senha:
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={onChangeInput}
            pattern="[A-z0-9,\W]{6,}"
            required
          />
        </label>
        <input type="submit" value="Cadastrar" />
      </form>
    </SignupPageWrapper>
  );
};
