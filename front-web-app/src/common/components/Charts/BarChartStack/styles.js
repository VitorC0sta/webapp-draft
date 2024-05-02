import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;

  padding: 2rem;

  border-radius: 2rem;

  border: solid 0.2rem ${({theme}) => theme.COLORS.NEUTRAL_400};
 
`;
