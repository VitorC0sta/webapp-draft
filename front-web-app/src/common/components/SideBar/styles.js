import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    width: 25rem;
    
    background-color: ${({theme}) => theme.COLORS.DARKBLUE_700};

    display: grid;
    grid-template-rows: 10% 80% auto;

    > .logo {
      margin:  auto;
    }
  `;


export const Menu = styled.ul`
  display: flex;
  flex-direction: column;
  
  margin-top: 4rem;

  align-items: center;
  
  gap: 2rem;

  > hr {
    margin-left: auto;
    margin-right: auto;
    width: 90%;
    
    border-color: ${({theme}) => theme.COLORS.NEUTRAL_600};
  }
  
  `;


export const Items = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  width: 100%;

  background: ${({theme, $isActive}) => $isActive? theme.COLORS.WHITE_700: ""};
  
  cursor: pointer;
  
  > a {
    display: flex;
    
    gap: 1rem;
    
    width: 100%;

    padding-left: 4rem;
    
    color: ${({ theme, $isActive }) => $isActive ?
     theme.COLORS.DARKBLUE_700 : theme.COLORS.WHITE_700};
    
    font-weight: 500;
    font-size: 2rem;

    text-decoration: none;
  }
`;
