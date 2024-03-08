import { Container } from "./styles";
import { FiLogOut, FiSettings } from "react-icons/fi";
import { useAuth } from "../../hooks/auth";

export function UserMenu() {
  const { signOut } = useAuth();


  return (
    <Container>
      <img src="https://github.com/VitorC0sta.png" alt="User Logo" />

      <a href="/user">
        <FiSettings />
      </a>
      <a href="/" onClick={signOut} className="logout-btn">
        <FiLogOut/>
      </a>
    </Container>
  );
}
