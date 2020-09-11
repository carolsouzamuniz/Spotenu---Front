import React from "react";
import { ItensList } from "./ItensList";
import { MenuUser } from "./MenuUser";
import {
  UserContainer,
  ItensContainer,
  MenuContainer,
  ItensElements,
} from "./style";

export const UserPage = () => {
  return (
    <UserContainer>
      <MenuContainer>
        <MenuUser />
      </MenuContainer>

      <ItensContainer>
        <ItensElements>
          <ItensList />
          <ItensList />
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
