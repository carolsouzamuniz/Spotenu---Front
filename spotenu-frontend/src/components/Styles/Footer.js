import React from "react";
import styled from "styled-components";
import youtube from "../../img/youtube.png";
import facebook from "../../img/facebook.png";
import instagram from "../../img/instagram.png";

const FooterContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.3);
  color: #fd7d02;
  padding: 4px 0;
  text-align: left;
  position: fixed;
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
  img {
    max-width: 50px;
    padding: 0 12px;
    margin-left: 12px;
    :hover {
      cursor: pointer;
    }
  }
`;

export const Footer = () => {
  return (
    <FooterContainer>
      <a href={"https://www.youtube.com/?hl=pt&gl=BR"}>
        <img src={youtube} alt="Logo YouTube" />
      </a>

      <a href={"https://pt-br.facebook.com/"}>
        <img src={facebook} alt="Logo Facebook" />
      </a>

      <a href={"https://www.instagram.com/?hl=pt-br"}>
        <img src={instagram} alt="Logo Instagram" />
      </a>
    </FooterContainer>
  );
};
