import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Container, Section, Tittle, Header } from "./styles";
import { Input } from "../../common/components/Input/Input";
import Logo from "../../assets/argus-svg/argus-logo.svg";
import Icon from "../../assets/argus-svg/argus-icon-background.svg";
import TextButton from "../../common/components/TextButton/TextButton";
import { Button } from "../../common/components/Button/Button";
import { useAuth } from "../../common/hooks/auth";

export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signIn } = useAuth();
  const { navigate } = useNavigate();

  function handleSignIn(event) {
    event.preventDefault();

    signIn({ email, password });

    navigate('/dashboard');
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
            />
          </div>
        </Tittle>
        <form>
          <Input
            label="Email"
            id="email"
            type="email"
            onChange={ e => setEmail(e.target.value)}
          />
          <Input
            label="Senha"
            id="password"
            type="password"
            onChange={e => setPassword(e.target.value)}
          />
          <TextButton text="Esqueceu a senha ?" href="/" />
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
      </Section>
    </Container>
  );
}
