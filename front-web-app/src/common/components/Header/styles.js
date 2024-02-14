import styled from "styled-components";

export const Container = styled.header`
width: 100%;
height: 10rem;

display: flex;
align-items: center;
justify-content: space-between;

border-bottom: 0.1rem solid ${({theme}) => theme.COLORS.DARKBLUE_800};

box-shadow: 0 0 1rem 0.3rem ${({theme}) => theme.COLORS.NEUTRAL_900};
padding: 0 12rem 0 3rem;

background: ${({theme}) => theme.COLORS.DARKBLUE_700};

> .dropdown {
  display: inline-block;

  p {
    cursor: pointer;
  }

  button {
    border: none;
    background-color: transparent;
  }

  img {
    height: 7.5rem;
    border-radius: 50%;
    border: solid 0.2rem ${({ theme }) => theme.COLORS.DARKBLUE_500};
  }

  .dropdown-content {
    display: none;
    z-index: 1;
    position: absolute;
          
    font-weight: 500;

    background: ${({ theme }) => theme.COLORS.DARKBLUE_700};
    padding: 3rem 3rem 3rem 1rem;

    border-radius: 0 1rem 1rem;

    color: ${({ theme }) => theme.COLORS.WHITE_700};
    flex-direction: column;
    gap: 1rem;

    a {
      text-decoration: none;
      display: flex;
      gap: 0.5rem;
      align-items: center;
      color: ${({ theme }) => theme.COLORS.WHITE_700};
    }

    #logout {
      color: ${({ theme }) => theme.COLORS.RED_500};
    }
  }

  &:hover .dropdown-content {
    display: flex;
  }
  
}


`;
