import styled from "styled-components";

export const Container = styled.table`
  width: 100%;
  height: 100%;             
  max-height: 100%;
  background-color: ${({theme}) => theme.COLORS.WHITE};

  overflow-y: auto;

 
  border-collapse: collapse;
  
  > thead {
    tr{
      th {
        font-size: 1.4rem; 
        font-weight: 500;
        color: ${({theme}) => theme.COLORS.NEUTRAL_600};
        text-align: left;
        padding-bottom: 1.5rem;
      }
      
      border-bottom: 0.1rem solid ${({theme}) => theme.COLORS.NEUTRAL_400};
    }
  }
  
  > tbody {
    border-bottom: solid 0.1rem ${({theme}) => theme.COLORS.NEUTRAL_400};
    tr {
      td:nth-child(1) {
        border-radius: 2rem 0 0 2rem;
        
      }
      td:last-child {
        border-radius: 0 2rem 2rem 0;
      }
      td {      
        padding: 1rem;
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

      &:hover {
        background-color: ${({theme}) => theme.COLORS.NEUTRAL_200};
      }
    }
  }
`;
