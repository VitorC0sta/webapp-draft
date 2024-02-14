import { Container, Section, Tittle, Header } from "./styles";
import { Input } from "../../common/components/Input/Input";
import Logo from "../../assets/argus-svg/argus-logo.svg";
import Icon from "../../assets/argus-svg/argus-icon-background.svg";
import TextButton from "../../common/components/TextButton/TextButton";
import { Button } from "../../common/components/Button/Button";
import { Slider } from "../../common/components/Slider/Slider";


export function SignIn() {
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
        <form action="submit">
          <Input $label="Email" $id="email" $type="email" />
          <Input $label="Senha" $id="password" $type="password" />
          <TextButton text="Esqueceu a senha ?" href={"#"} />
          <Button type={"submit"} text={"Entrar"} />
        </form>
      </Section>
      <Section className="panel">
        <img src={Icon}/>
        <div className="main-info">
          <div className="typewriter">
            <p>Líder em Tecnologia de Detecção, Gestão de Fadiga e Distração.</p>
          </div>
          <Slider />
        </div>
      </Section>
    </Container>
  );
}
