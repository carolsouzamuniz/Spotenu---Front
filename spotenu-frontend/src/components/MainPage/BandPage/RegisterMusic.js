import React from "react";
import { ButtonWrapper } from "../../Styles/Button";
import { FormWrapper } from "../../Styles/Form";
import { TextField } from "@material-ui/core";

export const RegisterMusic = () => {

  return (
    <FormWrapper>
      <TextField label="Nome" type="text" name="name" required />
      <TextField label="Álbum" type="text" name="album" required />
      <ButtonWrapper type="submit" value="Cadastrar"/>
    </FormWrapper>
  );
};
