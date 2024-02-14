import { Container } from "./styles";
import { FiPlus } from "react-icons/fi";
export function CreationButton() {
  return (
    <Container>
      <a href="#">
        Criar
        <FiPlus />
      </a>
    </Container>
  )
}