import React, { useState, useEffect } from "react";
import axios from "axios";
import { useProtectedPage } from "../../../hooks/useProtectedPage";
import { PageTitle } from "../../PageTitle";
import { BandInfo } from "./BandInfo";
import { AdminSignupPage } from "../../SignupPages/AdminSignupPage";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { LinkContainer } from "./style";

export const AdminPage = () => {
  const [bands, setBands] = useState([]);

  useProtectedPage();

  const getBandsList = () => {
    axios
      .get("http://localhost:3003/band/view-bands", {
        headers: {
          authorization: window.localStorage.getItem("token"),
        },
      })
      .then((response) => {
        setBands(response.data);
      });
  };

  useEffect(() => {
    getBandsList();
  }, []);

  const approveBand = async (id) => {
   await axios.post(
      "http://localhost:3003/band/band-approval",
      { id },
      {
        headers: {
          authorization: window.localStorage.getItem("token"),
        },
      }
    )
    getBandsList();
  };

 
  return (
    <div>
      <PageTitle title={"Aprovação de bandas"} />
      {bands ? (
        <BandInfo bands={bands} approveBand={approveBand} />
      ) : (
        <div>Carregando...</div>
      )}
      
        <Link to={"/signup-admin"}>Cadastrar novo Administrador</Link>
    
    </div>
  );
};
