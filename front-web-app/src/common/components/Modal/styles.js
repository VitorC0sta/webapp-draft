import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;
  z-index: 98;

  height: 100%;
  width: 100%;

  background-color: rgba(0, 0, 0, 0.3);
`;

export const ModalContent = styled.div`
  background: ${({ theme }) => theme.COLORS.WHITE_700};

  display: flex;

  flex-direction: column;

  border-radius: 1rem;

  padding: 4rem;
  padding-top: 1.5rem;

  max-height: 50vh;
  width: 40vw;
  gap: 2rem;

  > .modal-header {
    display: flex;

    justify-content: space-between;
    h2 {
      color: ${({ theme }) => theme.COLORS.DARKBLUE_700};
    }
    .close-modal {
      font-size: 2.5rem;

      background-color: ${({ theme }) => theme.COLORS.NEUTRAL_200};
      color: ${({ theme }) => theme.COLORS.NEUTRAL_600};

      border-radius: 50%;

      transition: 350ms;

      align-self: left;

      cursor: pointer;
    }
  }

  > .handle-buttons {
    display: flex;
    justify-content: right;
    gap: 1rem;

    .submit {
      background: ${({ theme }) => theme.COLORS.BLUE_700};
      color: ${({ theme }) => theme.COLORS.WHITE_700};
    }
  }
`;
