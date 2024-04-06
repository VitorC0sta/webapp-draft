import { Container } from "./styles";

export function ProfileImage({ name, ...rest }) {
  return(
    <Container {...rest}>
      { name? name.charAt(0) : '' }
    </Container>
  )
}