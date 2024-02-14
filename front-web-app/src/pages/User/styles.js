import styled from "styled-components";

export const Container = styled.div`
  > .body-container {
    display: flex;

    .hero {
      width: 90%;
      padding: 3rem 6rem;

      .hero-head {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

    }
  }
`;

export const Main = styled.main`
  grid-area: main;
`;

export const Form = styled.form`

`;