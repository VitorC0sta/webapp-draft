import { Container } from "./styles";
import { PropTypes } from "prop-types";

export function Section({$row, children, ...rest }) {
  return(
    <Container direction={$row} { ...rest}>
      {children}
    </Container>
  )
}

Section.propTypes = {
  $row: PropTypes.bool,
  children: PropTypes.node
}