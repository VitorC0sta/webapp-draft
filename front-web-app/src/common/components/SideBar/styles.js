import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  
  `;


export const Menu = styled.ul`
  height: 100vh; 
  width: 20rem;
  
  background-color: ${({theme}) => theme.COLORS.DARKBLUE_700};
  
  display: flex;
  flex-direction: column;
  
  > hr {
    margin-left: auto;
    margin-right: auto;
    width: 90%;

    border-color: ${({theme}) => theme.COLORS.NEUTRAL_600};
  }
  
  
  
  `;

export const MenuItems = styled.li`
  display: flex;
  align-items: center;
  
  padding: 3rem 2rem;
  
  background: ${({theme, $isActive}) => $isActive? theme.COLORS.WHITE_700: ""};

  > a {
    display: flex;
    gap: 1rem;

    color: ${({ theme, $isActive }) => $isActive ?
     theme.COLORS.DARKBLUE_700 : theme.COLORS.WHITE_700};
    
    font-weight: 500;
    font-size: 2rem;

    text-decoration: none;
  }
`;
