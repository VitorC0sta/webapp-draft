import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;

  display: grid;
  grid-template-columns: 1fr 9fr;
  > .body-container {
    height: 100%;

    padding: 2.5rem 3rem 5rem 3rem;

    .head-container {
      display: flex;
      justify-content: space-between;

      
      form {
        display: flex;
        flex-direction: column;

        gap: 1.5rem;

        h2 {
          margin-bottom: 0.5rem;
        }

        label {
          margin-left: 0.5rem;
          margin-top: 0.5rem;
        }

        .user-info {
          .complete-name {
            display: flex;
            gap: 1rem;
          }
          .row-wrap {
            margin-top: 0.8rem;
            display: flex;
            gap: 1rem;
      

            fieldset {
              display: flex;
              flex-direction: column;
              padding: 0.5rem;
              font-size: 1.4rem;
              
              text-align: left;

              align-items: center;
              justify-content: center;
              
              border: solid 0.2rem ${({theme}) => theme.COLORS.NEUTRAL_400};

              .wrap-is-administrator {
                display: flex;
                
                align-items: center;
                             
                color: ${({theme}) => theme.COLORS.NEUTRAL_900};
              
                label {
                  
                }
              }
            }
          }
        } 
        
        .address-details {
          .country-info {
            display: flex;
            gap: 0.5rem;
          }
        }

        .contact-detail {
          h2 {
          }
          .contact-info {
            display: flex;
            gap: 0.5rem;
          }
        }
      }
    }
  }
`;

export const Main = styled.main`
  width: 100%;
  height: 100%;

  padding: 6.5rem 0 10rem 0;
`;

export const NewClientButton = styled.button`
  border: none;

  border-radius: 4rem;

  background: ${({ theme }) => theme.COLORS.DARKBLUE_700};

  color: ${({ theme }) => theme.COLORS.WHITE_700};

  width: 10rem;

  padding: 1rem;

  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  gap: 1rem;
  color: ${({ theme }) => theme.COLORS.WHITE_700};

  text-decoration: none;

  font-size: 2rem;
`;

