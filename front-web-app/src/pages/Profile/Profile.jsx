import { Container, Main, Button } from "./styles";
import { SideBar } from "../../common/components/SideBar/SideBar";
import { FiArrowLeft } from "react-icons/fi";
import { useState, useMemo, useCallback, useEffect } from "react";
import { Introduction } from "../../common/components/Introduction/Introduction";
import { AccountConfiguration } from "../../common/components/AccountConfig/AccountConfiguration";
import { useAuth } from "../../common/hooks/auth";
import { api } from "../../common/service/api";

export function Profile() {
  const [tab, setTab] = useState(1);
  const [clientData, setClientData] = useState({});

  const { user } = useAuth();

  const  { name, email, id, phoneNumber, idClient } = user;

  const getClientData = useCallback(async () => {
    try {

     const response = await api.get(`/client/${idClient}`);    
     
     console.log(response.data);

     setClientData(response.data);
     
    } catch (err){
      console.log(err.response.data); 
    }
    
  }, [idClient]);

  
  useEffect( () => {
    getClientData();
  }, [getClientData]);

  const optionProfile = useMemo(() => { 
    if(tab == 1) {
      return(
        <Introduction companyName={clientData.legalName}/>
      )
    } else if(tab == 2) {
      return(
        <AccountConfiguration />
      )
    }
  }, [tab, clientData]);

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
              <h3>{ name }</h3>
            <span>{ user.administrator? "Administrator" : "Default" }</span>
            </div>
          </div>
          <div className="info-card">
            <span>ID do usuário</span>
            <p>{ id }</p>
          </div>
          <div className="info-card">
          <span>Contato</span>
            <p>{ phoneNumber }</p>
          </div>
          <div className="info-card">
          <span>email</span>
            <p>{ email }</p>
          </div>
          <div className="info-card">
          <span>Companhia</span>
            <p>{clientData.dbaName}</p>
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
