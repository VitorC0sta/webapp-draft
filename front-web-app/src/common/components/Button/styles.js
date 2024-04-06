import styled from "styled-components";

export const Container = styled.button`
  border-radius: 1rem;
  background: ${({theme}) => theme.COLORS.WHITE_700};
  color: ${({theme}) => theme.COLORS.BLACK_700};

  width: ${({width}) => width || ''};
  
  font-size: 1.4rem;
  font-weight: 500;
    
  border: solid 1px ${({theme}) => theme.COLORS.NEUTRAL_300};
  padding: 0.8rem 1rem ;
  cursor: pointer;

`;