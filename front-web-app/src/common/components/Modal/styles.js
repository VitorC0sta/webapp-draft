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
  
  z-index: 98;
  
  height: 100%;
  width: 100%;
  
  background-color: rgba(0, 0, 0, 0.3);

  padding-top: 13rem;

  > .close-modal {
    font-size: 2rem;
    background-color: ${({theme}) => theme.COLORS.RED_500};
    color: ${({theme}) => theme.COLORS.RED_500};
    border-radius: 50%;
    transition: 350ms;

    &:hover {
      color: ${({theme}) => theme.COLORS.RED_600};
    }
  }
`;

export const ModalContent = styled.div`
  background: ${({theme}) =>theme.COLORS.NEUTRAL_200};
`;


