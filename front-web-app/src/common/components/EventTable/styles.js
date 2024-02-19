import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  gap: 5rem;

  width: 17vw;
  height: 60vh;

  border: 0.2rem solid ${({ theme }) => theme.COLORS.NEUTRAL_400};

  border-radius: 2rem;

  padding: 2.5rem 1.5rem 2.5rem 1.5rem;
  > .legends {
    display: flex;
    justify-content: space-evenly;

    .legend {
      display: flex;
      flex-direction: column;

      align-items: center;

      gap: 0.5rem;

      span {
        font-size: 1.1rem;
      }
    }

  }
  > table {

    display: flex;
    flex-direction: column;

    thead {
      background: ${({theme}) => theme.COLORS.NEUTRAL_400};
    }

    thead th, tbody td {
      display: flex;
      justify-content: flex-start;
      padding: 1rem;
    }
    
    thead tr, tbody tr {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      
      border-top: solid 1px ${({theme}) => theme.COLORS.NEUTRAL_500};
    }
    
    tbody:last-child {
      border-bottom: solid 1px ${({theme}) => theme.COLORS.NEUTRAL_500};;

    }
  }

`;
