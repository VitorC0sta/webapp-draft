import { Container } from "./styles";
import PropTypes from 'prop-types';

export function Button({ type, title }) {
  return(
    <Container type={type}>
      {title}
    </Container>
  )
}

Button.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string
}