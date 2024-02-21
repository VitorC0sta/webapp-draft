import { Container, Main, Button } from "./styles";
import { SideBar } from "../../common/components/SideBar/SideBar";
import { FiArrowLeft } from "react-icons/fi";
import { useState, useMemo } from "react";
import { Introduction } from "../../common/components/Introduction/Introduction";
import { AccountConfiguration } from "../../common/components/AccountConfig/AccountConfiguration";

export function Profile() {
  const [tab, setTab] = useState(1);

  const optionProfile = useMemo(() => { 
    if(tab == 1) {
      return(
        <Introduction />
      )
    } else if(tab == 2) {
      return(
        <AccountConfiguration />
      )
    }
  }, [tab]);

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
            <li ><Button selected={tab==1} onClick={() => setTab(1)}>Introdução</Button></li>
            <li ><Button selected={tab==2} onClick={() => setTab(2)} >Configurações</Button></li>
          </ul>

          <div className="option">
            {
              optionProfile
            }
          </div>
        </div>
      </Main>
    </Container>
  );
}
