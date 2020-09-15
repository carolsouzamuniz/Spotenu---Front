import React from 'react';
import { ItensContainer, ItensBandContainer, TitleContainer, UserContainer } from '../UserPage/style';
import { ItensBandList } from './ItensBandList';
import { MenuBand } from './MenuBand';
import { RegisterMusic } from './RegisterMusic';

export const BandPage = () => {
   
    return (
        <UserContainer>
      <MenuBand />

      <ItensContainer>
        <TitleContainer> 
          {/* como passar o títilo do menu por prosp? */}
          <h1>Minhas músicas</h1> 
        </TitleContainer>
        <ItensBandContainer>
          <ItensBandList />
          <ItensBandList />
          <ItensBandList />
        </ItensBandContainer>
        <RegisterMusic/>
      </ItensContainer>
    </UserContainer>
    );
  };
  