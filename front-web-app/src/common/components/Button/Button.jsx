import { Container } from "./styles";
import PropTypes from 'prop-types';

export function Button({ type, text }) {
  return(
    <Container type={type}>
      {text}
    </Container>
  )
}

Button.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string
}