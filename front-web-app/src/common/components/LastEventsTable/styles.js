import styled from "styled-components";

export const Container = styled.table`
  width: 100%;
  height: 100%;
  border: solid 0.2rem ${({ theme }) => theme.COLORS.NEUTRAL_400};
  border-radius: 2rem;

  text-transform: uppercase;
`;
