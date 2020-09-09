import React from "react";
import styled from "styled-components";

const FooterContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.1);
  color: #fd7d02;
  padding: 4px 0;
  text-align: left;
  position: absolute;
  bottom: 0;
  width: 100%;
  li {
    display: inline-block;
    margin: 0 40px;
  }

  a {
    text-decoration: none;
    color: #fd7d02;
    font-size: 130%;
  }
`;

export const Footer = () => {
  return (
    <FooterContainer>
      <ul>
        <li>rodapé</li>
        <li>rodapé</li>
        <li>rodapé</li>
      </ul>
    </FooterContainer>
  );
};
