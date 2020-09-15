import React from "react";
import { ItensList } from "./ItensList";
import { MenuUser} from "./MenuUser";

import {
  UserContainer,
  ItensContainer,
  ItensElements,
  TitleContainer
} from "./style";

export const UserPage = () => {
  return (
    <UserContainer>
      <MenuUser/>

      <ItensContainer>
        <TitleContainer> 
          {/* como passar o títilo do menu por prosp? */}
          <h1>Em alta</h1> 
        </TitleContainer>
        <ItensElements>
          <ItensList />
          <ItensList />
          <ItensList />
          <ItensList />
          <ItensList />
          <ItensList />
        </ItensElements>
      </ItensContainer>
    </UserContainer>
  );
};
