import styled from 'styled-components';

export const ButtonWrapper = styled.input`
  width: 100%;
  height: 48px;
  border: none;
  border-radius: 5px;
  background-color:#fd7d02;
  text-transform: uppercase;
  font-size: 16px;
  line-height: normal;
  text-align: center;
  padding: 0;
  &:active{
    font-size: small;
    box-shadow: 0 0 0 0.1rem rgba(0,123,255,.5)
  };
  &:focus{
    outline: none;
  }
`;
export const ButtonAdminWrapper = styled.link`
  width: 100%;
  height: 48px;
  border: none;
  border-radius: 5px;
  background-color:#F8B14B;
  font-size: 12px;
  line-height: normal;
  text-align: center;
  padding: 0;
  &:active{
    font-size: small;
    box-shadow: 0 0 0 0.1rem rgba(0,123,255,.5)
  };
  &:focus{
    outline: none;
  }
`;

