import React from "react";
import { useHistory, Link } from "react-router-dom";
import axios from "axios";
import { PageTitle } from "../../PageTitle";
import { useForm } from "../../../hooks/useForm";
import { TextField } from "@material-ui/core";
import { ButtonWrapper } from "../../Styles/Button";
import { FormWrapper } from "../../Styles/Form";

export const UserAndBandLoginPage = () => {
  const { form, onChangeInput } = useForm({
    emailOrNickname: "",
    password: "",
  });

  const { emailOrNickname, password } = form;

  const onChangeInputValues = (event) => {
    const { name, value } = event.target;
    onChangeInput(name, value);
  };

  const history = useHistory();

  const onSubmitLogin = (event) => {
    event.preventDefault()
    const body = {
      emailOrNickname: form.emailOrNickname,
      password: form.password,
    };
    axios
      .post("http://localhost:3003/user/login", body)
      .then((response) => {
        window.localStorage.setItem("token", response.data.token);
        history.push("/user"); //página do ususario logado
      })
      .catch((error) => {
        console.log(error.response.data);
        window.alert("Unable to login");
      });
  };

  return (
    <div>
      <PageTitle title={"Login"} />
      <FormWrapper onSubmit={onSubmitLogin}>
        <TextField
          label="E-mail ou Nickname"
          type="text"
          name="emailOrNickname"
          value={form.emailOrNickname}
          onChange={onChangeInputValues}
          required
        />
        <TextField
          label="Senha"
          type="password"
          name="password"
          value={form.password}
          onChange={onChangeInputValues}
          required
        />
        <ButtonWrapper type="submit" value="Entrar"/>
        <Link to={"/login-admin"}>Logar como Administrador</Link>
      </FormWrapper>
    </div>
  );
};
