import { Container, IntroductionCard } from "./styles";

export function Introduction() {
  return (
    <Container>
      <IntroductionCard>
        <h2>Informações</h2>
        <div className="info-container">
          <div className="wrap-info">
            <span>Idade</span>
            <p>22</p>
          </div>
          <div className="wrap-info">
            <span>ID Internacional</span>
            <p>(BR) 123.456.789-10</p>
          </div>
          <div className="wrap-info">
            <span>Companhia</span>
            <p>FreshCo ent.</p>
          </div>
          <div className="wrap-info">
            <span>Area</span>
            <p>Analista</p>
          </div>
        </div>
      </IntroductionCard>
      <IntroductionCard>
        <h2>Dados descritivos</h2>
        <div className="info-container">
          <div className="wrap-info">
            <span>ID no Banco</span>
            <p>ed5$3#ft1</p>
          </div>
          <div className="wrap-info">
            <span>Status do usuário</span>
            <p>Ativo</p>
          </div>
          <div className="wrap-info">
            <span>Registrado</span>
            <p>19/02/2024 - 07:43 AM</p>
          </div>
          <div className="wrap-info">
            <span>Ultima atualização</span>
            <p>19/02/2024 - 01:39 PM</p>
          </div>
        </div>
      </IntroductionCard>
      <IntroductionCard>
        <h2>Contato</h2>
        <div className="info-container">
          <div className="wrap-info">
            <span>Celular</span>
            <p>(99) 9999-999</p>
          </div>
          <div className="wrap-info">
            <span>Email</span>
            <p>email@email.com</p>
          </div>
          <div className="wrap-info">
            <span>LinkedIn</span>
            <p>Linkedin.com/user77</p>
          </div>
          
        </div>
      </IntroductionCard>
    </Container>
  );
}
