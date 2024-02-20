import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  
  padding: 2.5rem 0 2.5rem 1.5rem;

  border-radius: 2rem;
  
  font-weight: 500;
  
  > .content {
    display: flex;
    align-items: center;
    gap: 1rem;

    margin: 2rem 0 0.5rem 0;
    font-size: 2.2rem;
    .percent-data {
      display: flex;

      color: ${({theme}) => theme.COLORS.DARKBLUE_700};
      background: ${({theme}) => theme.COLORS.WHITE_700};

      align-items: center;
      gap: 0.6rem;

      padding: 0.4rem;
      border-radius: 0.6rem;
    }
  }

  
`;
