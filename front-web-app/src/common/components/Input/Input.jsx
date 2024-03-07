import { Container } from "./styles";
import PropTypes from 'prop-types';

export function Input({ icon:Icon, label, id, type, $srOnly }) {
  return(
    <Container>
      <label className={ $srOnly ? 'sr-only' : "" } htmlFor={ id } >
        { label }
      </label>
      <div className="wrap-input">
        {Icon && <Icon size={16}/>}
        <input type={ type } id={id} placeholder={label}/>
      </div>
    </Container>
  );
}


Input.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string,
  type: PropTypes.string,
  $srOnly: PropTypes.string,
  icon: PropTypes.node,
}