import { Container } from "./styles";
import {PropTypes} from "prop-types";

export function Point({diameter, radio, color}) {
  

  return(
    <Container width={diameter} height={diameter} xmlns="http://www.w3.org/2000/svg">
      <circle cx={radio} cy={radio} r={radio} fill={color} />
    </Container>
  )
}

Point.propTypes = {
  diameter: PropTypes.string,
  radio: PropTypes.number,
  color: PropTypes.string
}