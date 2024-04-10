import styled from "styled-components";
  
export const Container = styled.div`
  height: 100vh;

  display: flex;
  `;

export const ContentArea = styled.section`
  background-color: ${({theme}) => theme.COLORS.NEUTRAL_200};
  
  flex: 1;
  
  display: grid;
  grid-template-rows: 1fr 9fr;
  
  .new-user-form {
    display: flex;
    flex-direction: column;
    gap: 4rem;

    .flex-row {
     display: flex;
     gap: 1rem;
    }

    .address-details {
      display: flex;
      flex-direction: column;

      gap: 1rem;

    }

    .handle-buttons {
    display: flex;
    justify-content: right;
    gap: 1rem;
  }

  }

`;

export const Main = styled.main`
  padding: 2rem 5rem;
`;

export const Content = styled.section`
  display: flex;
  flex-direction: column;
  
  gap: 3rem;
  padding: 3rem 2rem 1rem 2rem;
  
  border-radius: 1rem;

  background: ${({ theme }) => theme.COLORS.WHITE_700};
`;

export const ContentHeader = styled.div`
    
  align-items: center;
  display: flex;
  justify-content: space-between;

  padding: 0;

  > h2 {
    font-size: 3.4rem;
  }
`;

export const CreateButton = styled.button`
  border: none;

  border-radius: 0.5rem;

  background: ${({ theme }) => theme.COLORS.DARKBLUE_700};

  color: ${({ theme }) => theme.COLORS.WHITE_700};

  padding: 1rem;

  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  gap: 1rem;
  color: ${({ theme }) => theme.COLORS.WHITE_700};

  text-decoration: none;

  font-size: 2.4rem;

  p{
    font-size: 1.4rem;
  }

`;
