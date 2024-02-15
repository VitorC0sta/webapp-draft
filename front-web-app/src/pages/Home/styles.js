import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-rows: 10rem auto;

  > .hero {
    display: flex;
  }
`;

export const Main = styled.main`
  width: 90vw;
`;

export const Cards = styled.div`
  display: flex;

  justify-content: space-evenly;

  padding: 4rem 0;

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
  justify-content: space-between;

  padding: 0 7.5rem;
`;
