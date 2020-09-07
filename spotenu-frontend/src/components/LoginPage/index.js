import React from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { PageTitle } from "../PageTitle";
import { useForm } from "../../hooks/useForm";

export const LoginPage = () => {
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
        window.localStorage.getItem("token", response.data.token);
        history.push("/home"); //página da home já logado
      })
      .catch((error) => {
        console.log(error.response.data);
        window.alert("Unable to login");
      });

    return (
      <div>
        <PageTitle title={"Login"} />
        <form onSubmit={onSubmitLogin}>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={onChangeInput}
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
              required
            />
          </label>
          <input type="submit" value="Entrar" />
        </form>
      </div>
    );
  };
};
