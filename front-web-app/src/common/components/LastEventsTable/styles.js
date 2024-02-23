import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  gap: 3rem;

  padding: 0 3rem;
  width: 100%;
  height: 100%;

  border: solid 0.2rem ${({ theme }) => theme.COLORS.NEUTRAL_400};
  border-radius: 2rem;

  > .wrap-title {
    padding: 2rem 1rem;

    h2 {
      font-size: 3rem;
      font-weight: 600;
      font-family: "Montserrat", sans-serif;
      color: ${({ theme }) => theme.COLORS.DARKBLUE_700};
    }
  }

  > table {
    border-collapse: collapse;
    overflow: auto;
    width: 100%;

    tbody {
      tr {
        width: 100%;
        transition: 500ms;
        cursor: default;
      }

      tr:hover {
        td:nth-child(1){
          border-radius: 1rem 0 0 1rem;
          background: ${({ theme }) => theme.COLORS.NEUTRAL_300};
        }

        td:last-child {
          border-radius: 0 1rem 1rem 0;
          background: ${({ theme }) => theme.COLORS.NEUTRAL_300};
        }
      }
    }

    td {
      padding: 1rem;

      height: 5rem;

      text-align: left;

      font-weight: 500;
      font-size: 1.8rem;
      color: black;
    }

    th {
      padding: 0.3rem 1rem;
      font-size: 1.6rem;
      text-align: left;
      font-weight: 500;
      color: ${({ theme }) => theme.COLORS.NEUTRAL_600};
    }
  }
`;
