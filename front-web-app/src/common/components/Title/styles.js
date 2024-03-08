import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;

  font-family: "Roboto Slab", serif;
  font-size: 2.6rem;

  color: ${({ theme }) => theme.COLORS.DARKBLUE_700};
`;
