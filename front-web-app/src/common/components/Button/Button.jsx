import { Container } from "./styles";

export function Button({ title, $typeSubmit, ...rest }) {  
  return (
    <Container $typeSubmit={$typeSubmit} {...rest}>
      {title}
    </Container>
  );
}
