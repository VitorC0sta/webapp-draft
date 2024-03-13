import { Container } from "./styles";
import { Input } from "../Input/Input";
import { FiLock } from "react-icons/fi";
import { useState } from "react";
import { Button } from "../../../pages/Profile/styles";

export function AccountConfiguration() {
  const [oldPassword, setOldPassword] = useState();
  const [newPassword, setNewPassword] = useState();

  return (
    <Container>
      <h2>Alterações</h2>
      <form action="submit">
        <Input
          icon={<FiLock size={14} />}
          label="Senha"
          id="user-password"
          type="password"
          onChange={ e => setOldPassword(e.target.value)}
        />
        <Input
          icon={<FiLock size={14} />}
          label="Nova senha"
          id="user-new-password"
          type="password"
          onChange={ e => setNewPassword(e.target.value)}
        />
      </form>
      <Button />
    </Container>
  );
}
