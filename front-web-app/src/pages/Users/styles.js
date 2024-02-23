import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;

  display: grid;
  grid-template-columns: 1fr 9fr;
  > .body-container {
    height: 100%;

    padding: 2.5rem 3rem 5rem 3rem;

    .head-container {
      display: flex;
      justify-content: space-between
    }
  }
`;

export const Main = styled.main`
  width: 100%;
  height: 100%;

  padding: 6.5rem 0 10rem 0;
`;


