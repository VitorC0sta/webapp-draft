import { Container } from "./styles";
import PropTypes from 'prop-types';

export function Button({ title, ...rest }) {
  return(
    <Container {...rest}>
      {title}
    </Container>
  )
}

Button.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string
}