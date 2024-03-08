import { Container } from "./styles";


export function Input({ icon, label, id, type, $srOnly, ...rest }) {
  return(
    <Container>
      <label className={ $srOnly ? 'sr-only' : "" } htmlFor={ id } >
        { label }
      </label>
      <div className="wrap-input">
        {icon}
        <input type={ type } id={id} placeholder={label} {...rest}/>
      </div>
    </Container>
  );
}

