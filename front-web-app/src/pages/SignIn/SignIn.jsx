import { useState } from "react";
import { Container, Section, Tittle, Header, ForgotButton } from "./styles";
import { Input } from "../../common/components/Input/Input";
import Logo from "../../assets/argus-svg/argus-logo.svg";
import Icon from "../../assets/argus-svg/argus-icon-background.svg";
import TextButton from "../../common/components/TextButton/TextButton";
import { Button } from "../../common/components/Button/Button";
import { useAuth } from "../../common/hooks/auth";
import { Modal } from "../../common/components/Modal/Modal";
import { api } from "../../common/service/api";

export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [recoveryEmail, setRecoveryEmail] = useState("");
  const [open, setOpen] = useState(false);
  
  const { signIn } = useAuth();

  function handleSignIn(event) {
    event.preventDefault();

    signIn({ email, password });
  }

  async function handleSendEmail(event) {
    event.preventDefault();
    
    try {
      await api.post("/forgot_password", { recoveryEmail });
    } catch (err) {
      console.log("Não foi possivel enviar o email");
    }

    setOpen(false);
  }

  return (
    <Container>
      <Section>
        <Header>
          <img src={Logo} alt="Argus Logo" />
        </Header>
        <Tittle>
          <h1>Entrar</h1>
          <div>
            <p>Não é nosso cliente?</p>
            <TextButton
              text="Conheça-nos"
              href={"https://www.argusolutions.com.br/"}
              target="_blank"
            />
          </div>
        </Tittle>
        <form>
          <Input
            label="Email"
            id="email"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            label="Senha"
            id="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <ForgotButton
            onClick={(e) => {
              e.preventDefault();
              setOpen(true);
            }}
          >
            Esqueceu a senha ?
          </ForgotButton>
          <Button type="button" title={"Entrar"} onClick={handleSignIn} />
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
        <Modal isOpen={open} setIsOpen={setOpen} className="modal">
          <form action="submit" className="forgot-password">
            <div>
              <h2>Enviar email de recuperação</h2>
              <Input
                label="Email"
                id="forgot-password-email"
                type="email"
                onChange={e => {setRecoveryEmail(e.target.value)} }
              ></Input>
            </div>
            <Button type="button" title={"Enviar"} onClick={handleSendEmail}/>
          </form>
        </Modal>
      </Section>
    </Container>
  );
}
