import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;

  display: grid;
  grid-template-columns: 13% auto;
`;

export const Main = styled.main`
  display: grid;

  grid-template-rows: 1fr 2fr 7fr;

  padding: 0 0 0 3rem;

  .back-to-dashboard {
    display: flex;

    align-items: center;

    font-size: 2.4rem;
    
    a {
      display: flex;

      align-items: center;

      gap: 2rem;

      text-decoration: none;
      font-weight: 500;
      color: ${({ theme }) => theme.COLORS.DARKBLUE_700};
      
      &:hover {
    
          opacity: 0.8;
        
      }
    }

    svg {
      border-radius: 50%;

      background: ${({ theme }) => theme.COLORS.DARKBLUE_700};

      color: ${({ theme }) => theme.COLORS.WHITE_700};
    }

  }

  > .profile-basic-info {
    display: grid;

    grid-template-columns: 2fr repeat(4, 1fr);

    align-items: center;

    span {
      font-size: 1.6rem;
      font-weight: 500;
      color: ${({ theme }) => theme.COLORS.NEUTRAL_600};
    }

    p {
      font-size: 1.8rem;
      font-weight: 600;
      color: ${({ theme }) => theme.COLORS.DARKBLUE_700};
    }

    .user-info {
      display: flex;

      align-items: center;

      font-size: 2.4rem;

      gap: 2rem;

      h3 {
        color: ${({ theme }) => theme.COLORS.DARKBLUE_700};
      }

      img {
        height: 10rem;
        border: 0.1rem solid ${({ theme }) => theme.COLORS.DARKBLUE_700};
        border-radius: 50%;
      }
    }
  }

  > .profile-container {
    display:  grid;
    
    grid-template-rows: 1fr 16fr;

    .profile-options {
      display: flex;
      
      gap: 2rem;
      margin-right: 3rem;
      padding-left: 2rem;
      
      border-bottom: 0.1rem solid ${({ theme }) => theme.COLORS.NEUTRAL_600};

    }
  }
`;

export const Button = styled.button`
  border: none;
  width: 100%;
  height: 100%;
  background-color: transparent;

  text-decoration: none;

  color: ${(props) =>
    props.selected
      ? props.theme.COLORS.DARKBLUE_700
      : props.theme.COLORS.NEUTRAL_600};
  font-size: 2rem;

  font-weight: ${props => props.selected ? 600: 500};
`;
