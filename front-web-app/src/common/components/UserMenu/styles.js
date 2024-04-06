import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  
  justify-content: center;

  gap: 3rem;
  
  font-size: 2.4rem;
    
  a {
    display: flex;
    
    align-items: center;
   
    gap: 1rem;
    font-size: 2rem;
    color: ${({ theme }) => theme.COLORS.WHITE_700};
    cursor: pointer;
    
    text-decoration: none;

    font-weight: 300;

    padding-left: 2rem;
  }

  > .logout-btn {
    color: ${({ theme }) => theme.COLORS.RED_500};
    text-decoration: none;
  }

`;
