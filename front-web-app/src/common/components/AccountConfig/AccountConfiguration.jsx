import { Container } from "./styles";
import { Input } from "../Input/Input";
import { FiLock } from "react-icons/fi";

export function AccountConfiguration() {
  return (
    <Container>
      <h2>Alterações</h2>
      <form action="submit">
        <Input icon={ <FiLock size={14}/> } label="Senha" id="user-password" type="password" />
        <Input icon={ <FiLock size={14}/> } label="Nova senha" id="user-new-password" type="password" />
      </form> 
    </Container>
  );
}
