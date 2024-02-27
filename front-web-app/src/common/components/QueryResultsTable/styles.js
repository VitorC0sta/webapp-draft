import styled from "styled-components";

export const Container = styled.table`
  width: 100%;
  height: 100%;
  background-color: white;

  /* &:nth-child(1) {
    border: solid 0.1rem ${({theme}) => theme.COLORS.NEUTRAL_600};

  } */

  > thead {
    tr{
      th {
        font-size: 1.4rem; 
        font-weight: 500;
        color: ${({theme}) => theme.COLORS.NEUTRAL_500};
        text-align: left;
      }

      border-bottom: 0.1rem solid ${({theme}) => theme.COLORS.NEUTRAL_600};
    }
  }

  > tbody {
    border-bottom: solid 0.1rem ${({theme}) => theme.COLORS.NEUTRAL_600};
    tr {
      td {
        text-align: left;
        height: 5rem;

        span {
          font-size: 1.4rem;
          color: ${({theme}) => theme.COLORS.NEUTRAL_600};
          margin: 0.4rem;
        }

      }    
      .query-profile {
        text-decoration: none;
        color: ${({theme}) => theme.COLORS.ORANGE_500};
      }
    }
  }
`;
