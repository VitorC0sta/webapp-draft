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
  > .back-to-dashboard {
    display: flex;

    align-items: center;

    a {
      display: flex;

      align-items: center;

      gap: 2rem;

      text-decoration: none;
      color: ${({ theme }) => theme.COLORS.DARKBLUE_700};

      font-size: 3rem;

      svg {
        background: ${({ theme }) => theme.COLORS.DARKBLUE_700};
        color: white;
        border: none;
        border-radius: 50%;
      }
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
    .profile-options {
      display: flex;

      gap: 3rem;
      padding: 0 0 0 2rem;
      > li {
        padding-bottom: 1rem;
        a {
          padding-bottom: rem;
          text-decoration: none;
          color: ${({ theme }) => theme.COLORS.NEUTRAL_600};
          font-size: 2rem;
          font-weight: 500;
        }

        &.selected {
          a {
            font-weight: 600;
            color: ${({ theme }) => theme.COLORS.NEUTRAL_900};
          }

          &:after {
            content: "";
            position: absolute;
            left: 0;
            right: 0;
            bottom: 0;
            height: 0.3rem;
            background-color: ${({ theme }) => theme.COLORS.NEUTRAL_900};
          }
        }
      }

      hr {
        border: none;
        height: 0.1rem;
        background-color: ${({ theme }) => theme.COLORS.NEUTRAL_600};
        margin: 0;
      }

      /* border-bottom: 0.1rem solid ${({ theme }) =>
        theme.COLORS.NEUTRAL_600}; */
    }
  }
`;
