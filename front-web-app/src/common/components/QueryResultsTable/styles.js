import styled from "styled-components";

export const Container = styled.table`
  width: 100%;
  height: 100%;
  background-color: white;

  &:nth-child(1) {
    border: solid 0.1rem ${({theme}) => theme.COLORS.NEUTRAL_600};

  }

  > thead {
    tr{

    }
    th {
      text-align: left;
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

    }
  }
`;
