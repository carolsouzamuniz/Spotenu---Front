import React from "react";
import { Header } from "./components/Styles/Header";
import { Footer } from "./components/Styles/Footer";
import styled from "styled-components";
import Routes from './routes';
import fundo from './img/fundo.jpeg'

export const AppWrapper = styled.main`
  margin: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-size: 100%;
  background-image: url(${fundo});
  background-attachment: fixed;
  background-repeat: no-repeat;
`;

function App() {
  return (
    <AppWrapper>
      <Header/>
      <Routes/>
      <Footer/>
    </AppWrapper>
  );
}

export default App;
