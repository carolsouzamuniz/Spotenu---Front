import React from "react";
import styled from "styled-components";
import logo from "../../img/logo.png";
import { useHistory } from "react-router-dom";

const HeaderContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  background-color: rgba(0, 0, 0, 0.3);
  padding: 4px 0;
  text-align: right;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 12vh;

  li {
    display: inline-block;
    margin: 0 12px;
  }

  a {
    text-decoration: none;
    color: white;
    font-size: 120%;
    margin: 0;
    :hover {
      color: #fd7d02;
    }
    p {
      font-size: 24px;
      margin: 0;
      padding: 0;
      color: #fd7d02;
    }
  }
`;
const LogoContainer = styled.div`
  grid-column: 1/2;
  left: 0px;
  padding: 8px;
  max-width: 250px;
  margin-left: 30px;

  img {
    max-width: 250px;
    align-content: center;
    align-self: start;
    :hover {
      cursor: pointer;
    }
  }
`;
const MenuContainer = styled.div`
  grid-column: 2/3;
`;

export const Header = () => {
  const history = useHistory();
  const onClickGoToHome = () => {
    history.push("/home");
  };

  return (
    <HeaderContainer>
      <LogoContainer>
        <img
          onClick={onClickGoToHome}
          src={logo}
          alt="Logo Spotenu. Reinventando a música."
        />
      </LogoContainer>
      <MenuContainer>
        <ul>
          <li>
            <a href="/signup-user">
              <strong>
                <p>Cadastre-se</p>
              </strong>
            </a>
          </li>
          <li>
            <a href="/signup-band">Quer divulgar sua música?</a>
          </li>
          <li>
            <a href="/login">Login</a>
          </li>
        </ul>
      </MenuContainer>
    </HeaderContainer>
  );
};
