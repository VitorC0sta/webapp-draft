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
        background-color: ${({theme}) => theme.COLORS.WHITE_700};
        
        text-align: left;
        font-weight: 600;
        
        padding: 1.5rem 1rem;
      
        position: sticky; 
        top: 0;
        z-index: 1;
        border-bottom: 0.1rem solid ${({theme}) => theme.COLORS.NEUTRAL_400};
      }
      
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

  background: ${({theme, $active}) => $active ? theme.COLORS.GREEN_100 : theme.COLORS.RED_100};

  color: ${({theme, $active}) => $active ? theme.COLORS.GREEN_500 : theme.COLORS.RED_500};

  padding: 0.5rem 0rem;

  border-radius: 0.5rem;

  font-weight: 500;
`