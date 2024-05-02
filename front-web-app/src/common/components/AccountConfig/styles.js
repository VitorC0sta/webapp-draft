import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  > h1, h2 {
    font-family: "Monteserrat", sans-serif;
    font-weight: 700;
    color: ${({theme}) => theme.COLORS.DARKBLUE_700};
  }

  > form {
    margin-top: 4rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;

    width: 25rem;
  }

  padding: 3rem 3rem 10rem 0.1rem;
`;