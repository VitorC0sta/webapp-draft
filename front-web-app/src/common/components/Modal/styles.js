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

export const ModalContainer = styled.div`
  padding: 4rem;

  background: ${({ theme }) => theme.COLORS.WHITE_700};
  border-radius: 1rem;
`;

export const ModalContent = styled.div`
  display: flex;

  flex-direction: column;

  max-height: 65rem;
  width: 80rem;
  gap: 2rem;

  > .modal-header {
    display: flex;

    justify-content: space-between;
    > h2 {
      color: ${({ theme }) => theme.COLORS.DARKBLUE_700};
      margin-bottom: 3rem;
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
`;
