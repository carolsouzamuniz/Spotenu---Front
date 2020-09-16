import React from "react";
import { ItensList } from "../ItensList";
import {
  UserContainer,
  ItensContainer,
  ItensElements,
  MenuContainer,
  TitleContainer
} from "../style";

export const Menu5 = () => {
  const menu1 = "Em alta"
  const menu2 = "Lançamento"
  const menu3 = "Rock"
  const menu4 = "POP"
  const menu5 = "Sertanejo"
  const menu6 = "Forró"
  
  return (
    <UserContainer>
      <MenuContainer>
        <p><a href='/user'>{menu1}</a></p>
        <p><a href='/user/menu2'>{menu2}</a></p>
        <p><a href='/user/menu3'>{menu3}</a></p>
        <p><a href='/user/menu4'>{menu4}</a></p>
        <p><a href='#'><strong>{menu5}</strong></a></p>
        <p><a href='/user/menu6'>{menu6}</a></p>
      </MenuContainer>
      <ItensContainer>
      <TitleContainer>
        <h1>{menu5}</h1>  
      </TitleContainer>
        <ItensElements>
          <ItensList />
        </ItensElements>
      </ItensContainer>
    </UserContainer>
  );
};
