import { Container } from "./styles";
import { PropTypes } from "prop-types";

export function Header({ title, children }) {

  console.log(title);
  return(
    <Container>
      {children}
    </Container>
  );
}

Header.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
}