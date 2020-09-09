import React from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { PageTitle } from "../../PageTitle";
import { useForm } from "../../../hooks/useForm";
import { TextField } from "@material-ui/core";

export const AdminLoginPage = () => {
  const history = useHistory();

  const { form, onChangeInput } = useForm({
    email: "",
    nickname: "",
    password: "",
  });

  const onSubmitLogin = (event) => {
    event.prefentDefault();
    const body = {
      email: form.email,
      nickname: form.nickname,
      password: form.password,
    };
    axios
      .post("http://localhost:3003/user/login", body)
      .then((response) => {
        window.localStorage.setItem("token", response.data.token);
        history.push("/admin"); //página do admin logado
      })
      .catch((error) => {
        console.log(error.response.data);
        window.alert("Unable to login");
      });

    return (
      <div>
        <PageTitle title={"Login"} />
        <form onSubmit={onSubmitLogin}>
          <TextField
            label="E-mail"
            type="email"
            name="email"
            value={form.email}
            onChange={onChangeInput}
            required
          />
          <TextField
            label="Nickname"
            type="text"
            name="nickname"
            value={form.nickname}
            onChange={onChangeInput}
            required
          />
          <TextField
            label="Senha"
            type="password"
            name="password"
            value={form.password}
            onChange={onChangeInput}
            required
          />
          <input type="submit" value="Entrar" />
        </form>
      </div>
    );
  };
};