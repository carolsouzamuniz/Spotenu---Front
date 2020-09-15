import React from'react';
import { MenuContainer } from '../UserPage/style';

export const MenuBand = () => {

    return<MenuContainer>
        <p><a href="#">Minhas músicas</a></p>
        <p><a href="/band/register-music">Cadastrar música</a></p>
    </MenuContainer>

}