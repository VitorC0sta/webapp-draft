import { Container } from "./styles";
import { Input } from "../Input/Input";
import { FiLock } from "react-icons/fi";
import { useState } from "react";
import { Button } from  "../Button/Button";
import { api } from "../../service/api";
import { useAuth } from "../../hooks/auth";
import { useNavigate } from "react-router-dom";

export function AccountConfiguration() {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const { signOut } = useAuth();
  const navigate = useNavigate();
  
  async function handleNewPassword( event ){
    event.preventDefault();
    
    console.log("enviando", oldPassword, newPassword);
    
    document.querySelector("#user-password").value = "";
    document.querySelector("#user-new-password").value = "";
    
    try {
      await api.put('/user/update', { password: oldPassword, newPassword });
      
      signOut();

      navigate('/', {replace: true});
    } catch (err) {
      return
    }
  }

  return (

    <Container>
      <h2>Alterações</h2>
      <form onSubmit={handleNewPassword}>
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
        <Button title="Alterar Senha" type="submit" $typeSubmit />
      </form>
    </Container>
  );
}
