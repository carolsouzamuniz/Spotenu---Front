import styled from "styled-components";

export const AdminContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  border-bottom: 1px solid black;
  color: white;
  p{
    margin: 0;
    padding: 4px 16px;
  }
`;

export const BandContainer = styled.div`
  grid-column: 1/2;
  grid-row: 1/2;
`;

export const DescriptionContainer = styled.div`
  grid-column: 1/2;
  grid-row: 2/3;
`;

export const IconsContainer = styled.div`
  grid-column: 2/3;
  grid-row: 1/3;
  align-self: center;
  justify-self: center;
`;
