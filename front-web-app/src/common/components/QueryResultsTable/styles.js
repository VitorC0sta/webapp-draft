import styled from "styled-components";

export const Container = styled.table`
  background-color: ${({theme}) => theme.COLORS.WHITE};
  width: 100%;
  height: 100%;

  overflow-y: auto;

 
  border-collapse: collapse;
  
  > thead {

    tr{
      th {
        font-size: 1.6rem; 
        font-weight: 500;
        color: ${({theme}) => theme.COLORS.BLACK_700};
        text-align: left;
        padding: 1.5rem 1rem;

        font-weight: 600;
      }
      
      border-bottom: 0.1rem solid ${({theme}) => theme.COLORS.NEUTRAL_400};
    }
  }
  
  > tbody {
    overflow-y: auto;

    tr {
      td {      
        padding: 3rem 1rem;
        text-align: left;
      
        border-bottom: solid 0.1rem ${({theme}) => theme.COLORS.NEUTRAL_400};
        
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

      &:hover {
        background-color: ${({theme}) => theme.COLORS.NEUTRAL_200};
      }
    }
  }
`;

export const Badge = styled.div `
  display: flex;
  align-items: center;
  justify-content: center;

  background: ${({theme, $active}) => $active ? theme.COLORS.GREEN_100 : theme.COLORS.RED_200};

  color: ${({theme, $active}) => $active ? theme.COLORS.GREEN_500 : theme.COLORS.RED_100};

  padding: 0.5rem 1rem;

  border-radius: 0.5rem;

  font-weight: 500;
`