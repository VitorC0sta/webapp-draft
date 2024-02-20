import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;

  display: grid;
  grid-template-columns: 13% auto;
`;

export const Main = styled.main`
  width: 100%;
  height: 100vh;
  
  display: grid;

  padding: 0 3rem 2rem;

  gap: 1rem;
 
  grid-template-rows: 1fr 2fr 8fr;
`;

export const Cards = styled.div`
  //grid-area: cards;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  


  gap: 3rem;

  .card {
    width: 100%;
    height: 100%;
    background: #000;
    border-radius: 2rem;
    border: 3px solid red;
  }

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
  //grid-area: chart-container;
`;

export const Analytics = styled.div`
  display: grid;
  grid-template-columns: 3.2fr 1fr;

  

  gap: 3rem;

  > .chart-container {
    //grid-area: chart-container;
    width: 100%;
    height: 100%;
    border-radius: 2rem;
  }

  > .table-event {
    //grid-area: table-event;
  
  }
`;