import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  h1,
  h2 {
    font-family: "Monteserrat", sans-serif;
    font-weight: 700;
    color: ${({theme}) => theme.COLORS.DARKBLUE_700};
  }
  padding: 3rem 3rem 10rem 0.1rem;
`;