import styled from "styled-components";

export const UserContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: 1fr 5fr;
  width: 100vw;
  height: 100vh;
`;

export const ItemInfo = styled.div`
  border: 1px solid black;
  flex-basis: 28vw;
  margin-bottom: 4vw;
`;

export const MenuContainer = styled.div`
  grid-column: 1/2;
  grid-row: 2/3;
`;

export const ItensContainer = styled.div`
  grid-column: 2/3;
  grid-row: 2/3;
  overflow: auto;
`;

export const ItensElements = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;
