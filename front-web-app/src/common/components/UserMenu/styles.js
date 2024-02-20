import styled from "styled-components";

export const Container = styled.div`
  display: flex;

  align-items: center;
  justify-content: center;

  gap: 2rem;
  
  font-size: 2.4rem;
  
  margin: 0 1rem;

  border-top: 0.1rem solid ${({ theme }) => theme.COLORS.DARKBLUE_500};
  
  a {
    color: ${({theme}) => theme.COLORS.NEUTRAL_500};

  }

  > img {
    width: 4.8rem;
    height: 4.8rem;
    border-radius: 50%;

    border: 0.2rem solid ${({ theme }) => theme.COLORS.DARKBLUE_500};
  }

  > .logout-btn {
    color: ${({ theme }) => theme.COLORS.RED_500};
    text-decoration: none;
  }

`;
