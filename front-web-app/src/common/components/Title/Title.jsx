import { Container } from "./styles";
import { PropTypes } from "prop-types";

export function Title({$text}) {
  return(
    <Container>
      <h1>
        { $text }
      </h1>
    </Container>
  );  
}

Title.propTypes = {
  $text: PropTypes.string,
}