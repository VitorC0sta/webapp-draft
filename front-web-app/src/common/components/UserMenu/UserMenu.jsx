import { Container } from "./styles";
import { FiLogOut, FiSettings } from "react-icons/fi";
import { useAuth } from "../../hooks/auth";
import { Link } from "react-router-dom";

export function UserMenu() {
  const { signOut } = useAuth();

  return (
    <Container>
      <Link to="/user">
        <FiSettings />
        Configurações
      </Link>
      <Link to="/" onClick={signOut} className="logout-btn">
        <FiLogOut />
        Sair
      </Link>
    </Container>
  );
}
