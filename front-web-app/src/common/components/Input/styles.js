import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;

  width: 100%;

  > label.sr-only {
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

  > .wrap-input {
    display: flex;
    align-items: center;
    
    background: ${({theme}) => theme.COLORS.WHITE_700 };

    border-radius: 0.6rem;
    border: 1px solid ${ ( { theme }) => theme.COLORS.NEUTRAL_400};
    
    padding-left: 2rem;
    
    svg {
      color: ${({theme}) => theme.COLORS.NEUTRAL_500};
    }
    
    input {
      width: 100%;
      padding: 1rem;
      height: 4rem;
      
      font-size: 1.6rem;
      font-weight: 400;
      
  
      color: ${({theme}) => theme.COLORS.NEUTRAL_700};
      border: none;
    }

    input:focus {     
      outline: none;
      outline-offset: 0;
    }

    input::placeholder {
      color: ${({theme}) => theme.COLORS.NEUTRAL_500};
    }

    &:focus-within {
      border: solid 0.1rem ${({theme}) => theme.COLORS.NEUTRAL_500};
    }
  }



`;
