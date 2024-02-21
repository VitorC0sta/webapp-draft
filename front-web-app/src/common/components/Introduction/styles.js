import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  h1,
  h2 {
    font-family: "Monteserrat", sans-serif;
    font-weight: 700;
    color: ${({theme}) => theme.COLORS.DARKBLUE_700};
  }
  display: grid;
  gap: 4rem;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  padding: 3rem 3rem 10rem 0rem;
`;

export const IntroductionCard = styled.div`
  width: 100%;
  height: 100%;
  
  background: ${({theme}) => theme.COLORS.NEUTRAL_300};
  
  border: solid 0.1rem ${({ theme }) => theme.COLORS.NEUTRAL_300};
  
  border-radius: 2rem;
  
  padding: 1.5rem 2rem;
  
  > .info-container {
    display: grid;
    
    grid-template-columns: repeat(2,1fr);
   
    margin-top: 4rem;
   
    gap: 2rem;
    .wrap-info {
      display: flex;
      flex-direction: column;
      gap: 0.6rem;
      span {
        font-size: 1.6rem;
        color: ${({theme}) => theme.COLORS.NEUTRAL_900};
      }
  
      p{
        color: ${({theme}) => theme.COLORS.DARKBLUE_700};
        font-weight: 600;
        font-size: 1.8rem;
      } ;
  
    }
  }
`;
