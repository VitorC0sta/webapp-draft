import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  
  grid-area: search;

  align-items: center;
  
  gap: 2rem;
  
  font-size: 2rem;

  background: ${({theme}) => theme.COLORS.NEUTRAL_400};

  padding: 0rem 1rem;

  color: ${({theme}) => theme.COLORS.NEUTRAL_500};

  > #search {
    background: transparent;

    height: 5rem;

    border: none;

    outline: none;
    
    font-size: 2rem;
    
    &::placeholder {
      color: ${({theme}) => theme.COLORS.NEUTRAL_500};
    }
  }

  > .sr-only {
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

`;
