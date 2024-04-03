import { Container, Section, Header } from "./styles";
import { Input } from "../../common/components/Input/Input";
import { Button } from "../../common/components/Button/Button";
import Logo from "../../assets/argus-svg/argus-logo.svg";
import Icon from "../../assets/argus-svg/argus-icon-background.svg";
import { api } from "../../common/service/api";
import { useState } from "react";
import { useLocation } from "react-router-dom";

export function ResetPassword () {
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const { search } = useLocation();

  async function handleNewPassword(event) {
    event.preventDefault();

    const token = new URLSearchParams(search).get('token');

    return await api.post(`/reset_password?token=${token}`, {newPassword, confirmNewPassword});
  }

  return(
    <Container>
    <Section>
      <Header>
        <img src={Logo} alt="Argus Logo" />
      </Header>
      <form>
          <Input
            label="Nova senha"
            id="new-password"
            type="password"
            onChange={ e => setNewPassword(e.target.value)}
          />
          <Input
            label="Confirme a nova senha"
            id="password"
            type="password"
            onChange={ e => setConfirmNewPassword(e.target.value)}
          />
          <Button type="button" title={"Entrar"} onClick={handleNewPassword}/>
        </form>
    </Section>
    <Section className="panel">
      <img src={Icon} />
      <div className="main-info">
        <div className="typewriter">
          <p>
            Líder em Tecnologia de Detecção, Gestão de Fadiga e Distração.
          </p>
        </div>
      </div>
    </Section>
  </Container>
);
}
