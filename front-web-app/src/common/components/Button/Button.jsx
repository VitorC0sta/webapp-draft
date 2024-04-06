import { Container } from "./styles";

export function Button({ text, $typeSubmit, ...rest }) {
  return (
    <>
      { $typeSubmit ? (
        <Container {...rest} className="submit">
          {text}
        </Container>
      ) : (
        <Container {...rest}>{text}</Container>
      )}
    </>
  );
}
