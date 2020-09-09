import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.1);
  padding: 4px 0;
  text-align: right;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;

  li {
    display: inline-block;
    margin: 0 12px;
  }

  a {
    text-decoration: none;
    color: #fd7d02;
  }
`;

export const Header = () => {
  return (
    <HeaderContainer>
      <ul>
        <li>
          <a href="/signup-user">
            <strong>Cadastre-se</strong>
          </a>
        </li>
        <li>
          <a href="/signup-band">Tem uma banda?</a>
        </li>
        <li>
          <a href="/login-user">Login</a>
        </li>
      </ul>
    </HeaderContainer>
  );
};
