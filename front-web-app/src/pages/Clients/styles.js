import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  
  display: flex;
`;

export const ContentArea = styled.section`
  background-color: #0f8;
  
  flex: 1;
  
  display: grid;
    grid-template-rows: 1fr 9fr;
`;

export const Main = styled.main`
  border: solid 2px #f00;
`;

export const NewClientButton = styled.button`
  border: none;

  border-radius: 4rem;

  background: ${({ theme }) => theme.COLORS.DARKBLUE_700};

  color: ${({ theme }) => theme.COLORS.WHITE_700};

  width: 10rem;

  padding: 1rem;

  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  gap: 1rem;
  color: ${({ theme }) => theme.COLORS.WHITE_700};

  text-decoration: none;

  font-size: 2rem;
`;
