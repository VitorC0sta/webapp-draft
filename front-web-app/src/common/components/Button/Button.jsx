import { Container } from "./styles";

export function Button({type, text}) {
  return(
    <Container type={type}>
      {text}
    </Container>
  )
}