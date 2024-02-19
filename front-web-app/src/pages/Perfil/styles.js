import styled from "styled-components";

export const Container = styled.div`
  > a {
    width: 4.8rem;
    height: 4.8rem;

    display: flex;
    
    align-items: center;
    justify-content: center;
    
    gap: 1rem;
    
    border-radius: 50%; 

    position: absolute;
    right: 6rem;
    top: 12rem;
    
    font-size: 2.4rem;
    font-weight: 500;
    text-decoration: none;
    
    color: ${({ theme }) => theme.COLORS.WHITE_700};

    background-color: ${({ theme }) => theme.COLORS.RED_500};
  
    &:hover {
      opacity: 1.5;
    }
  }

  > .body-container {
    height: 90vh;

    display: flex;
    justify-content: center;
    align-items: center;

    padding: 4rem 0;
  }
`;

export const Avatar = styled.div`
  width: 18.6rem;
  height: 18.6rem;

  overflow: visible;

  position: relative;

  border-radius: 50%;

  > img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }

  > label {
    margin: 0;

    display: flex;

    width: 4.8rem;
    height: 4.8rem;

    justify-content: center;
    align-items: center;

    background: ${({ theme }) => theme.COLORS.DARKBLUE_700};

    position: absolute;

    right: 0.7rem;
    bottom: 0.7rem;

    border-radius: 50%;

    cursor: pointer;

    #avatar {
      display: none;
    }

    svg {
      color: ${({ theme }) => theme.COLORS.WHITE_700};
      font-size: 2rem;
      display: absolute;
      margin: auto;
    }
  }
`;

export const Form = styled.form`
  width: 30vw;
  height: 100%;
  padding: 3rem;

  display: flex;

  flex-direction: column;

  align-items: center;

  gap: 2rem;

  :nth-child(1) {
    margin-bottom: 1.5rem;
  }

  border-radius: 2rem;

  box-shadow: 0 0 1rem 0.3rem ${({theme}) => theme.COLORS.NEUTRAL_500};
`;
