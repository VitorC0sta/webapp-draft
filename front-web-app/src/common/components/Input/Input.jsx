import { Container } from "./styles";
import PropTypes from 'prop-types';

export function Input({ label, id, type, $srOnly, ...rest }) {
  return(
    <Container>
      <label className={ $srOnly ? 'sr-only' : "" } htmlFor={ id } >
        { label }
      </label>
      <input type={ type } id={id} placeholder={label} {...rest}/>
    </Container>
  );
}


Input.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string,
  type: PropTypes.string,
  $srOnly: PropTypes.string
}