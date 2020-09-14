import styled from "styled-components";

export const UserContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: 12vh 1fr;
  width: 100vw;
  height: 100vh;
`;

export const TitleContainer = styled.div`
  text-align: center;
`;
export const ImageContainer = styled.img`
  max-width: 300px;
  height: auto;
`;

export const ItemInfo = styled.div`
  border: 1px solid black;
  border-radius: 5px;
  flex-basis: 16vw;
  margin-bottom: 2vw;
  color: white;
`;

export const MenuContainer = styled.div`
  grid-column: 1/2;
  grid-row: 2/3;
  font-size: 24px;
  background-color: rgba(0, 0, 0, 0.3);

  a {
    display: block;
    text-decoration: none;
    color: white;
  }
  p {
    display: flex;
    padding: 12px;
    margin-block-start: 0;
    margin-block-end: 0;
    :hover {
      background-color: rgba(0, 0, 0, 0.5);
    }
  }
`;

export const ItensContainer = styled.div`
  grid-column: 2/3;
  grid-row: 2/3;
  overflow: auto;
  justify-self: center;
`;

export const ItensElements = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

export const InfoMusicContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: 1fr 1fr;
  p {
    margin: 0;
    padding: 4px 0 4px 8px;
  }
`;
export const FavoriteIconContainer = styled.div`
  grid-column: 2/3;
  grid-row: 1/3;
  align-self: center;
  justify-self: center;
`;
export const MusicContainer = styled.div`
  grid-column: 1/2;
  grid-row: 1/2;
`;

export const BandContainer = styled.div`
  grid-column: 1/2;
  grid-row: 2/3;
`;

export const ItensBandContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  
`;
