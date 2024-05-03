import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;

  display: grid;
  grid-template-columns: 13% auto;
  .wrap-passwords {
    display: flex;
    gap: 1rem;
    margin-bottom: 1rem;
  }
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
    background: ${({ theme }) => theme.COLORS.GREEN_200};
  }
  > .events {
    background: ${({ theme }) => theme.COLORS.ORANGE_100};
  }
  > .users {
    background: ${({ theme }) => theme.COLORS.NEUTRAL_900};
    color: ${({ theme }) => theme.COLORS.WHITE_700};
  }
`;

export const Charts = styled.div`
  padding: 1rem;

  h3 {
    font-size: 2rem;
    text-align: center;
    margin-bottom: 0.5rem;
    color: ${({ theme }) => theme.COLORS.DARKBLUE_700};
  }

  background-color: ${({ theme }) => theme.COLORS.NEUTRAL_100};
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
