import styled from "styled-components";

export const Container = styled.div`
  display: flex;

  grid-area: search;

  align-items: center;
  
  gap: 2rem;

  font-size: 2rem;

  border: 0.2rem solid ${({theme}) => theme.COLORS.DARKBLUE_300};
  border-radius: 4rem;

  height: 4rem;
  width: 60rem;

  padding: 2rem 1rem;

  color: ${({theme}) => theme.COLORS.NEUTRAL_600};

  > #search {
    border: none;
    outline: none;
    width: 100%;
    font-size: 2rem;
    &::placeholder {
      color: ${({theme}) => theme.COLORS.NEUTRAL_600};
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
