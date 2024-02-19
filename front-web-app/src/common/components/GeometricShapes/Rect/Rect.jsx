import { Container } from "./styles";
import { PropTypes } from "prop-types";

export function Rect({width, height, $borderRadio= width*0.1, color}) {
  const widthString = String(width)+"px";
  const heightString = String(height)+"px";

  return(
    <Container width={widthString} height={heightString} xmlns="http://www.w3.org/2000/svg">
      <rect width={width} height={height} rx={$borderRadio} ry={$borderRadio} fill={color} />
    </Container>
  )
}

Rect.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  $borderRadio: PropTypes.number,
  color: PropTypes.string
}