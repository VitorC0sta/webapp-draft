import styled from "styled-components";

export const Container = styled.main`
  display: grid;
  grid-template-columns: 50% 50%;

  > .panel {
    padding: 0;
    background-color: ${({ theme }) => theme.COLORS.DARKBLUE_700};
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      svg {
        height: 90vh;
        width: 90vw;
      }

      width: max-content;
      height: 90vh;
      overflow: hidden;
      display: flex;
      position: absolute;
      opacity: 0.2;
      z-index: 0;
    }

    .typewriter {
      display: inline-block;
    }

    p {
      color: ${({ theme }) => theme.COLORS.WHITE_700};

      font-family: monospace;
      font-size: 2rem;
      font-weight: 500;
      width: 63ch;
      white-space: nowrap;
      overflow: hidden;
      border-right: 0.5rem ${({ theme }) => theme.COLORS.WHITE_700} solid;
      animation: typing 3.15s steps(63),
        blinking 0.5s infinite step-end alternate;
    }

    .main-info {
    }

    @keyframes typing {
      from {
        width: 0;
      }
    }

    @keyframes blinking {
      50% {
        border-color: transparent;
      }
    }
  }
`;

export const ForgotButton = styled.button`
  align-self: flex-end;

  border: none;

  background-color: transparent;

  color: ${({ theme }) => theme.COLORS.DARKBLUE_700};

  text-decoration: underline;

  font-weight: 700;
  font-size: 1.6rem;

  cursor: pointer;
`;

export const Section = styled.section`
  height: 100vh;
  display: grid;
  grid-template-rows: 20% 15% auto;

  padding: 0 18%;

  form {
    margin-top: 4rem;
    padding: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 2rem;

    align-items: center;

    a {
      margin-left: auto;
      margin-bottom: 3rem;
    }
  }

  .forgot-password {
    div {
      h2 {
        margin-bottom: 2rem;
      }
      
    }
  }
`;

export const Tittle = styled.div`
  margin-top: 5rem;

  h1 {
    font-size: 4rem;
    margin-bottom: 1rem;
  }

  div {
    display: flex;
    gap: 1.5rem;
    p {
      color: ${({ theme }) => theme.COLORS.NEUTRAL_700};
    }
  }
`;

export const Header = styled.div`
  margin-top: 3rem;
  img {
    width: 14rem;
    height: 3.2rem;
  }
`;
