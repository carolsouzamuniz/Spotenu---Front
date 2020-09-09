import React from  'react';
import styled from 'styled-components';
import fundo from '../../img/fundo.jpeg';

const MainContainer = styled.div`
        background-image: url(${fundo});
        background-color: blue;
        height: 100vh;

    `

export const Main = () => {
    
    return <div>
        <MainContainer/>
    </div>
}