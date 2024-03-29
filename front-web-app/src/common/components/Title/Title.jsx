import { Container } from "./styles";
import { PropTypes } from "prop-types";

export function Title({$text, className}) {
  return(
    <Container className={ className  }>
      <h1>
        { $text }
      </h1>
    </Container>
  );  
}

Title.propTypes = {
  $text: PropTypes.string,
  className: PropTypes.string,
}