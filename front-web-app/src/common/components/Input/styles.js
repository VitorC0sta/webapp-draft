import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;

  width: 100%;

  label.sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
  }

  input {
    padding: 1rem;
    height: 4rem;
    
    font-size: 1.6rem;
    font-weight: 400;
    
    border-radius: 0.6rem;
    border: 1px solid ${ ( { theme }) => theme.COLORS.NEUTRAL_400};

    color: ${({theme}) => theme.COLORS.NEUTRAL_700};
    
  }
  input:focus {
    border: 2px solid ${({theme}) => theme.COLORS.NEUTRAL_600};
    
    box-shadow: 0 0 0.5rem 0.5rem ${({theme}) => theme.COLORS.NEUTRAL_100};
    
    outline: none;
    outline-offset: 0;


  }

  input::placeholder {
    color: ${({theme}) => theme.COLORS.NEUTRAL_500};
  }
`;
