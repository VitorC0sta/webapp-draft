import styled from "styled-components";

export const Container = styled.button`
  border-radius: 1rem;
  background: ${({$typeSubmit, theme}) => $typeSubmit ? theme.COLORS.DARKBLUE_700 : theme.COLORS.WHITE_700};
  color: ${({ $typeSubmit, theme }) => $typeSubmit ? theme.COLORS.WHITE_700 : theme.COLORS.BLACK_700};

  font-size: 1.4rem;
  
  font-weight: 600;

  border: solid 1px ${({ theme }) => theme.COLORS.NEUTRAL_300};
  
  padding: 1.5rem 3rem;

  cursor: pointer;
`;

