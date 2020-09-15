import React, { useState, useEffect } from "react";
import axios from "axios";
import { useProtectedPage } from "../../../hooks/useProtectedPage";
import { PageTitle } from "../../PageTitle";
import { BandInfo } from "./BandInfo";

export const AdminPage = () => {
  const [bands, setBands] = useState([]);

  useProtectedPage();

  const getBandsList = () => {
    axios
      .get("http://localhost:3003/band/view-bands", {
        headers: {
          authenticator: window.localStorage.getItem("token"),
        },
      })
      .then((response) => {
        setBands(response.data);
      });
  };

  const unapprovedBands = []

  const getUnapprovedBands = () => {
    
    bands.filter((band)=> {
        if(band.isApproved===0){
             unapprovedBands.push(band)
        }
        return unapprovedBands
    })
    return unapprovedBands

  }

  useEffect(() => {
    getUnapprovedBands();
  }, []);

  
  const approveBand = (id) => {
    axios.post(
      "http://localhost:3003/band/band-approval",
      { id },
      {
        headers: {
          authenticator: window.localStorage.getItem("token"),
        },
      }
    );
    getBandsList();
  };

  return (
    <div>
      <PageTitle title={"Aprovação de bandas"} />
      {unapprovedBands ? (
        <BandInfo unapprovedBands={unapprovedBands} approveBand={approveBand} />
      ) : (
        <div>Carregando...</div>
      )}
    </div>
  );
};
