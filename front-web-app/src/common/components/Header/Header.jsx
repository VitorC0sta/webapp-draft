import { Container, UserAvatar } from "./styles";
import { InputSearch } from "../InputSearch/InputSearch";

export function Header() {
  return (
    <Container>
      <InputSearch />
      <UserAvatar>

      </UserAvatar>
    </Container>
  )
}