import { Container } from "./style";

export default function TextButton({text, ...rest}) {
  return(
    <Container {...rest}>
      {text}
    </Container>
  );
}