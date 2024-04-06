import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  background-color: ${({theme}) => theme.COLORS.WHITE_700};
  
  justify-content: space-between;

  padding: 0rem 5rem;
`;


export const UserAvatar = styled.div`
  display: flex;

  align-items: center;

  gap: 1rem; 
  
  cursor: pointer;

  p {
    font-size: 1.8rem;
    color: ${({theme}) => theme.COLORS.NEUTRAL_450};
    font-weight: 500;
  }
`;    