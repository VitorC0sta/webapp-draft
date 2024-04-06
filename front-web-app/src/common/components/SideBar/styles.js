import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 25rem;

  background-color: ${({ theme }) => theme.COLORS.DARKBLUE_700};

  display: grid;
  grid-template-rows: 10% 78% auto;

  > .logo {
    margin: auto 2rem ;
    
  }
`;

export const Menu = styled.ul`
  display: flex;
  flex-direction: column;

  margin-top: 4rem;

  align-items: center;

  gap: 1rem;

  > hr {
    margin-left: auto;
    margin-right: auto;
    width: 90%;

    border-color: ${({ theme }) => theme.COLORS.NEUTRAL_600};
  }

  > .active {
    

    background-color: ${({theme}) => theme.COLORS.DARKBLUE_600};
    
  }
`;

export const Items = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  width: 100%;
  height: 5rem;


  cursor: pointer;

   > a {
    
    display: flex;

    gap: 1rem;

    width: 100%;

    padding-left: 2rem;

    color: ${({ theme }) => theme.COLORS.WHITE_700};

    font-weight: 300;
    font-size: 2rem;

    text-decoration: none;
  }

  &::after {
  }
`;
