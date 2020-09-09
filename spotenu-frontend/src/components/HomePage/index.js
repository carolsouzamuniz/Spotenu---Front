import React from "react";
import { PageTitle } from "../PageTitle"; 
import { MainContainer, MainImage } from './style';

export const HomePage = () => {
  return <MainContainer>
      <MainImage/>
      <PageTitle title={"Home"} />
    </MainContainer>
};

