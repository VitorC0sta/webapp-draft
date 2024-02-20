import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;

  display: grid;
  grid-template-columns: 20% auto;
`;

export const Main = styled.main`
  height: 100vh;
  display: grid;
  grid-template-rows:   ; 
  

`;

export const Cards = styled.div`
  display: flex;

  justify-content: space-evenly;

  > .vehicles {
    background: ${({ theme }) => theme.COLORS.LIGHTBLUE_600};
  }
  > .operations {
    background: ${({ theme }) => theme.COLORS.GREEN_100};
  }
  > .events {
    background: ${({ theme }) => theme.COLORS.ORANGE_100};
  }
  > .clients {
    background: ${({ theme }) => theme.COLORS.NEUTRAL_900};
    color: ${({ theme }) => theme.COLORS.WHITE_700};
  }
`;

export const Charts = styled.div`
  display: flex;
  justify-content: space-evenly;

 
`;
