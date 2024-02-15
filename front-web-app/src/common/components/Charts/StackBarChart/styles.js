import styled from "styled-components";

export const Container = styled.div`
  width: 60vw;
  height: 60vh;

  padding: 2rem;

  border-radius: 2rem;

  border: solid 0.2rem ${({theme}) => theme.COLORS.NEUTRAL_400};
 
`;
