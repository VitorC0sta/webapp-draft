import { Container, Section, Tittle, Header } from "./styles";
import { Input } from "../../common/components/Input/Input";
import Logo from "../../assets/argus-svg/argus-logo.svg";
import Icon from "../../assets/argus-svg/argus-icon-background.svg";
import { Button } from "../../common/components/Button/Button";
import { Link } from "react-router-dom";
import { useState } from "react";
import { api } from "../../common/service/api";

export function ResetPassword() {
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");

  async function handleResetPassword(event) {
      event.preventDefault();

      await api.post("/reset_password", { newPassword, confirmNewPassword });

  }

  return (
    <Container>
      <Section>
        <Header>
          <Link to="/">
            <img src={Logo} alt="Argus Logo" />
          </Link>
        </Header>

        <Tittle>
          <h1>Redefinir senha</h1>
          <div>
            <p>Defina uma nova senha</p>
          </div>
        </Tittle>
        <form>
          <Input
            label="Nova senha"
            id="new-password"
            type="password"
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <Input
            label="Confirmar nova senha"
            id="confirm-new-password"
            type="password"
            onChange={(e) => setConfirmNewPassword(e.target.value)}
          />
          <Button type="button" title={"Alterar senha"} onClick={handleResetPassword}/>
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
