
import { useAuth } from "../../hooks/auth";
import { Container, IntroductionCard } from "./styles";
import { format } from "date-fns";

export function Introduction({ companyName }) {
  const {user} = useAuth();

  const { email, id, nationalIdNumber, phoneNumber, birthdate } = user;
   
  const dates = {
    registeredAt: format(user.createdAt, "MM/dd/yyyy - hh:mm aa"),
    updatedAt: format(user.updatedAt, "MM/dd/yyyy - hh:mm aa"),
    birthdateFormated: format(birthdate, "MM/dd/yyyy")
  }

  return (
    <Container>
      <IntroductionCard>
        <h2>Informações</h2>
        <div className="info-container">
          <div className="wrap-info">
            <span>Data de Nascimento</span>
            <p>{dates.birthdateFormated}</p>
          </div>
          <div className="wrap-info">
            <span>ID Internacional</span>
            <p>(BR) { nationalIdNumber }</p>
          </div>
          <div className="wrap-info">
            <span>Companhia</span>
            <p>{ companyName }</p>
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
            <p>{ id }</p>
          </div>
          <div className="wrap-info">
            <span>Status do usuário</span>
            <p>{ user.active? "Ativo" : "Inativo" }</p>
          </div>
          <div className="wrap-info">
            <span>Registrado</span>
            <p>{ dates.registeredAt }</p>
          </div>
          <div className="wrap-info">
            <span>Ultima atualização</span>
            <p>{ dates.updatedAt }</p>
          </div>
        </div>
      </IntroductionCard>
      <IntroductionCard>
        <h2>Contato</h2>
        <div className="info-container">
          <div className="wrap-info">
            <span>Celular</span>
            <p>{ phoneNumber }</p>
          </div>
          <div className="wrap-info">
            <span>Email</span>
            <p>{ email }</p>
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
