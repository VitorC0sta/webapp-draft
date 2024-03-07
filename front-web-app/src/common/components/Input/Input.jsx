import { Container } from "./styles";

export function Input({ icon:Icon, label, id, type, $srOnly, ...rest }) {
  return(
    <Container>
      <label className={ $srOnly ? 'sr-only' : "" } htmlFor={ id } >
        { label }
      </label>
      <div className="wrap-input">
        {Icon && <Icon size={16}/>}
        <input type={ type } id={id} placeholder={label} {...rest}/>
      </div>
    </Container>
  );
}

