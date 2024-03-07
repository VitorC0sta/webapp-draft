import { Container } from "./styles";
import { FiLogOut, FiSettings } from "react-icons/fi";

export function UserMenu() {
  return (
    <Container>
      <img src="https://github.com/VitorC0sta.png" alt="User Logo" />

      <a href="/user">
        <FiSettings />
      </a>
      <a href="/" className="logout-btn">
        <FiLogOut />
      </a>
    </Container>
  );
}
