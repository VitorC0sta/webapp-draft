import { Container } from "./style";

export default function TextButton({href, text}) {
  return(
    <Container href={href} target="_blank">
      {text}
    </Container>
  );
}