import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  
  grid-area: search;

  align-items: center;
    
  gap: 1rem;
  
  border-radius: 0.5rem;

  font-size: 2.6rem;

  background: ${({theme}) => theme.COLORS.NEUTRAL_200};

  padding: 0rem 1rem;

  margin: auto 0;

  color: ${({theme}) => theme.COLORS.NEUTRAL_500};

  > #search {
    background: transparent;

    border: none;

    outline: none;
    
    height: 4rem;

    font-size: 1.6rem;
    
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
