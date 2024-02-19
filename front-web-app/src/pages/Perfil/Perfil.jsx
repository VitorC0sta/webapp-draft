import { Container, Avatar, Form } from "./styles";
import { Input } from "../../common/components/Input/Input";
import { Button } from "../../common/components/Button/Button";
import { FiCamera, FiLogOut } from "react-icons/fi";

export function Perfil() {
  return (
    <Container>
      <a href="/signin">
        <FiLogOut />
      </a>
      <div className="body-container">
        <Form>
          <Avatar>
            <img
              src="https://github.com/VitorC0sta.png"
              alt="Imagem do usuário"
            />
            <label htmlFor="avatar">
              <FiCamera />
              <input type="file" id="avatar" />
            </label>
          </Avatar>
          <Input type="email" label="Email" id="input-email" />
          <Input type="text" label="Nome" id="input-name" />
          <Input type="password" label="Senha" id="input-password" />
          <Input type="password" label="Nova Senha" id="input-newpassword" />
          <Button type="submit" text="Atualizar" />
        </Form>
      </div>
    </Container>
  );
}
