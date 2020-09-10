import styled from "styled-components";

export const MainContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  padding: 0 32px;
  color: white;
  text-align: right;

  h1 {
    grid-column: 3/5;
    grid-row: 1/2;
    font-size: 250%;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
      "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
      "Helvetica Neue", sans-serif;
  }
  p {
    grid-column: 4/5;
    grid-row: 2/3;
    align-self: center;
    font-size: 150%;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
      "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
      "Helvetica Neue", sans-serif;
  }
`;
