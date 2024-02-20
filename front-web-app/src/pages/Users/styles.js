import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;

  display: grid;
  grid-template-columns: 20% auto;

  > .hero {
    width: 90%;
    padding: 3rem 6rem;

    .hero-head {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
`;

export const Main = styled.main`
  grid-area: main;
`;

export const Form = styled.form``;
