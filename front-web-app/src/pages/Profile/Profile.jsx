import { Container, Main } from "./styles";
import { SideBar } from "../../common/components/SideBar/SideBar";
import { FiArrowLeft } from "react-icons/fi";

export function Profile() {
  return (
    <Container>
      <SideBar />
      <Main>
        <div className="back-to-dashboard">
          <a href="/">
            <FiArrowLeft />
            <span>Voltar para dashboard</span>
          </a>
        </div>
        <div className="profile-basic-info">
          <div className="user-info">
            <img src="https://github.com/VitorC0sta.png" alt="Imagem do usuário" />
            <div className="wrap-text">
              <h3>Name Surname</h3>
              <span>Administrator</span>
            </div>
          </div>
          <div className="info-card">
            <span>ID do usuário</span>
            <p>1234</p>
          </div>
          <div className="info-card">
          <span>Contato</span>
            <p>99 9999-999</p>
          </div>
          <div className="info-card">
          <span>email</span>
            <p>email@email.com</p>
          </div>
          <div className="info-card">
          <span>Companhia</span>
            <p>FreshCo ent.</p>
          </div>
        </div>
        <div className="profile-container">
          <ul className="profile-options">
            <li ><a href="" >Introdução</a></li>
            <li className="selected"><a href="">Configurações</a></li>
          </ul>
          <hr />

          <div className="option">

          </div>
        </div>
      </Main>
    </Container>
  );
}
