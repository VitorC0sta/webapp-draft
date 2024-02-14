import styled from "styled-components";

export const Container = styled.button`

border: none;
border-radius: 4rem;

background: ${({theme}) => theme.COLORS.DARKBLUE_700};

color: ${({theme}) => theme.COLORS.WHITE_700};

width: 10rem;

padding: 1rem;
cursor: pointer;

a {
    display: flex;
    justify-content: center;
    align-items: center;
    
    gap: 1rem;
    color: ${({theme}) => theme.COLORS.WHITE_700};
    
    text-decoration: none;
    
    font-size: 2rem;
  }

`;